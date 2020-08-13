import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeModule } from './home/home.module';

import { AdminGuard } from './admin.guard';

// Array de rutas
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import( './home/home.module' ).then(m => HomeModule) },
    { path: 'products', component: ProductComponent },
    { path: 'contact', canActivate:  [AdminGuard], component: ContactComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

// Exportar el módulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
});