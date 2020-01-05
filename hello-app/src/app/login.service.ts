import { Injectable } from '@angular/core';
import { LoginModel } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validate(login : LoginModel) {
    if(login.userid == "Bhushan" && login.password == "oracle")
      alert("Login Successful");
    else
      alert("Login Failed !!");
  }
}
