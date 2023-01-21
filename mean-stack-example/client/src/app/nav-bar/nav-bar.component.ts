import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-md">
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
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>      
      </ul>
    </div>
    <form class="form-inline">
    <button class="btn  btn-outline-secondary mx-3" type="button">Sign in</button>
    //<button class="btn btn-outline-success" type="button">Sign Up</button>
    </form>
    </div>
  </nav>

  `,
  styles: [
  ]
})
export class NavBarComponent {

}
