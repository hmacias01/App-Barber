import {Router} from 'express'

class clientesRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',(req ,res)=> res.send('Hi'));
    }
}

const ClientesRoutes = new clientesRoutes();
export default ClientesRoutes.router; 