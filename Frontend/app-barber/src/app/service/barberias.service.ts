import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { barberias} from "../models/barberias";

@Injectable({
  providedIn: 'root'
})
export class BarberiasService {
  apiURL ="http://localhost:3000/barberias/";
  
  constructor(private http:HttpClient) { }

  ObtenerBarberias(){
    return this.http.get<barberias[]>(this.apiURL+"get");
  }

  CrearBarberia(barberia:string){
    return this.http.post(
       this.apiURL + "add/" , barberia);
  }


}
