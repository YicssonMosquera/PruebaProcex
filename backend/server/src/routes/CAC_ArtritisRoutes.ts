import { Router } from 'express'
import { cac_ArtritisControllers } from '../controller/CAC_ArtritisControllers'

class CAC_ArtritisRoutes {
    public router: Router = Router()

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.post('/almacenar', cac_ArtritisControllers.guardarDatos);
        this.router.post('/consultar', cac_ArtritisControllers.consultarDatos);
    }
}

const cac_ArtritisRoutes = new CAC_ArtritisRoutes()
export default cac_ArtritisRoutes.router
