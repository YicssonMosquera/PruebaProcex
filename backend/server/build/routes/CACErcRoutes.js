"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CAC_ERCControllers_1 = require("../controller/CAC_ERCControllers");
class CACErcRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/almacenar', CAC_ERCControllers_1.cac_ERCControllers.guardarDatos);
        this.router.post('/consultar', CAC_ERCControllers_1.cac_ERCControllers.consultarDatos);
        this.router.get('/:CAMPO_6', CAC_ERCControllers_1.cac_ERCControllers.cargarPaciente);
        this.router.put('/:CAMPO_6', CAC_ERCControllers_1.cac_ERCControllers.actualizarDatos);
        this.router.post('/afiliado_ERC', CAC_ERCControllers_1.cac_ERCControllers.buscarAfiliado);
        this.router.post('/CAC_Erc', CAC_ERCControllers_1.cac_ERCControllers.buscarCAC);
    }
}
const cacErcRoutes = new CACErcRoutes();
exports.default = cacErcRoutes.router;
