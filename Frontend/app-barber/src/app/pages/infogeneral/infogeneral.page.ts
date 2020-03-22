import { Component, OnInit } from '@angular/core';
import { BarberiasService } from "../../service/barberias.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infogeneral',
  templateUrl: './infogeneral.page.html',
  styleUrls: ['./infogeneral.page.scss'],
})
export class InfogeneralPage implements OnInit {
      informacion : any=[];

    id:number=null;
  constructor(private inforservice : BarberiasService, private route:ActivatedRoute) { 
    console.log(this.route.snapshot.params['id']);
    this.id=+this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.mostrarInformacion(this.id);
  }

  mostrarInformacion(id){
      this.inforservice.ObtenerBarberia(id).subscribe(data=>{
        this.informacion=data;
      })
  }


}
