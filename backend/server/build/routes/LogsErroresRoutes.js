"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LogsErroresControllers_1 = require("../controller/LogsErroresControllers");
class LogsErroresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/herrorestipob/:NUMERO_RADICACION', LogsErroresControllers_1.logsherrorescontrollers.cargarErroresTipoB);
        this.router.get('/herrorestipoa/:NUMERO_RADICACION', LogsErroresControllers_1.logsherrorescontrollers.cargarErroresTipoA);
        this.router.get('/herroresexcel/:NUMERO_RADICACION', LogsErroresControllers_1.logsherrorescontrollers.cargarErroresExcel);
        this.router.get('/erroresFrm/:NUMERO_RADICACION', LogsErroresControllers_1.logsherrorescontrollers.LogsErroresFrm);
    }
}
const logsErrores = new LogsErroresRoutes();
exports.default = logsErrores.router;
