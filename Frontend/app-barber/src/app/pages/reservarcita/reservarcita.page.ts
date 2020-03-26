import { Component, OnInit,ViewChild,Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ReservarcitaService } from "../../service/reservarcita.service";
import {  citas} from "../../models/citas";

@Component({
  selector: 'app-reservarcita',
  templateUrl: './reservarcita.page.html',
  styleUrls: ['./reservarcita.page.scss'],
})
export class ReservarcitaPage implements OnInit {
  servicios : any=[];
  barberos  : any=[];
  cita : citas

  id:number=null;

  constructor(private alertCtrl: AlertController, private reservarservice : ReservarcitaService, private route: ActivatedRoute ) 
  { 
    console.log(this.route.snapshot.params['id']);
    this.id=+this.route.snapshot.params['id'];
    this.cita= new citas(0,"","","",this.miid,0,this.id,0,"abierto");
  }

  ngOnInit() {
    this.MostrarServicios(this.id)
    this.MostrarBarberos(this.id)
    this.resetEvent();
    this.traerid();
  }
 
//Reservar una cita oficial
    GuardarCita(){
         this.reservarservice.GuardarCita(this.cita).subscribe(data=>{
          this.cita=data;
          console.log(this.cita);
         }
    )
    }

//Mostrando servicios segun barberia
  MostrarServicios(id){
    this.reservarservice.ObtenerServicios(id).subscribe(data =>{
      this.servicios=data;
    })
  }

//Mostrando barberos segun barberia
MostrarBarberos(id){
  this.reservarservice.ObtenerBarberos(id).subscribe(data =>{
    this.barberos=data;
  })
}

//Trayendo id del usuario logueado
miid:any=[];
    traerid(){
      this.miid=localStorage.getItem("Logueo");
      console.log(this.miid);
  }











//probando calendario
event = {
  title: '',
  startTime: '',
  endTime: ''
};


minDate = new Date().toISOString();

eventSource = [];
viewTitle;

calendar = {
  mode: 'month',
  currentDate: new Date(),
};



resetEvent() {
  this.event = {
    title: '',
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString()
  };
}

// Create the right event format and reload source
addEvent() {
  let eventCopy = {
    title: this.event.title,
    startTime:  new Date(this.event.startTime),
    endTime: new Date(this.event.endTime)
  }
  if (eventCopy) {
    let start = eventCopy.startTime;
    let end = eventCopy.endTime;
    eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
    eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
  }
  this.eventSource.push(eventCopy);
  this.resetEvent();
}

// Change current month/week/day
next() {
var swiper = document.querySelector('.swiper-container')['swiper'];
swiper.slideNext();
}
back() {
var swiper = document.querySelector('.swiper-container')['swiper'];
swiper.slidePrev();
}

// Focus today
today() {
this.calendar.currentDate = new Date();
}

// Selected date reange and hence title changed
onViewTitleChanged(title) {
this.viewTitle = title;
}

// Time slot was clicked
onTimeSelected(ev) {
let selected = new Date(ev.selectedTime);
this.event.startTime = selected.toISOString();
selected.setHours(selected.getHours() + 1);
this.event.endTime = (selected.toISOString());
}





}
