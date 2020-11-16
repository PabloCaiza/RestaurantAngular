import { Injectable } from '@angular/core';

import {Dish} from  '../shared/dish';

import {Observable,of} from 'rxjs';
import {delay,map,catchError} from 'rxjs/operators';
import {baseUrl } from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from '../services/process-httpmsg.service';



@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseUrl+"dishes").pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: string): Observable<Dish> {

    return this.http.get<Dish[]>(baseUrl+"dishes/?id="+id).pipe(map(dishes=>dishes[0])).pipe(catchError(this.processHTTPMsgService.handleError));
   
  }

  getFeaturedDish(): Observable<Dish> {

    return this.http.get<Dish[]>(baseUrl+"dishes/?featured=true").pipe(map(dishes=>dishes[0])).pipe(catchError(this.processHTTPMsgService.handleError));
    

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
