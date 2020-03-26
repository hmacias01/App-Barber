import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../service/usuario.service";
import {Router} from "@angular/router";
import { usuario } from '../models/usuario';
import { FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm : FormGroup
  public Usuario: usuario;
  id:any=[];

  constructor( private loginservice: UsuarioService, private router : Router) { 
    this.Usuario= new usuario(0,"","","","",0);
  }

  ngOnInit() {
  
  }

   getid(){
     this.loginservice.Obtenerid(this.Usuario.Usuario).subscribe(data=>{
      //this.id=JSON.stringify(data);
      this.id=data;  
      this.guardarid();
      console.log(this.id);
     })
   }

   guardarid(){
    for (let i of this.id) {
      this.id=  i.idUsuario;
      } 
    localStorage.setItem("Logueo",this.id);
   }


   Logueo(){
     this.loginservice.Obtenerusuario(this.Usuario.Usuario,this.Usuario.Password).subscribe(data=>{
       if(data=="false"){
       console.log("credenciales incorrectas");
       }
       this.getid();
       localStorage.setItem("Usuario",this.Usuario.Usuario);
       this.router.navigate(['home']);
    })
   }

}
