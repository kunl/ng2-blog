title: ng2-attribute-directive
date: 2016-05-08 18:37:38
tags: 
- angular2
---

``` css

a{color: red}
```

Attribute directive 可以改变 DOM 元素的行为或者表现。
本文中我们将
    . 写一个 Attribute directive 来改变 DOM 的文本颜色
    . [在模板中应用 Attribuet directive](#创建一个简单的-attribute-directive)
    . [对用户的事件做出响应](#响应用户的事件)
    . 通过 数据绑定(data binding) 向 directive 中传递数据
    
#### directive 概述
Angular 中有三种 directive
 1. Component 组件
 2. Structural directive 结构化 directive
 3. Attribute directive 属性 directive    
 
组件(Component)，实际上是一个有模板的 directive。它是三种 directive 最普通的一个，在我们应用中写的最多。

[结构化 directive ](https://angular.io/docs/ts/latest/guide/structural-directives.html) (Structural directive)，通过添加或者删除一些 DOM 元素来改变 DOM 的布局，[NgFor](https://angular.io/docs/ts/latest/guide/template-syntax.html#ngFor) 和 [NgIf](https://angular.io/docs/ts/latest/guide/template-syntax.html#ngIf) 就是最熟悉的两个例子。
 
属性 directive(Attribute directive)，改变元素的展示方式和行为动作。例如内置的 [NgStyle](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngStyle) 指令，我们可以同时改变几个元素的样式(css)。


----

接下来完成一个 attribute directive， 通过这个指令来，当用户鼠标停在一个 DOM 元素的时候改变当前元素的背景颜色

通过 [StyleBinding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngStyle) 这个内置的指令可以设置元素的背景
        
```html
<p [style.background]='"green"'>绿色</p>
```
当让了，创建一个指令不会仅仅这么简单。我们还需要在用户鼠标悬停的时候，改变元素的背景来响应用户的操作。

----

#### 创建一个简单的 attribute directive
一个 attribute 指令至少需要一个由 @Directive 装饰器注释的 controller class。@DIrective 装饰器内指定一个 选择器(css selector), 指令就是通过这个选择器来识别相应的 DOM 元素。这个 controller class 内实现了指令所需要的行为动作。

创建一个新的文件并命名为 color.directive.ts， 代码如下
``` typescript 
import { Directive ,ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[color]' // css 选择器，可以匹配到 <p color> *** </p>
})

export class ColorDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.color = 'green';
    }
}
```

首先我们从 Angular 库中引入了一些东西。例如 Directive 来创建 @Directive() 装饰器，把 ElementRef 注入到当前指令的构造函数(constructor)中，方便我们获得当前的 DOM 元素。

然后用一对象定义了指令的元数据(metadata)作为参数传入 @Directive 装饰器内。一个 @Directive 装饰器通常通过 css [属性选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)来和模板中的html元素建立关系，如 <code>[color]</code>, Angular 将会定位到模板内所有包含 attribute 为  <code>heiglight</code>  的元素。


紧挨着装饰器下面，我们定义了一个 controller class 其内部包含了指令的相关逻辑。同时为了方便其他组件引用，我们把它导出(export)。


Angular 为定位到的每一个元素创建了指令(directive)的 controller class 实例，并且在构造函数中注入 Angular ElementRef。ElementRef 是一个 服务(service)，我们通过它的 nativeElement 属性直接获取到 DOM 元素。然后我们就可以通过 DOM 元素的 style.backgroundColor 接口来设置元素的背景颜色。

----
#### 如何使用 attribute directive
创建 app.component.html 文件，代码如下：
``` html 
<p>尝试一下 attribute directive，这里是<span color>绿色文字</span></p>
```

创建 app.component.ts 文件，引入 app.component.html 模板文件，代码如下：
``` typescript
import { Component } from '@angular/core';

import { ColorDirective } from './color.directive';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ColorDirective]
})

export class AppComponent {
    constructor(){}
}
```
用 import 引入我们的 ColorDirective class， 添加到当前的组件元数据(metadata)配置中, 这样 Anuglar 就可以识别出模板中我们定义了 color 属性的 span 元素。

[具体效果](http://kunl.in/ng2/#/color)，[相关源码](https://github.com/kunl/ng2/blob/gh-pages/app/example/%2Bcolors/color.demo.ts)
![ColorDirective](http://78rem6.com1.z0.glb.clouddn.com/2016-05-08_230409.png)
来回顾一下 Angular 做了些什么，首先 Angular 定位到了包含 ` color ` 属性的元素，紧接着创建了 ColorDirective class 的实例，注入当前元素的引用(ElementRef)，最后在构造函数中设置 ` <span> ` 元素的颜色为 green。


#### 对用户的事件做出响应

我们不应仅限于简单的设置元素的颜色，指令也应该响应用户的事件，比如鼠标悬停的时候改变元素颜色。
我们需要
    1 监听用户的鼠标移入移出动作
    2 通过设置或还原元素的颜色来响应用户的动作

给指令的元数据(metadata)配置 host 属性，配置两个鼠标动作到指令内部的对应方法上。    
``` typescript
host: {
  '(mouseenter)': 'onMouseEnter()',
  '(mouseleave)': 'onMouseLeave()'
}
```
host 属性可以匹配到 attribute 的宿主 DOM 元素的引用，例如上文中的 `<span color>绿色文字</span>`。如果用旧的语法，我们应该给 elementRef.nativeElement 添加事件。
但是这带来了新的问题
    1 必须正确的添加事件监听(listeners)
    2 当指令销毁的时候，需要手动取消事件(listeners)以便释放内存
    3 需要直接与 DOM API 交互，手动操作 DOM。但是我们通常是避免直接操作 DOM
所以，Angular 提供了 host 来避免以上问题。

接下来，来实现刚才的两个鼠标事件
``` typescript
onMouseEnter() { this.setColor('yellow'); }
onMouseLeave() { this.setColor('green'); }

private setColor(color) {
    this.el.style.color = color;
}
```
完整的代码如下：
``` typescript

import { Directive ,ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[color]', // css 选择器，可以匹配到 <p color> *** </p>
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class ColorDirective {
    private el: HTMLElement;
    
    constructor(el: ElementRef) {
        this.el = el.nativeElement;
        
        this.el.style.color = 'green';
    }
    
    onMouseEnter() { this.setColor('yellow'); }
    onMouseLeave() { this.setColor('green'); }

    private setColor(color) {
        this.el.style.color = color;
    }
}

```
效果入下
<video src="http://78rem6.com1.z0.glb.clouddn.com/ng2-color-directive-hover5534.wmv"></video>

#### 通过 Input 绑定数据(data binding)
当前我们的 ColorDirective 的颜色是固定不变的，我们应该自定义初始化的颜色，如下：
``` html
<p color="myColor">第一个 directive</p>
```
升级当前的 ColorDirective，通过 Input 来获取外界的颜色值
最终代码如下：
``` typescript
import { Directive ,ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[color]', // css 选择器，可以匹配到 <p color> *** </p>
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class ColorDirective {
    private _defaultColor = 'yellow';
    private el: HTMLElement;
    
    @Input('color') myColor: string;
    
    constructor(el: ElementRef) {
        this.el = el.nativeElement;
        
        this.el.style.color = this.myColor || this._defaultColor;
    }
    
    onMouseEnter() { this.setColor('yellow'); }
    onMouseLeave() { this.setColor('green'); }

    private setColor(color) {
        this.el.style.color = color;
    }
}

```
@Input 装饰器，通过 color 把元素的 color 属性值传递到 directive 中。与 myColor 绑定，当一个元素没有设置 color 值的时候，directive 会给默认给它设置成 yellow。

最终版的 app.component.html 模板文件：
``` html 

<p>尝试一下 attribute directive，这里是<span [color]="appColor">绿色文字</span></p>
<button (click)="appColor = 'blue' ">切换</button>

```
在 `[color]="appColor"`中 appColor 是数据源，不需要主动声明；color 是数据绑定的目标，必须在 directive 中声明，否则报错。













