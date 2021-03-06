import { Component, OnInit } from '@angular/core';
import {usuario } from "../models/usuario";
import { UsuarioService } from "../service/usuario.service";
import {  AlertController, Platform} from "@ionic/angular";
import { Router} from "@angular/router";

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.page.html',
  styleUrls: ['./registrer.page.scss'],
})
export class RegistrerPage implements OnInit {
    Usuarios : any=[];

  constructor(
    private usuarioservice: UsuarioService,
    public alertController : AlertController, private router : Router
  ) { 
    this.Usuarios = new usuario(0,"","","","",0);
  }

  ngOnInit() {
  }


    CrearUsuario(){
      if(this.Usuarios){
        this.usuarioservice.Crearusuario(this.Usuarios).subscribe(
          data =>{
          this.Usuarios=data;
        },
        err => console.error()
      );
      }
      this.router.navigate(['login']);
    }

    regregarlogin(){
      this.router.navigate(['login']);
    }

    // EditarUsuario(id:Number){
    //   if(this.Usuarios){
    //     this.usuarioservice.Editarusuario(this.Usuarios).subscribe(data =>
    //       this.Usuarios=data
    //       );
    //   }
    // }




}
