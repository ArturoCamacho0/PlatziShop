import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { MaterialModule } from '../material/material.module';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
