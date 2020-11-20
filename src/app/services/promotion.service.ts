import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion'
import {HttpClient} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay,map } from 'rxjs/operators';
import {baseUrl} from '../shared/baseurl'
import {ProcessHTTPMsgService} from '../services/process-httpmsg.service'
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient,private processHTTPMsgService:ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
   
    return this.http.get<Promotion[]>(baseUrl+"promotions").pipe(catchError(this.processHTTPMsgService.handleError));

  }
  getPromotion(id: string): Observable<Promotion> {


    return this.http.get<Promotion>(baseUrl+"promotions/"+id).pipe(catchError(this.processHTTPMsgService.handleError));


  }
  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseUrl+"promotions/?featured=true").pipe(map(promotions=>promotions[0])).pipe(catchError(this.processHTTPMsgService.handleError));
  

  }

}
