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
  id=null ;

  constructor( private loginservice: UsuarioService, private router : Router) { 
    this.Usuario= new usuario(0,"","","","",0);
  }

  ngOnInit() {
  // this.getid();
  }

   getid(){
     this.loginservice.Obtenerid(this.Usuario.Usuario).subscribe(data=>{
       this.id=data
   //    console.log(this.id);
     })
   }


   Logueo(){
     this.loginservice.Obtenerusuario(this.Usuario.Usuario,this.Usuario.Password).subscribe(data=>{
       if(data=="false"){
       console.log("credenciales incorrectas");
       }
       this.router.navigate(['home']);
    })
   }

}
