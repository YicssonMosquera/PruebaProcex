import express, {Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import indexRoutes from './routes/indexRoutes'
import agregar4505Routes from './routes/agregar4505routes'
import loginRoutes from './routes/loginroutes'
import cargaropcioneshemofiliaRoutes from './routes/Cargaropcioneshemofiliaroutes'
class Server {

    public app:Application;
    
    constructor(){
      this.app = express();
      this.config();
      this.routes();
    }

    config():void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes():void {
        this.app.use(indexRoutes);
        this.app.use('/api/4505',agregar4505Routes)
        this.app.use('/api/login',loginRoutes)
        this.app.use('/api/hemofilia',cargaropcioneshemofiliaRoutes)
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server = new Server()
server.start();