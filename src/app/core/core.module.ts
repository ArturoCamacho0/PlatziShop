import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.service';
import { AuthService } from './services/auth/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ProductService,
    AuthService
  ]
})
export class CoreModule { }
