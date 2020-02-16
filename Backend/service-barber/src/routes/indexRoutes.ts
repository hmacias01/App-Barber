import {Router} from 'express'

class indexRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',(req,res)=> res.send('Hello'));
    }
}

const IndexRoutes = new indexRoutes();
export default IndexRoutes.router; 