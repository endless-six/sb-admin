import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHomeComponent } from './order-home/order-home.component';

const routes: Routes = [
  {path: '', component: OrderHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
