import { Component } from '@angular/core';
import {  barberias} from "../models/barberias";
import { BarberiasService } from "../service/barberias.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 // Barberias: barberias;
  Barberia : barberias[];

  constructor(private barbeservice:BarberiasService) {
    //this.Barberias= new barberias(0,"","","","",0,0);
  }

  ionViewWillEnter(){
    this.MostrarBarberias();
  }

  MostrarBarberias(){
    this.barbeservice.ObtenerBarberias().subscribe(data =>{
      this.Barberia=data;
    })
  }

}
