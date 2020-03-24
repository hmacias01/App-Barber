import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { barberias} from "../models/barberias";

@Injectable({
  providedIn: 'root'
})
export class BarberiasService {
  apiURL ="http://localhost:443/barberias/";
  apiURL2 ="http://localhost:443/servicios/";

  constructor(private http:HttpClient) { }

  ObtenerBarberias(){
    return this.http.get<barberias[]>(this.apiURL+"get");
  }

  CrearBarberia(barberia:string){
    return this.http.post(
       this.apiURL + "add/" , barberia);
  }

  ObtenerBarberia(id:number){
    return this.http.get(this.apiURL+"get/"+id);
  }

  ObtenerServicios(id:number){
    return this.http.get(this.apiURL2+"getservices/"+id);
  }



}
