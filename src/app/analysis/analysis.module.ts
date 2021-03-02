import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisHomeComponent } from './analysis-home/analysis-home.component';


@NgModule({
  declarations: [AnalysisHomeComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule
  ]
})
export class AnalysisModule { }
