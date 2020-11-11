import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  //@Input()
  pickedDish: Dish;

  constructor(private dishService: DishService,
    private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.params['id'];
    this.dishService.getDish(id).subscribe(pickedDish => this.pickedDish = pickedDish);
  }
  goBack(): void {
    this.location.back();

  }

}
