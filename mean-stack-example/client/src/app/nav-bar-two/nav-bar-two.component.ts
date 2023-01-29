import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-two',
  template: `

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-md">
  <a href="#" class="logo"> <i class="fas fa-dumbbell"></i></a>
  <a class="navbar-brand" href="#">Lord's Cricket Ground</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Match schedule</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>     
    </ul>
  </div>
  <form class="form-inline">
  <button class="btn  btn-outline-secondary mx-3" type="button" [routerLink]="['home']">Sign Out</button>

  </form>
  </div>
</nav>


  `,
  styles: [
  ]
})
export class NavBarTwoComponent {

}
