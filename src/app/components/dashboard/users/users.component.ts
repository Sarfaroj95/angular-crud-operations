import { ServiceService } from './../../../service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  students: any = [];
  studentData: any = [];
  msg: string = "";
  editID : number = 0 ;
  confirmMsg: string = ""
  deleteID;
  constructor(private service: ServiceService) {
    this.getData();
   }

  ngOnInit(): void {
  }

  getData(){
    this.service.getStudent().subscribe( res => {
      this.students = res
    })
  }
  addNew(){
    this.msg = "Hi I'm New components"
  }

  onHandl(){
    this.msg = "";
    this.editID = 0;
    this.studentData = [];
  }

  getCurrent(){
    this.getData();
  }

  editForm(id: number){
    this.editID = id;
    this.service.getOneStudent(id).subscribe( response => {
      this.studentData = response;
    })
  }

  deleteAlert(id){
   this.deleteID = id;
   this.confirmMsg="Are you sure? You want to delete."
  }
  closeAlert(){
    this.confirmMsg = "";
  }

  deleteStudent(){
    this.service.deleteStudent(this.deleteID).subscribe( response => {
    this.confirmMsg = "";
    this.getData();
    })
  }

}
