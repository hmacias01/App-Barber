import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservarcitaPageRoutingModule } from './reservarcita-routing.module';

import { ReservarcitaPage } from './reservarcita.page';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservarcitaPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [ReservarcitaPage]
})
export class ReservarcitaPageModule {}
