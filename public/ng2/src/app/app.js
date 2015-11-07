var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var hero_1 = require('./hero');
var angular2_2 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = '测试 app 安gular';
        this.myName = 'kun l';
        this.hh = '';
        this.heroes = [
            new hero_1.Hero(1, 'tetset'),
            new hero_1.Hero(2, 'aaaa')
        ];
    }
    AppComponent.prototype.add = function (val) {
        this.heroes.push(new hero_1.Hero(3, val));
        delete this.hh.value;
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_2.NgFor],
            template: "\n        <h1>{{ title }}</h1>\n        <p>\u6211\u7684\u7B2C\u4E00\u4E2A angular2 \u5E94\u7528{{ title }} --by {{ myName }}</p>\n        <input type=\"text\" #hh placeholder=\"\u8BF7\u8F93\u5165\"><button (click)=\"add(hh.value)\">\u6DFB\u52A0</button>\n        <ul>\n            <li *ng-for=\"#hero of heroes, #i=index\">{{ i }} \u548C {{ hero.name }}</li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map