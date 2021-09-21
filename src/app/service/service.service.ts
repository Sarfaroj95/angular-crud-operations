import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private Url = environment.url
  
  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get(this.Url+"users")
  }

  registerUser(data: any){
    return this.http.post(this.Url+"users", data)
  }

  addStudent(data: any){
    return this.http.post(this.Url+"students", data)
  }
  updateStudent(id: number, data: any){
    return this.http.put(this.Url+"students/" + id, data)
  }

  getStudent(){
    return this.http.get(this.Url+"students")
  }
  getOneStudent(id: number){
    return this.http.get(this.Url+"students/"+id)
  }
  deleteStudent(id: number){
    return this.http.delete(this.Url+"students/"+id)
  }
}
