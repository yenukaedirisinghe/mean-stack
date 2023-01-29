import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../match';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-match-list',
  template: `
   <app-nav-bar-two></app-nav-bar-two>
   <div class="container-md">
   <br>
   <br>
   <br>
   <br>
    <div class="row">


    <div class="card col-md4 mx-1 my-3" style="width: 18rem;" *ngFor="let matche of matches$ | async">
    <img class="card-img-top" src="{{matche.url}}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">{{matche.title}}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Time: {{matche.time}} </li>
    <li class="list-group-item">Date:{{matche.date}}</li>
    <li class="list-group-item">Series:{{matche.series}} </li>
    </ul>
    <div class="card-body text-center">
    <a href="#" class="btn btn-primary" [routerLink]="['ground']">Book Now</a>
    </div>
    </div>



    </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class MatchListComponent implements OnInit{
  matches$: Observable<Match[]> = new Observable();

  constructor(private matchService: MatchService) { }
 
 ngOnInit(): void {
   this.fetchMatches();
 }

 private fetchMatches(): void {
  this.matches$ = this.matchService.getMatches();
}
 
}
