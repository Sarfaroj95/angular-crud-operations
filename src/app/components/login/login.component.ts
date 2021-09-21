import { Router } from '@angular/router';
import { ServiceService } from './../../service/service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  msg = "";

  constructor( private fb: FormBuilder, 
               private service: ServiceService,
               private router: Router
              ) {
                let auth = localStorage.getItem("auth");
                if(auth){
                  this.router.navigate(['/dashboard'])
                }
               }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['sarfaroj@gmail.com'],
      password: ['']
    })
  }

  onSubmit(){
    let d = this.loginForm.value;
    let auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    let checkData = {
      email: "sarfaroj@gmail.com",
      password: "1234"
    }
    if(JSON.stringify(d) === JSON.stringify(checkData)){
      this.router.navigate(['/dashboard']);
      localStorage.setItem("auth", auth)
    } else {
      this.msg = "Email or Password is wrong !"
      this.ViewDidLoad();
    } 
  }

  ViewDidLoad(){
    setTimeout(() => {
        this.msg = ""
    }, 3000);
}

}
