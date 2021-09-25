import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthGuard } from "../auth-guard.service";
import { AuthService } from "../auth-service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
  usernames: string[] = ['abdelhady', 'pietro', 'skywalker'];
  username='';
  passwords: string[] = ['123456', 'mememe', 'lukerx']
  password='';
  wrong='';
  not='';

  constructor(private router:Router, private authService: AuthService) {}

  onSubmit(form: NgForm){
    for(var i = 0; i < this.usernames.length; i++){
      if(this.usernames[i]===this.username){
        if(this.passwords[i]===this.password){
          this.not='';
          this.wrong='';
          this.authService.Login();
          this.router.navigate(['/main']);
        }else{
          this.wrong='true';
          this.not='';
        }
      }else this.not='true';
    };
  }
}