import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login : LoginModel;
  roles : string[];
  submitted : boolean;

  ngOnInit(){

  }
  constructor(private service : LoginService) {
      this.login = new LoginModel();
      this.roles = ['Admin', 'User', 'Guest'];
      this.login.userid = "Bhushan";
      this.login.password = "oracle";
   }

   validate(){
     this.service.validate(this.login);
     this.submitted = true;
     console.log(this.login.userid + " = " + this.login.password)
   }
}
