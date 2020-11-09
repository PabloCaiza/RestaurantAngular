import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotions';
import { Promotion } from '../shared/promotion'
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
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
  }


}
