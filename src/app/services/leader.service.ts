import { Injectable } from '@angular/core';

import {Leader} from '../shared/leader';
import {of,Observable} from 'rxjs';
import {catchError, delay,map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {baseUrl} from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,private processHTTPMasgService:ProcessHTTPMsgService ) { }


  getLeaders():Observable<Leader[]>{
   
    return this.http.get<Leader[]>(baseUrl+"leadership").pipe(catchError(this.processHTTPMasgService.handleError));
    
  }
  getFeaturedLeader():Observable<Leader>{
    
    return this.http.get<Leader []>(baseUrl+"leadership"+"/?featured=true").pipe(map(leaders=>leaders[0])).pipe(catchError(this.processHTTPMasgService.handleError));
  
  }
  getLeader(id:string):Observable<Leader>{
    
    return this.http.get<Leader>(baseUrl+"leadership/"+id).pipe(catchError(this.processHTTPMasgService.handleError));
  }


}
