import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../../service/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  loginForm: FormGroup
  msg = "";
  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      phone: [''],
      email: [''],
      class: ['']
    })
    this.service.getUser().subscribe( 
      res => {
        console.log("object", res);
      }
    )
  }
  onSubmit(){
    let d = this.loginForm.value;
    this.service.addStudent(d).subscribe(
      res => {
        this.msg = "Register successfull !"
        this.ViewDidLoad();
        this.loginForm.reset();
      }
    )   
  }

  ViewDidLoad(){
    setTimeout(() => {
        this.msg = ""
    }, 3000);
}

}