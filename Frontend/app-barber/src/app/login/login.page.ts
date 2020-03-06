import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../service/usuario.service";
import {Router} from "@angular/router";
import { usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public Usuario: usuario;

  constructor(private loginservice: UsuarioService, private router : Router) { 
    this.Usuario= new usuario(0,"","","","",0);
  }

  ngOnInit() {
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
