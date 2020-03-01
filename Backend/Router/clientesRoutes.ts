import {Router} from 'express'
import clientesController from '../Controllers/clientesController';

class ClientesRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',clientesController.index);
    }
}

const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router; 