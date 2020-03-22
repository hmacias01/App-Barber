import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfogeneralPageRoutingModule } from './infogeneral-routing.module';

import { InfogeneralPage } from './infogeneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfogeneralPageRoutingModule
  ],
  declarations: [InfogeneralPage]
})
export class InfogeneralPageModule {}
