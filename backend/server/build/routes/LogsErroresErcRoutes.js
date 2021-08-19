"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LogsErroresErcControllers_1 = require("../controller/LogsErroresErcControllers");
class LogsErroresErcRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/erroresFrm/:CAMPO_6', LogsErroresErcControllers_1.logsErroresErcControllers.LogsErroresFrm);
    }
}
const logsErroresErcRoutes = new LogsErroresErcRoutes();
exports.default = logsErroresErcRoutes.router;
