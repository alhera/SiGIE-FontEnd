import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../service/account-service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup; 

  constructor(private authenticationService:AuthenticationService, private formBuilder: FormBuilder,
     private router: Router) {   
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
  get f() { return this.loginForm.controls; }

  login() {
    this.authenticationService.login(this.f.username.value, this.f.password.value)
    .subscribe(
      resp => {
        console.log(resp.status);
        console.log(JSON.stringify(resp.headers.get('Authorization')));
        localStorage.setItem("currentUser",resp.headers.get('Authorization'));
        if (resp.status == 200) {
          this.router.navigate(['/']);
        }
      }
    );
    
  } // login

}