import { Injectable } from '@angular/core';

import {Dish} from  '../shared/dish';

import {Observable,of} from 'rxjs';
import {delay,map} from 'rxjs/operators';
import {baseUrl } from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient) { }

  
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseUrl+"dishes");
  }

  getDish(id: string): Observable<Dish> {

    return this.http.get<Dish[]>(baseUrl+"dishes/?id="+id).pipe(map(dishes=>dishes[0]));
   
  }

  getFeaturedDish(): Observable<Dish> {

    return this.http.get<Dish[]>(baseUrl+"dishes/?featured=true").pipe(map(dishes=>dishes[0]));
    

  }
  getDishesIds():Observable<string []>{
   // const dishes:string[]=[];
    //DISHES.forEach((dish)=>{
      //dishes.push(dish.id);
    //})
    return this.getDishes().pipe(map((dishes:Dish[])=>{
      return dishes.map(dish=>dish.id);
    }));
    
  }


}
