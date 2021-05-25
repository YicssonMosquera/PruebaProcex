"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BbProcesoHemofiliaError_1 = __importDefault(require("../dao/BbProcesoHemofiliaError"));
const BdProcesoHemofiliaDetalle_1 = __importDefault(require("../dao/BdProcesoHemofiliaDetalle"));
const DbProcesoHemofilia_1 = __importDefault(require("../dao/DbProcesoHemofilia"));
const ValidacionCamposPH_1 = __importDefault(require("./ValidacionCamposPH"));
class LogicaDBProcesohemofilia {
    static guardar(oCampos) {
        var _this = this;
        //Guardar proceso hemofilia encabezado
        var procesohemofilia = {
            USUARIO_CREACION: 'Yicsson',
            USUARIO_MODIFICACION: 'Yicsson'
        };
        DbProcesoHemofilia_1.default.guardar(procesohemofilia, function (result) {
            //Guardar Dbprocesohemofilia detalle
            _this.guardarProcesoHemofiliaDetalle(result.insertId, oCampos);
        });
    }
    static guardarProcesoHemofiliaDetalle(idCabeza, oCampos) {
        var _this = this;
        ValidacionCamposPH_1.default.validar(oCampos).then(function (arrayCampos) {
            var arrayCamposBuenos = arrayCampos[0];
            var arrayCamposMalos = arrayCampos[1];
            console.log(arrayCamposBuenos.length);
            if (arrayCamposBuenos.length > 0) {
                console.log('guardar detalle ------------------------------------------------');
                _this.guardarCamposBuenos(idCabeza, oCampos);
            }
            else {
                _this.guardarCamposMalos(idCabeza, arrayCamposMalos);
            }
            //Acualizar cabeza
            DbProcesoHemofilia_1.default.buscarPorId(idCabeza, function (result) {
                // console.log(result + ' ......................'+ idCabeza)
                // //Llenar los campos faltantes para actualizar
                // result.REGISTROS_PROCESADOS = arrayCamposBuenos.length + arrayCamposMalos.length;
                // //Actualizar cabeza
                // DBProcesohemofilia.actualizar(result, idCabeza,function(result) {
                // });
            });
        });
    }
    static guardarCamposBuenos(idCabeza, oCampos) {
        //Guardar los detalles, campos buenos
        oCampos.ID_PROCESO_HEMOFILIA = idCabeza;
        BdProcesoHemofiliaDetalle_1.default.guardar(oCampos);
    }
    static guardarCamposMalos(idCabeza, arrayCamposMalos) {
        //Guardar detalles campos malos
        for (var i = 0; i < arrayCamposMalos.length; i++) {
            var campoMalo = arrayCamposMalos[i];
            campoMalo.ID_PROCESO_HEMOFILIA = idCabeza;
            BbProcesoHemofiliaError_1.default.guardar(campoMalo);
        }
    }
}
exports.default = LogicaDBProcesohemofilia;
