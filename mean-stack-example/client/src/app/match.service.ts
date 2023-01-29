import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Match } from './match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private url = 'http://localhost:5200';
  private matches$: Subject<Match[]> = new Subject();
  
  constructor(private httpClient: HttpClient) { }
  
  private refreshMatches() {
    this.httpClient.get<Match[]>(`${this.url}/matches`)
      .subscribe(matches => {
        this.matches$.next(matches);
      });
  }
  
  getMatches(): Subject<Match[]> {
    this.refreshMatches();
    return this.matches$;
  }

}
