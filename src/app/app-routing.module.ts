import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      {path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      {path: 'inquiries', loadChildren: () => import('./inquiry/inquiry.module').then(m => m.InquiryModule)},
      {path: 'analysis', loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule)},
      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'posts', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
      {path: 'orders', loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},
      {path: 'clients', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
      {path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)},
    ]
  },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
