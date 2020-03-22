import { Component, OnInit } from '@angular/core';
import { ReservarcitaService } from "../service/reservarcita.service";
import {  citas} from "../models/citas";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  moscita: any=[];
  cita : citas
  id:number=null;

  ngOnInit() {
    this.Mostrarcitas(this.cita.Id_Usuario);
  }
 
  constructor( private reservarservice : ReservarcitaService ) 
  { 
    this.cita= new citas(0,"","","",null,0,0,0,"");

  }

  //Mostrando servicios segun barberia
Mostrarcitas(id){
  this.reservarservice.Obtenercitas(this.cita.Id_Usuario).subscribe(data => {
    this.moscita=data;
    console.log(this.moscita); 
  })
}
}
