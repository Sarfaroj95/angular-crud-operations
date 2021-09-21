import { ServiceService } from './../../service/service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup
  msg = "";
  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      password: ['']
    })
    this.service.getUser().subscribe( 
      res => {
        console.log("object", res);
      }
    )
  }
  onSubmit(){
    let d = this.loginForm.value;
    this.service.registerUser(d).subscribe(
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
