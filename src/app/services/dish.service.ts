import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {Dish} from  '../shared/dish';
import {DISHES} from  '../shared/dishes';
import {Observable,of} from 'rxjs';
import {delay} from 'rxjs/operators';
=======
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
>>>>>>> 44a611387d18ce758d8c761c5e8d1c6e6cda8c73

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
<<<<<<< HEAD
  
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {

    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
   
  }

  getFeaturedDish(): Observable<Dish> {

    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    
=======

  getDishes(): Promise<Dish[]> {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(DISHES);
      }, 2000);

    });
  }
  getDish(id: string): Promise<Dish> {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(DISHES.filter((dish: Dish) => {
        return dish.id === id;

      })[0]), 2000);
    });
  }
  getFeaturedDish(): Promise<Dish> {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(DISHES.filter((dish: Dish) => (dish.featured))[0]), 2000);
    });
>>>>>>> 44a611387d18ce758d8c761c5e8d1c6e6cda8c73
  }


}
