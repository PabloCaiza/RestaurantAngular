import { Component, OnInit,Inject } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  dishes:Dish[] ;
  selectedDish:Dish;
  errorMsg:string;

  constructor(private dishService:DishService,@Inject('BaseUrl') private baseUrl) { }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(DISHES=>{
      this.dishes=DISHES;

    },errorMsg=>this.errorMsg=<any>errorMsg);
  }
  onSelect(pickedDish:Dish): void{
    this.selectedDish=pickedDish;
  }

}
