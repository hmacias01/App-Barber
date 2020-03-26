import { Component, OnInit } from '@angular/core';
import { ReservarcitaService } from "../service/reservarcita.service";
import {  citas} from "../models/citas";
import { of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  moscita: any=[];
 

  ngOnInit() {
   this.Mostrarcitas(this.miid);
  }
 
  constructor( private reservarservice : ReservarcitaService ) 
  {  }

  //Mostrando servicios segun barberia
 Mostrarcitas(id){
    this.traerid();
   this.reservarservice.Obtenercitas(this.miid).subscribe(data => {
     this.moscita=data;
     console.log(this.moscita); 
   })
 }
 
    miid:any=[];;
    traerid(){
      this.miid=localStorage.getItem("Logueo");
      console.log(this.miid);
  }
}
