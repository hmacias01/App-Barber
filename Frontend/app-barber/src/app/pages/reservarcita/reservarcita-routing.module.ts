import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservarcitaPage } from './reservarcita.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarcitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarcitaPageRoutingModule {}
