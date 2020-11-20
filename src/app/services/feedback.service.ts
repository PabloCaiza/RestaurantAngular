import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedBack } from '../shared/feedback';
import {HttpClient,HttpHeaders } from '@angular/common/http'
import {baseUrl} from '../shared/baseurl';
import { catchError } from 'rxjs/operators';
import {ProcessHTTPMsgService} from '../services/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient,private processHTTPMsgService:ProcessHTTPMsgService) { }

  submitFeedback(feedBack:FeedBack):Observable<FeedBack>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post<FeedBack>(baseUrl+"feedback",feedBack).pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
