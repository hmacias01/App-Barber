import { Component, OnInit } from '@angular/core';
import { BarberiasService } from "../../service/barberias.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  servicios : any=[];

  id:number=null;
constructor(private inforservice : BarberiasService, private route:ActivatedRoute) { 
  console.log(this.route.snapshot.params['id']);
  this.id=+this.route.snapshot.params['id'];
}

ngOnInit() {
  this.mostrarservicios(this.id);
}

mostrarservicios(id){
    this.inforservice.ObtenerServicios(id).subscribe(data=>{
      this.servicios=data;
    })
}
}
