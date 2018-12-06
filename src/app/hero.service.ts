import{Injectable} from '@angular/core';
import{Hero} from './hero';
import{HEROES} from './mock-heroes';
import{Observable,of} from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
    providedIn:'root'
})
export class HeroService{

    private _url:string = "./../assets/data/heroes.json";
    constructor(private http:HttpClient){}

    // getHeroes() : Observable<Hero[]>{
    //     return of(HEROES);
    // }

    getHeroes():Observable<Hero[]>{
            return this.http.get<Hero[]>(this._url)
                      .pipe(
                            catchError(this.errorHandler)
                      );
    }
    errorHandler(error : HttpErrorResponse){
            return Observable.throw(error.message|| "Server Error")
    }

    getHero(id:number):Observable<Hero>{
        return of(HEROES.find(hero => hero.id === id))
    }
}