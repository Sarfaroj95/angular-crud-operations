import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceService } from './service/service.service';
import { HttpClientModule} from "@angular/common/http"
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { AddUserComponent } from './components/dashboard/add-user/add-user.component';
import { AddNewUserComponent } from './components/dashboard/users/add-new-user/add-new-user.component';
import { AlertComponent } from './components/dashboard/users/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    UsersComponent,
    AddUserComponent,
    AddNewUserComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
