import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  emailField: FormControl;

  constructor(){
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  ngOnInit(): void {
  }

  sendEmail(){
    if(this.emailField.valid){
      this.emailField.setValue('');
      alert('Emial enviado!');
    }
  }

}
