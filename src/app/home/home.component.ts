import { Component, OnInit,Inject } from '@angular/core';
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
  dishErrorMsg:string;
  constructor(private promotionService:PromotionService,private dishService:DishService,private leaderService:LeaderService,
    @Inject('BaseUrl') private baseUrl) { }

  ngOnInit(): void {
  this.promotionService.getFeaturedPromotion().subscribe(promotion=>this.promotion=promotion);
  this.dishService.getFeaturedDish().subscribe(dish=>this.dish=dish,errorMsg=>this.dishErrorMsg=errorMsg);
  this.leaderService.getFeaturedLeader().subscribe(leader=>this.leader=leader);
    
    
  }

}
