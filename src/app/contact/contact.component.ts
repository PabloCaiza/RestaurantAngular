import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {FeedBack,ContactType} from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm:FormGroup;
  feedback:FeedBack;
  contactType=ContactType;
  @ViewChild('fform') feedbackFormDirective;

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  createForm():void{
    
    // this.feedbackForm=this.fb.group({
    //   firstname:['',Validators.required],
    //   lastname:['',Validators.required],
    //   telnum:[0,Validators.required],
    //   email:['',Validators.required],
    //   agree:false,
    //   contacttype:'None',
    //   message:''

    // });
    this.feedbackForm=new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      telnum:new FormControl(0,Validators.required),
      email:new FormControl('',Validators.required),
      agree:new FormControl(false),
      contacttype:new FormControl('None'),
      message:new FormControl('')
    }


    );

  }
  onSubmit():void{
    this.feedback=this.feedbackForm.value;
    this.feedbackForm.reset({
      firstname:'',
      lastname:'',
      telnum:0,
      email:'',
      agree:false,
      contacttype:'None',
      message:''


    });
    
    this.feedbackFormDirective.resetForm();
    console.log(this.feedback);

  }
  

}
