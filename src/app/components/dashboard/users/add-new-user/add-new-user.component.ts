import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from './../../../../service/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  @Input() message : string;
  @Input() editMode: number;
  @Input() data: any;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
  maxDate = new Date();
  loginForm: FormGroup
  msg = "";
  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      sname: [''],
      fname: [''],
      address: [''],
      phone: [''],
      dob: [''],
      class: ['']
    })
    this.service.getUser().subscribe( 
      res => {
        // console.log("object", res);
      }
    )
  }
  onSubmit(){
    let fdata = this.loginForm.value;
    if(this.editMode > 0){
      this.service.updateStudent(this.editMode, fdata).subscribe(
        res => {
          this.msg = "Update successfull !"
          this.ViewDidLoad();
          this.loginForm.reset();
  
        }
      )   
    } else {
      this.service.addStudent(fdata).subscribe(
        res => {
          this.msg = "Register successfull !"
          this.ViewDidLoad();
          this.loginForm.reset();
  
        }
      )   
    }
   
  }

  onlyAlpha(event)
      {   
        var k;  
        k = event.charCode;
        return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 ); 
      }

   onlyNumber(event)
     {   
        var n;  
        n = event.charCode;  
        return(n > 47 && n < 58); 
     }

  ViewDidLoad(){
    setTimeout(() => {
        this.msg = ""
        this.close.emit()
        this.submit.emit();
    }, 3000);
}

  onClose(){
    this.close.emit();
  }
}
