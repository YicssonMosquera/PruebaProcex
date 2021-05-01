"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargarOpcioneshemofiliaController = void 0;
const database_1 = __importDefault(require("../database"));
class CargarOpcioneshemofiliaController {
    CargarTipodocumento5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo5'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarSexo8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo8'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    RegimenAfiliacion10(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo10'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarcodigoPertenenciaetnica12(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo12'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    Cargargrupopoblacional13(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo13'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarEstadogestionfechacorte17(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo17'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarUsarioProgramaconsegeria18(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo18'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    Cargarmotivopruebadiagnostico20(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo20'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CarTipofrecuenciaDiagnostico23(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo23'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarClasificacionSeveridadNF24(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo24'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarAFAsociadohemofilia26(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo26'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarFactorrecibido27(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo27'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarEsquema28(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo28'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarFacorRecibidoTA30(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo30'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarEsquemaTA31(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo31'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarFrecuenciaSemana322(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo322'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarModalidadapltratamiento33(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo33'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarviaAdministración34(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo34'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarProfesionallieratenciondelpaciente57(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo57'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    Cargarhermatosis40(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo40'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarPresenciainhibidorfechacorte48(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo48'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarPacienteITI482(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo482'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarRecibioITI483(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo483'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarArtropiahermofilicacronica49(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo49'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarInfectadoporVHC50(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo50'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarInfectadoporVHB51(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo51'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarInfectadoporVIH52(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo52'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarPseudotumores53(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo53'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarFracturas54(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo54'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarAnafilaxis55(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo55'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarNovedad64(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo64'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    Cargarcausademuerte641(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo641'", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarMunicipioresidencia14(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Clientes = yield database_1.default.query("select BD_ciudad.CODIGO_CIUDAD, BD_ciudad.NOMBRE_CIUDAD from BD_ciudad ", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    Codigovalidohabilitacionips22(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Clientes = yield database_1.default.query("select BD_ips.CODIGO_IPS, BD_ips.NOMBRE_IPS from BD_ips", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CodigoCUM35363738(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Clientes = yield database_1.default.query("select BD_cups.CODIGO_CUP, BD_cups.DESCRIPCION from BD_cups ", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    CargarOcupacion9(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Clientes = yield database_1.default.query("select BD_ocupacion.CODIGO_Ocupacion, BD_ocupacion.DESCRIPCION from BD_ocupacion", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    Guardarhemofilia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('insert into Cuenta_hemofilia set ?', [req.body]);
                console.log(req.body);
                res.json({ message: 'Datos guardado con exito' });
            }
            catch (error) {
                res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
}
exports.cargarOpcioneshemofiliaController = new CargarOpcioneshemofiliaController();
