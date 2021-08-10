"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const agregar4505routes_1 = __importDefault(require("./routes/agregar4505routes"));
const loginroutes_1 = __importDefault(require("./routes/loginroutes"));
const Cargaropcioneshemofiliaroutes_1 = __importDefault(require("./routes/Cargaropcioneshemofiliaroutes"));
const SoportesRoutes_1 = __importDefault(require("./routes/SoportesRoutes"));
const CarguehemofiliaRoutes_1 = __importDefault(require("./routes/CarguehemofiliaRoutes"));
const LogsErroresRoutes_1 = __importDefault(require("./routes/LogsErroresRoutes"));
const BDOpcionesListarouter_1 = __importDefault(require("./routes/BDOpcionesListarouter"));
const CAC_ArtritisRoutes_1 = __importDefault(require("./routes/CAC_ArtritisRoutes"));
const BdOpcionesListasERCRoutes_1 = __importDefault(require("./routes/BdOpcionesListasERCRoutes"));
const CACErcRoutes_1 = __importDefault(require("./routes/CACErcRoutes"));
const BdopcionesListasCANCERroutes_1 = __importDefault(require("./routes/BdopcionesListasCANCERroutes"));
const CAC_cancerRouter_1 = __importDefault(require("./routes/CAC_cancerRouter"));
const ProcesoHemofiliaFrmRoutes_1 = __importDefault(require("./routes/ProcesoHemofiliaFrmRoutes"));
const procesoCancerFrmRoutes_1 = __importDefault(require("./routes/procesoCancerFrmRoutes"));
const LogsErroresCancerRouter_1 = __importDefault(require("./routes/LogsErroresCancerRouter"));
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/4505', agregar4505routes_1.default);
        this.app.use('/api/login', loginroutes_1.default);
        this.app.use('/api/hemofilia', Cargaropcioneshemofiliaroutes_1.default);
        this.app.use('/api/soportes', SoportesRoutes_1.default);
        this.app.use('/api/carguehemofilia', CarguehemofiliaRoutes_1.default);
        this.app.use('/api/logsErrores', LogsErroresRoutes_1.default);
        this.app.use('/api/opcionesLista', BDOpcionesListarouter_1.default);
        this.app.use('/api/artritis', CAC_ArtritisRoutes_1.default);
        this.app.use('/api/opcionesListasERC', BdOpcionesListasERCRoutes_1.default);
        this.app.use('/api/erc', CACErcRoutes_1.default);
        this.app.use('/api/opcionesListasCancer', BdopcionesListasCANCERroutes_1.default);
        this.app.use('/api/cancer', CAC_cancerRouter_1.default);
        this.app.use('/api/hemofilivalidar', ProcesoHemofiliaFrmRoutes_1.default);
        this.app.use('/api/cancervalidar', procesoCancerFrmRoutes_1.default);
        this.app.use('/api/LogsErroresCancer', LogsErroresCancerRouter_1.default);
        this.app.use('/soportes', express_1.default.static(path_1.default.resolve('soportes')));
        this.app.use('/logsExcel', express_1.default.static(path_1.default.resolve('logsExcel')));
        this.app.use('/Carguehemofilia', express_1.default.static(path_1.default.resolve('Carguehemofilia')));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
