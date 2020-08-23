import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsContainer } from './containers/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const productRoutes: Routes = [
    { path: '', component: ProductsContainer },
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