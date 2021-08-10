"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LogsErroresCancerControllers_1 = require("../controller/LogsErroresCancerControllers");
class LogsErroresCancerRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/erroresFrm/:CAMPO_6', LogsErroresCancerControllers_1.logsErroresCancerControllers.LogsErroresFrm);
    }
}
const logsErroresCancerRouter = new LogsErroresCancerRouter();
exports.default = logsErroresCancerRouter.router;
