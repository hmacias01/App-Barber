import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {  usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiURL ="http://localhost:443/usuario/";


  constructor(private http :HttpClient) { }

  Obtenerusuario(user:string, clave:string){
    return this.http.get(`${this.apiURL}get/${user}/${clave}`);
  }

  Crearusuario(usuario:string){
    return this.http.post(
       this.apiURL + "add/" , usuario);
  }

  Obtenerid(usuario){
    return this.http.get(this.apiURL+ "get2/"+usuario);
  }

  // Editarusuario(Usuario:usuario){
  //   return this.http.put<usuario>(
  //     this.apiURL + "/" + Usuario.,usuario
  //   );
  // }

}
