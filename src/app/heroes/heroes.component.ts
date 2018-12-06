import{ Component } from '@angular/core';
import{Hero} from './../hero'
import { HeroService } from '../hero.service';

@Component({
    selector:'app-heroes',
    templateUrl:'./heroes.component.html',
    styleUrls:['./heroes.component.css']
})

export class HeroesComponent{
    heroes:Hero[];
    selectedHero : Hero;
    public errormessage;

    constructor(private heroService:HeroService){
        this.getHeroes();
    }

    getHeroes():void{
        this.heroService.getHeroes()
            .subscribe(data => this.heroes =data,
                        error => this.errormessage =error)
    }

    // getHeroes():void{
    //     this.heroService.getHeroes()
    //         .subscribe(heroes => this.heroes = heroes);
    // }


    onSelect(hero:Hero):void{
        this.selectedHero =hero;
    }

    selectHero(hero:Hero):void{
        this.selectedHero=hero;
    }
}