import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingHomeComponent } from './setting-home/setting-home.component';


@NgModule({
  declarations: [SettingHomeComponent],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
