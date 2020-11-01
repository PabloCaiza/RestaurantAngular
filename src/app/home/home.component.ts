import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../services/promotion.service';
import {DishService} from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {Dish} from '../shared/dish';
import {LeaderService} from '../services/leader.service';
import {Leader} from '../shared/leader';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promotion:Promotion;
  dish: Dish;
  leader:Leader;
  constructor(private promotionService:PromotionService,private dishService:DishService,private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.promotion=this.promotionService.getFeaturedPromotion();
    this.dish=this.dishService.getFeaturedDish();
    this.leader=this.leaderService.getFeaturedLeader();
    
    
  }

}
