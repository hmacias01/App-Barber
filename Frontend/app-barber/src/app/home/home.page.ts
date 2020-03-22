import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
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
   id:number=null
  constructor(private barbeservice:BarberiasService,private router : Router,private route: ActivatedRoute) {
    //this.Bar= new barberias(0,"","","","",0,0);
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action1']);
    this.id=this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.MostrarBarberias();
  }
  
  MostrarBarberias(){
    this.barbeservice.ObtenerBarberias().subscribe(data =>{
      this.Barberia=data;
    })
  }

  //Funcion del Search
    filter(ev){
      const  val = ev.target.value;
      if(val && val.trim() !='')
      {
        this.Barberia = this.Barberia.filter((item)=> {
          return (item.Nombre.toLowerCase().indexOf(val.toLowerCase())>-1)
        })
      }if(val ==''){
        this.MostrarBarberias();
      }      
    }

}
