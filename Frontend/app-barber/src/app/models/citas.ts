
export class citas{
    constructor(
        public IdCita:number,
        public Fecha: string,
        public Inicio: string,
        public Final: string,
        public Id_Usuario: number,
        public Id_servicio: number,
        public Id_Barberia: number,
        public Id_Barbero: number,
        public  Estatus: string,
    ){

    }
   
}