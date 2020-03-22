import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfogeneralPage } from './infogeneral.page';

const routes: Routes = [
  {
    path: '',
    component: InfogeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfogeneralPageRoutingModule {}
