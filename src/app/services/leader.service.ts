import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';
import {of,Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
=======
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
>>>>>>> 44a611387d18ce758d8c761c5e8d1c6e6cda8c73

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

<<<<<<< HEAD
  getLeaders():Observable<Leader[]>{
    return of(LEADERS).pipe(delay(2000));
    
  }
  getFeaturedLeader():Observable<Leader>{
    return of(LEADERS.filter(leader=>leader.featured)[0]).pipe(delay(2000));
  
  }
  getLeader(id:string):Observable<Leader>{
    return of(LEADERS.filter(leader=>leader.id==id)[0]).pipe(delay(2000));
 
=======
  getLeaders(): Promise<Leader[]> {

    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(LEADERS) }, 2000);

    });

  }
  getFeaturedLeader(): Promise<Leader> {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(LEADERS.filter(leader => leader.featured)[0]), 2000);
    });
  }
  getLeader(id: string): Promise<Leader> {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(LEADERS.filter(leader => leader.id == id)[0]), 2000);

    });
>>>>>>> 44a611387d18ce758d8c761c5e8d1c6e6cda8c73
  }

}
