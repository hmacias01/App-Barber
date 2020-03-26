import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { citas } from '../models/citas';

@Injectable({
  providedIn: 'root'
})
export class ReservarcitaService {
  apiURL ="http://40.83.177.90:443/servicios/";
  apiURL2 ="http://40.83.177.90:443/barberos/";
  apiURL3 ="http://40.83.177.90:443/citas/";

  constructor(private http:HttpClient) {

   }

  ObtenerServicios(id){
    return this.http.get(this.apiURL+"get/"+id);
  }

  ObtenerBarberos(id){
    return this.http.get(this.apiURL2+"get/"+id);
  }

  GuardarCita(cita:citas){
    return this.http.post<citas>(this.apiURL3+"addd/",cita);
  }

  Obtenercitas(id){
    return this.http.get(this.apiURL3+"get/"+id);
  }




}
