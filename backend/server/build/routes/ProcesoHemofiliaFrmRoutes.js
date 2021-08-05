"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProcesoHemofiliaFrmControllers_1 = require("../controller/ProcesoHemofiliaFrmControllers");
const CAC_HemofiliaControllers_1 = require("../controller/CAC_HemofiliaControllers");
class ProcesoHemofiliaFrmRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', ProcesoHemofiliaFrmControllers_1.procesoHemofiliaFrmControllers.guardarHemofiliaFrm);
        this.router.put('/update/:Campo_6', CAC_HemofiliaControllers_1.cac_HemofiliaControllers.Actualizarhemofilia);
        this.router.post('/guardar', CAC_HemofiliaControllers_1.cac_HemofiliaControllers.Guardarhemofilia);
        this.router.put('/validar/:Campo_6', ProcesoHemofiliaFrmControllers_1.procesoHemofiliaFrmControllers.guardarHemofiliaUpdate);
    }
}
const procesoHemofiliaFrmRoutes = new ProcesoHemofiliaFrmRoutes();
exports.default = procesoHemofiliaFrmRoutes.router;
