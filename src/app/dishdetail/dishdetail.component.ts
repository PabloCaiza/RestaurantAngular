import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  //@Input()
  pickedDish: Dish;
  dishIds:string [];
  prev:string;
  next:string;

  constructor(private dishService: DishService,
    private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.dishService.getDishesIds().subscribe(dishesIds=>this.dishIds=dishesIds);
   this.route.params.pipe(switchMap((params:Params)=>this.dishService.getDish(params['id']))).subscribe((dish:Dish)=> {this.pickedDish=dish; this.setPrevNext()});
  
  }
  setPrevNext():void{
    let index:number=this.dishIds.indexOf(this.pickedDish.id);
    if(index===0){
      this.prev=this.dishIds[this.dishIds.length-1];
      this.next=this.dishIds[index+1];
      
    }else if(index==this.dishIds.length-1){
      this.prev=this.dishIds[index-1];
      this.next=this.dishIds[0];
    }else{
      this.next=this.dishIds[index+1];
      this.prev=this.dishIds[index-1];
    }
  }

  goBack(): void {
    this.location.back();

  }

}
