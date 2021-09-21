import { ServiceService } from './../../../service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status = [];
  d;
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.service.getStudent().subscribe( response => {
      this.d = JSON.stringify(response).length;
      console.log("data", this.d);
      this.status = [
        {id: 1, title:"Total Student", count: this.d, img: "../../../../assets/img/school_black_48dp.svg"},
        {id: 2, title:"Total Teacher", count: 106, img: "../../../../assets/img/group_black_48dp.svg"},
        {id: 3, title:"Total Clark", count: 15, img: "../../../../assets/img/donut_large_black_48dp.svg"},
        {id: 4, title:"Others", count: 8, img: "../../../../assets/img/house_black_48dp.svg"},
    
      ]
    })
   
  }

}
