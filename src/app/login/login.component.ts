import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService){}
  ngOnInit(): void {
    
  }
  public form:FormGroup = new FormGroup({
    username: new FormControl('toto@gmail.com'),
    password: new FormControl('toto')
  })

  handleSubmit(){
    this.service.login(this.form.value).subscribe(
      data => console.log(data.token),
      err => console.log(err)
    )
  }
}
