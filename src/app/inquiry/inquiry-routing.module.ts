import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquiryHomeComponent } from './inquiry-home/inquiry-home.component';

const routes: Routes = [
  {path: '', component: InquiryHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiryRoutingModule { }
