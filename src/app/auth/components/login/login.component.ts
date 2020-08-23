import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgModel} from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  emailInput: string;
  passwordInput: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessageE() {
    if (this.email.hasError('required')) {
      return 'Campo vacío';
    }

    return this.email.hasError('email') ? 'El email no es valido' : '';
  }

  getErrorMessageP() {
    if (this.password.hasError('required')) {
      return 'Campo vacío';
    }
  }

  login(){
    if(this.email.valid && this.password.valid){
      this.authService.loginUser(this.emailInput, this.passwordInput)
      .then(() => {
        this.router.navigate(['/admin']);
      }).catch(() => {
        alert('Usuario o contraseña incorrecta')
      });
    }
  }

}
