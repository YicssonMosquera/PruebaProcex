"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CAC_cancerControllers_1 = require("../controller/CAC_cancerControllers");
class CAC_cancerRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', CAC_cancerControllers_1.cac_cancerControllers.guardarDatos);
        this.router.post('/cargarregistrocancer', CAC_cancerControllers_1.cac_cancerControllers.CargarRegistroCancer);
        this.router.get('/numeroRegistro/cancer', CAC_cancerControllers_1.cac_cancerControllers.getNumeroRegistro);
        this.router.put('/update/:Campo_6', CAC_cancerControllers_1.cac_cancerControllers.Actualizarcancer);
        this.router.get('/:Campo_6', CAC_cancerControllers_1.cac_cancerControllers.CargarIdentificacion);
    }
}
const cac_cancerRouter = new CAC_cancerRouter();
exports.default = cac_cancerRouter.router;
