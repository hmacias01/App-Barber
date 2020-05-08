import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrerPageRoutingModule } from './registrer-routing.module';

import { RegistrerPage } from './registrer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistrerPageRoutingModule
  ],
  declarations: [RegistrerPage]
})
export class RegistrerPageModule {}
