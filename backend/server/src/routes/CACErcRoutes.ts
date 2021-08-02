import { Router } from 'express'
import { cac_ERCControllers } from '../controller/CAC_ERCControllers'

class CACErcRoutes {
    public router: Router = Router()

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.post('/almacenar', cac_ERCControllers.guardarDatos);
        this.router.post('/consultar', cac_ERCControllers.consultarDatos);
        this.router.get('/:C8_CAMPO_9', cac_ERCControllers.cargarPaciente);
        this.router.put('/:C8_CAMPO_9', cac_ERCControllers.actualizarDatos);
    }
}

const cacErcRoutes = new CACErcRoutes()
export default cacErcRoutes.router
