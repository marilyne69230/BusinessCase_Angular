import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup} from "@angular/forms";

import { AuthService } from '../../service/auth.service';
import { LoginService } from '../../service/login.service';
import { Itoken } from '../../interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private service: LoginService,
    private auth: AuthService
  ) {
  }
  ngOnInit() {

  }

  public form:FormGroup = new FormGroup({
    username: new FormControl("user2@example.com"),
    password: new FormControl("motdepasse2")
  })

  handleSubmit(){
    console.log(this.form.value);
    this.service.login(this.form.value).subscribe(
      (data:Itoken)=>{
        console.log(data.token);
        this.auth.saveToken(data.token)
      },
      err => console.log(err),

    )

  }

}