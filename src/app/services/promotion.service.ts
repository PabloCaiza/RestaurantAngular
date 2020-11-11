import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotions';
import { Promotion } from '../shared/promotion'
<<<<<<< HEAD
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
=======
>>>>>>> 44a611387d18ce758d8c761c5e8d1c6e6cda8c73
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
<<<<<<< HEAD
  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));

  }
  getPromotion(id: string): Observable<Promotion> {
    return of(PROMOTIONS.filter((promotion: Promotion) => {
      return promotion.id === id;

    })[0]).pipe(delay(2000));


  }
  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter((promotion: Promotion) => (promotion.featured))[0]).pipe(delay(2000));
  
=======
  getPromotions(): Promise<Promotion[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(PROMOTIONS), 2000);
    })
  }
  getPromotion(id: string): Promise<Promotion> {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(PROMOTIONS.filter((promotion: Promotion) => {
        return promotion.id === id;

      })[0]), 2000);

    });
  }
  getFeaturedPromotion(): Promise<Promotion> {


    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(PROMOTIONS.filter((promotion: Promotion) => (promotion.featured))[0]), 2000);
    });
>>>>>>> 44a611387d18ce758d8c761c5e8d1c6e6cda8c73
  }


}
