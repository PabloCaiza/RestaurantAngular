

export class FeedBack{
    firstName:string;
    lastName:string;
    telNum:number;
    email:string;
    agree:boolean;
    contactType:string;
    message:string;
    constructor(firstName:string,lastName:string,telNum:number,email:string,agree:boolean,contactType:string,message:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.telNum=telNum;
        this.email=email;
        this.agree=agree;
        this.contactType=contactType;
        this.message=message;
    }


}
export const ContactType =['None','Tel','Email'];