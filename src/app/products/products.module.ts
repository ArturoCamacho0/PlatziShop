import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { MaterialModule } from '../material/material.module';
import { ProductsContainer } from './containers/products/products.container';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsContainer,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
