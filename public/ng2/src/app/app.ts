import {Component, bootstrap} from 'angular2/angular2';
import { Hero } from './hero';
import { NgFor } from 'angular2/angular2';
import {Hero} from "./hero";
import {Hero} from "./hero";

@Component({
    selector: 'my-app',
    directives :[NgFor],
    template: `
        <h1>{{ title }}</h1>
        <p>我的第一个 angular2 应用{{ title }} --by {{ myName }}</p>
        <input type="text" #hh placeholder="请输入"><button (click)="add(hh.value)">添加</button>
        <ul>
            <li *ng-for="#hero of heroes, #i=index">{{ i }} 和 {{ hero.name }}</li>
        </ul>
    `
})

export class AppComponent {
    title: string;
    myName: string;
    heroes: Heroes[];



    constructor(){
        this.title = '测试 app 安gular';
        this.myName= 'kun l';
        this.hh ='';
        this.heroes = [
            new Hero(1, 'tetset'),
            new Hero(2, 'aaaa')
        ];
    }

    add(val){
        this.heroes.push(new Hero(3, val));
        delete this.hh.value;
    }
}


bootstrap(AppComponent);