import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';
import { AdminModule } from './admin/admin.module';

// Array de rutas
const appRoutes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'products', canActivate: [AdminGuard], loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
        { path: 'contact', canActivate: [AdminGuard], loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    ]},
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: '**', loadChildren: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
];

// Exportar el módulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
});