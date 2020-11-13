export class Comment {
    rating: number;
    comment: string;
    author: string;
    date: string;
    constructor(rating:number,comment:string,autor:string,date:string){
        this.rating=rating;
        this.comment=comment;
        this.author=autor;
        this.date=date;
    }


}