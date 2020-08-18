import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const productRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: ':id', component: ProductDetailComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule{}