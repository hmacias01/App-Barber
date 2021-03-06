import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  barberias} from "../../models/barberias";
import { BarberiasService } from "../../service/barberias.service";

@Component({
  selector: 'app-barberias',
  templateUrl: './barberias.page.html',
  styleUrls: ['./barberias.page.scss'],
})
export class BarberiasPage implements OnInit {
  Barberia : barberias[];
  titulo: any=[];

   id:number=null;
  constructor(private route: ActivatedRoute , private barbeservice:BarberiasService) { 
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action1']);
    this.id=this.route.snapshot.params['id'];
   // console.log(this.Buscarbarber());
    }
  ngOnInit() {
    this.Mostrartitulo(this.id);
  }

    Mostrartitulo(id){
      this.barbeservice.ObtenerBarberia(id).subscribe(data =>{
        this.titulo=data;
      })
    }

    Buscarbarber(){
      return this.Barberia.filter((barber) =>{return barber.IdBarberia == this.id})[0] || null;
    // return this.Barberia.find( (lugar) => lugar.IdBarberia == this.id) || null;
    }
}
