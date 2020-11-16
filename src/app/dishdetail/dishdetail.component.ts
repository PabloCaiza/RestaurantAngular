import { Component, OnInit, Input,ViewChild,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';
import { DishService } from '../services/dish.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  errorMsg:string;
  commentForm:FormGroup;
  @ViewChild('cform') commentFormDirective;

  formError={
    name:'',
    comment:''
  };
  validationMessage={
    name:{
      required:'Name is required',
      minlength:'Author name must be at least 2 characters long'
    },
    comment:{
      required:'Comment is required',
      minlength:'Comment must be at least 2 characters long '

    } 
    
  }


  
  

  constructor(private dishService: DishService,
    private location: Location, private route: ActivatedRoute,@Inject('BaseUrl') private baseUrl) { 
      this.createCommentForm();
    }

  ngOnInit(): void {
  this.dishService.getDishesIds().subscribe(dishesIds=>this.dishIds=dishesIds);
   this.route.params.pipe(switchMap((params:Params)=>this.dishService.getDish(params['id']))).subscribe((dish:Dish)=> {this.pickedDish=dish; this.setPrevNext()},error=>this.errorMsg=<any>error);
  
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
  createCommentForm():void{
    this.commentForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(2)]),
      rating:new FormControl('5'),
      comment:new FormControl('',[Validators.required,Validators.minLength(2)])
    });
    
    this.commentForm.valueChanges.subscribe(data=>this.onValueChanged());

  }
  onValueChanged():void{
    const form=this.commentForm;
    for(const field in this.formError){
       this.formError[field]="";
       const control=form.get(field);
       const message=this.validationMessage[field];
       for(const key in control.errors){
         if(message[key]){
          this.formError[field]=message[key];
         }

       }

    }

  }
  goBack(): void {
    this.location.back();

  }
  onSubmit():void{
    this.publishComment();
    this.cleanForm();
    
  }
  cleanForm():void{
    
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      name:'',
      rating:5,
      comment:''

    });

  }

  publishComment():void{
    let comment=new Comment(
      this.commentForm.get('rating').value,
      this.commentForm.get('comment').value,
      this.commentForm.get('name').value,
      Date.now().toString());
   
    this.pickedDish.comments.push(comment);
  }

}
