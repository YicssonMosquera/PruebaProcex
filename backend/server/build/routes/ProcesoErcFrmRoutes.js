"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProcesoErcControllers_1 = require("../controller/ProcesoErcControllers");
class ProcesoErcFrmRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/validar', ProcesoErcControllers_1.procesoErcControllers.guardarErcFrm);
        this.router.put('/validar/:CAMPO_6', ProcesoErcControllers_1.procesoErcControllers.guardarErcUpdate);
    }
}
const procesoErcFrmRoutes = new ProcesoErcFrmRoutes();
exports.default = procesoErcFrmRoutes.router;
