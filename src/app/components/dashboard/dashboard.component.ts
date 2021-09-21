import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {
    let auth = localStorage.getItem("auth");
    if(!auth){
      this.router.navigate(['/signin'])
    }
   }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem("auth");
    this.router.navigate(['/signin'])

  }

}
