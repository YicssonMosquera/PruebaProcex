import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import indexRoutes from './routes/indexRoutes'
import agregar4505Routes from './routes/agregar4505routes'
import loginRoutes from './routes/loginroutes'
import cargaropcioneshemofiliaRoutes from './routes/Cargaropcioneshemofiliaroutes'
import soportesRoutes from './routes/SoportesRoutes';
import cargahemofiliaRoutes from './routes/CarguehemofiliaRoutes';
import logsErrores from './routes/LogsErroresRoutes';
import bdopcioneslistasRouter from './routes/BDOpcionesListarouter';
import cac_ArtritisRoutes from './routes/CAC_ArtritisRoutes';
import bdOpcionesListasERCroutes from './routes/BdOpcionesListasERCRoutes';
import cacErcRoutes from './routes/CACErcRoutes';
import BdopcionesListasCANCERroutes from './routes/BdopcionesListasCANCERroutes';
import cac_cancerRouter from './routes/CAC_cancerRouter';
import procesoHemofiliaFrmRoutes from './routes/ProcesoHemofiliaFrmRoutes';
import procesoCancerFrmRoutes from './routes/procesoCancerFrmRoutes';
import procesoArtritisFrmRoutes from './routes/procesoArtritisFrmRoutes';
import procesoErcFrmRoutes from './routes/ProcesoErcFrmRoutes';
import logsErroresCancerRouter from './routes/LogsErroresCancerRouter';
import logsErroresArtritisRoutes from './routes/LogsErroresArtritisRoutes';
import logsErroresErcRoutes from './routes/LogsErroresErcRoutes';
import paht from 'path'
class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/4505', agregar4505Routes);
        this.app.use('/api/login', loginRoutes);
        this.app.use('/api/hemofilia', cargaropcioneshemofiliaRoutes);
        this.app.use('/api/soportes', soportesRoutes);
        this.app.use('/api/carguehemofilia', cargahemofiliaRoutes);
        this.app.use('/api/logsErrores', logsErrores);
        this.app.use('/api/opcionesLista', bdopcioneslistasRouter);
        this.app.use('/api/artritis', cac_ArtritisRoutes);
        this.app.use('/api/opcionesListasERC', bdOpcionesListasERCroutes);
        this.app.use('/api/erc', cacErcRoutes);
        this.app.use('/api/opcionesListasCancer', BdopcionesListasCANCERroutes);
        this.app.use('/api/cancer', cac_cancerRouter);
        this.app.use('/api/hemofilivalidar', procesoHemofiliaFrmRoutes);
        this.app.use('/api/cancervalidar', procesoCancerFrmRoutes);
        this.app.use('/api/artritisvalidar', procesoArtritisFrmRoutes);
        this.app.use('/api/ercvalidar', procesoErcFrmRoutes);
        this.app.use('/api/LogsErroresCancer', logsErroresCancerRouter);
        this.app.use('/api/LogsErroresArtritis', logsErroresArtritisRoutes);
        this.app.use('/api/LogsErroresErc', logsErroresErcRoutes);
        this.app.use('/soportes', express.static(paht.resolve('soportes')));
        this.app.use('/logsExcel', express.static(paht.resolve('logsExcel')));
        this.app.use('/Carguehemofilia', express.static(paht.resolve('Carguehemofilia')));
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}



const server = new Server()
server.start();