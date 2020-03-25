import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home-app-root',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {
  }

  jumpUrlMethod() {
    this.router.navigateByUrl('/login')
  } 
}
