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
        this.router.get('/:CAMPO_9', cac_ArtritisControllers.cargarPaciente);
        this.router.put('/:CAMPO_9', cac_ArtritisControllers.actualizarDatos);
        this.router.post('/afiliado_Artritis', cac_ArtritisControllers.buscarAfiliado);
        this.router.post('/CAC_Artritis',cac_ArtritisControllers.buscarCAC); 


    }
}

const cac_ArtritisRoutes = new CAC_ArtritisRoutes()
export default cac_ArtritisRoutes.router
