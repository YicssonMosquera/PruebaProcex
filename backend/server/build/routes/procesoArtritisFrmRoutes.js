"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProcesoArtritisFrmControllers_1 = require("../controller/ProcesoArtritisFrmControllers");
class ProcesoArtritisFrmRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/validar', ProcesoArtritisFrmControllers_1.procesoArtritisFrmControllers.guardarArtritisFrm);
        this.router.put('/validar/:CAMPO_9', ProcesoArtritisFrmControllers_1.procesoArtritisFrmControllers.guardarArtritisUpdate);
    }
}
const procesoArtritisFrmRoutes = new ProcesoArtritisFrmRoutes();
exports.default = procesoArtritisFrmRoutes.router;
