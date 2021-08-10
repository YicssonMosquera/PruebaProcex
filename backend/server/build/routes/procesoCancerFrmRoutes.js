"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProcesoCancerFrmConrollers_1 = require("../controller/ProcesoCancerFrmConrollers");
class ProcesoCancerFrmRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/validar', ProcesoCancerFrmConrollers_1.procesoCancerFrmConrollers.guardarCancerFrm);
        this.router.put('/validar/:Campo_6', ProcesoCancerFrmConrollers_1.procesoCancerFrmConrollers.guardarCancerUpdate);
    }
}
const procesoCancerFrmRoutes = new ProcesoCancerFrmRoutes();
exports.default = procesoCancerFrmRoutes.router;
