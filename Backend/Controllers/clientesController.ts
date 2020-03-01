import {Request,Response} from 'express';
import pool from '../database'; 

class ClientesController{
    public index (req:Request,res:Response){
     pool.query('DESCRIBE usuario');
     res.json('usuarios');
    } 
}

 const clientesController= new ClientesController();
export default clientesController;