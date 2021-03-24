import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IndicatorInfoPageRoutingModule } from './indicator-info-routing.module';

import { IndicatorInfoPage } from './indicator-info.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicatorInfoPageRoutingModule,
    ChartsModule,
  ],
  declarations: [IndicatorInfoPage],
})
export class IndicatorInfoPageModule {}
