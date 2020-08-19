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
        { path: 'products',  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
        { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
        { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
        { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    ]},
    { path: 'admin', canActivate: [AdminGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: '**', redirectTo: '/home' }
];

// Exportar el módulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
});