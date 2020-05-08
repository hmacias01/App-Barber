import { Component, OnInit } from '@angular/core';
import {usuario } from "../models/usuario";
import { UsuarioService } from "../service/usuario.service";
import {  AlertController, Platform} from "@ionic/angular";
import { Router} from "@angular/router";
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.page.html',
  styleUrls: ['./registrer.page.scss'],
})
export class RegistrerPage implements OnInit {
    Usuarios : any=[];  
    registerForm: FormGroup;
    Validation_messages={
      email:[
        {type:"required",message:"El correo es requerido"},
        {type:"pattern",message:"No es un correo valido"}
      ],
      password:[
        {type:"required",message:"La contraseña es requerido"},
        {type:"minlength",message:"Debe contener al menos 7 caracteres"}
      ],
      Usuario: [
       {type:"required",message:"El Usuario es requerido"},
        {type:"minlength",message:"Debe contener al menos 4 caracteres"}
      ],
      Nombre: [
        {type:"required",message:"Debe llenar este campo"},
         {type:"minlength",message:"Debe contener al menos 7 caracteres"}
       ],
       Apellido: [
        {type:"required",message:"Debe llenar este campo"},
         {type:"minlength",message:"Debe contener al menos 7 caracteres"}
       ],
       Tipo: [
        {type:"required",message:"Debe llenar este campo"}
       ]
    }


  constructor(
    private usuarioservice: UsuarioService,
    public alertController : AlertController, 
    private router : Router,
    private formbuilder :FormBuilder
  ) { 
    this.Usuarios = new usuario(0,"","","","",0);
   
    this.registerForm=this.formbuilder.group({
      email : new FormControl( "",Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password : new FormControl("",Validators.compose([Validators.required,Validators.minLength(7) 
       ])
      ),
       Nombre : new FormControl("", Validators.compose([Validators.required,Validators.minLength(7)
      ])
      ),
      Usuario : new FormControl("", Validators.compose([Validators.required,Validators.minLength(4)
      ])
      ),
      Apellido : new FormControl("", Validators.compose([Validators.required,Validators.minLength(4)
      ])
      ),
      Tipo : new FormControl("", Validators.compose([Validators.required
      ]),
      )
    });
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



}
