import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import clientesRoutes from './routes/clientesRoutes';

class server {
    public app: Application;
    
    constructor(){
       this.app= express();
       this.config();
       this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000); //creando una variable
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('app/clientes',clientesRoutes);
    }

    start(): void{   //este inicializara mi servidor
        this.app.listen(this.app.get('port'), () =>{
            console.log('server on port', this.app.get('port'));
        })
    }
}

const Server = new server();
Server.start();