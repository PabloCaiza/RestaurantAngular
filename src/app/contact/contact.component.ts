import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {FeedBack,ContactType} from '../shared/feedback';
import {flyInOut} from '../animations/app.animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],  
  host:  {
    '[@flyInOut]':'true',
    'style':'display:block;'
 }  ,
 animations:[flyInOut()]
})
export class ContactComponent implements OnInit {
  feedbackForm:FormGroup;
  feedback:FeedBack;
  contactType=ContactType;
  @ViewChild('fform') feedbackFormDirective;

  formsError={
    'firstname':'',
    'lastname':'',
    'telnum':'',
    'email':''
  }
  validationMessages={
    'firstname':{
      'required':'First Name is requiered',
      'minlength':'First Name must be at least 2 character long',
      'maxlength':'First Name cannot be more than 25 characters long'
    },
    'lastname':{
      'required':'Last Name is requiered',
      'minlength':'Last Name must be at least 2 character long',
      'maxlength':'First Name cannot be more than 25 characters long'
    },
    'telnum':{
      'required':'Tel Number is requiered',
      'pattern':'Tel Number must contain numbers'
    },
    'email':{
      'required':'Email is requiered',
      'email':'Email not in valid format'
    }
    

};

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
      firstname: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(25) ]),
      lastname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(25) ]),
      telnum:new FormControl(0,[Validators.required,Validators.pattern("") ]),
      email:new FormControl('',[Validators.required,Validators.email]),
      agree:new FormControl(false),
      contacttype:new FormControl('None'),
      message:new FormControl('')
    });

    this.feedbackForm.valueChanges.subscribe(data=>this.onValueChanged(data));


   

  }
  onValueChanged(data?:any) :void{
    
    if(!this.feedbackForm)return;
    
    const form =this.feedbackForm;

    for(const field in this.formsError){
      this.formsError[field]='';
      const control=form.get(field);
      
      if(control && control.dirty && !control.valid && control.touched ){
        
        
        const message=this.validationMessages[field];
       
        for(const key in control.errors){
         
          if(message[key] ){
            
            this.formsError[field]+=message[key]+" ";
            console.log(this.formsError[field]);
          }

        }
      }

    }


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
