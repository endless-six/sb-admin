import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InquiryRoutingModule } from './inquiry-routing.module';
import { InquiryHomeComponent } from './inquiry-home/inquiry-home.component';


@NgModule({
  declarations: [InquiryHomeComponent],
  imports: [
    CommonModule,
    InquiryRoutingModule
  ]
})
export class InquiryModule { }
