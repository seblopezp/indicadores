import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorInfoPage } from './indicator-info.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorInfoPageRoutingModule {}
