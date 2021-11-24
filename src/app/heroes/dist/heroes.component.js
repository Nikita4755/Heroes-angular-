"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroesComponent = void 0;
var core_1 = require("@angular/core");
var ELEMENT_HEROES = [
    { position: 1, name: 'Dr Nice', strength: 3 },
    { position: 2, name: 'Narco', strength: 2 },
    { position: 3, name: 'Bombasto', strength: 3 },
    { position: 4, name: 'Celeritas', strength: 4 },
    { position: 5, name: 'Magneta', strength: 4 },
    { position: 6, name: 'RubberMan', strength: 5 },
    { position: 7, name: 'Dynama', strength: 1 },
    { position: 8, name: 'Dr IQ', strength: 3 },
    { position: 9, name: 'Magma', strength: 4 },
    { position: 10, name: 'Tornado', strength: 5 },
];
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.displayedColumns = ['position', 'name', 'strength'];
        this.dataSource = ELEMENT_HEROES;
        this.heroes = "";
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'app-heroes',
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css']
        })
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
