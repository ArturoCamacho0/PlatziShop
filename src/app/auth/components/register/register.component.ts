import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgModel} from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;

  emailInput: string;
  passwordInput: string;

  constructor(private authService: AuthService, private router: Router) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }

  getErrorMessageE() {
    if (this.email.hasError('required')) {
      return 'Campo vacío';
    }

    return this.email.hasError('email') ? 'El email no es valido' : '';
  }

  getErrorMessageP() {
    if(this.password.hasError('required')) {
      return 'Campo vacío';
    }
  }

  register(){
    if(this.email.valid && this.password.valid){
      this.authService.createUser(this.emailInput, this.passwordInput).
      then(() => {
        this.router.navigate(['/auth']);
      });
    }else{
      alert('Error en el registro');
      this.router.navigate(['/']);
    }
  }

}
