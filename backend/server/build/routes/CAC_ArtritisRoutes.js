"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CAC_ArtritisControllers_1 = require("../controller/CAC_ArtritisControllers");
class CAC_ArtritisRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/almacenar', CAC_ArtritisControllers_1.cac_ArtritisControllers.guardarDatos);
        this.router.post('/consultar', CAC_ArtritisControllers_1.cac_ArtritisControllers.consultarDatos);
        this.router.get('/:CAMPO_9', CAC_ArtritisControllers_1.cac_ArtritisControllers.cargarPaciente);
        this.router.put('/:CAMPO_9', CAC_ArtritisControllers_1.cac_ArtritisControllers.actualizarDatos);
        this.router.post('/afiliado_Artritis', CAC_ArtritisControllers_1.cac_ArtritisControllers.buscarAfiliado);
        this.router.post('/CAC_Artritis', CAC_ArtritisControllers_1.cac_ArtritisControllers.buscarCAC);
    }
}
const cac_ArtritisRoutes = new CAC_ArtritisRoutes();
exports.default = cac_ArtritisRoutes.router;
