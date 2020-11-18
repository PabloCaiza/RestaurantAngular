import { Component, OnInit,Inject } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {flyInOut,expand} from '../animations/app.animations';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host:  {
     '[@flyInOut]':'true',
     'style':'display:block;'
  }  ,
  animations:[flyInOut(),expand()]
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
