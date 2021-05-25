import DBProcesohemofiliaerror from "../dao/BbProcesoHemofiliaError";
import BDProcesohemofiliaDetalle from "../dao/BdProcesoHemofiliaDetalle";
import DBProcesohemofilia from "../dao/DbProcesoHemofilia";
import {procesohemofilia} from "../models/procesohemofilia"
import ValidacionCamposPH from "./ValidacionCamposPH";

class LogicaDBProcesohemofilia{ 
   
    public static guardar(oCampos) {
       var _this = this;

        //Guardar proceso hemofilia encabezado
        var procesohemofilia:procesohemofilia ={
            USUARIO_CREACION : 'Yicsson',
            USUARIO_MODIFICACION : 'Yicsson'
        }

        DBProcesohemofilia.guardar(procesohemofilia, function (result) {

            //Guardar Dbprocesohemofilia detalle
            _this.guardarProcesoHemofiliaDetalle(result.insertId ,oCampos);
        });
    }

    public static guardarProcesoHemofiliaDetalle(idCabeza,oCampos) {
        var _this = this;

        ValidacionCamposPH.validar(oCampos).then(function (arrayCampos){
            var arrayCamposBuenos = arrayCampos[0];
            var arrayCamposMalos = arrayCampos[1];
            console.log(arrayCamposBuenos.length)
            if(arrayCamposBuenos.length > 0){
                console.log('guardar detalle ------------------------------------------------')
                _this.guardarCamposBuenos(idCabeza,oCampos);
            }
            else{
                _this.guardarCamposMalos(idCabeza,arrayCamposMalos);
            }


            //Acualizar cabeza
            DBProcesohemofilia.buscarPorId(idCabeza,function(result) {
             
                 var resultx = result[0];
               

                //Llenar los campos faltantes para actualizar
                resultx.REGISTROS_PROCESADOS = arrayCamposBuenos.length + arrayCamposMalos.length;
                console.log(resultx)
               
                //Actualizar cabeza
                DBProcesohemofilia.actualizar(resultx, idCabeza,function(result) {

                });
            });

           

        });
    }

    public static guardarCamposBuenos(idCabeza,oCampos){
        //Guardar los detalles, campos buenos
        oCampos.ID_PROCESO_HEMOFILIA = idCabeza;
        BDProcesohemofiliaDetalle.guardar(oCampos);
    }

    public static guardarCamposMalos(idCabeza,arrayCamposMalos){
        //Guardar detalles campos malos
        for(var i=0; i < arrayCamposMalos.length; i++){
            var campoMalo = arrayCamposMalos[i];
            campoMalo.ID_PROCESO_HEMOFILIA = idCabeza;
            DBProcesohemofiliaerror.guardar(campoMalo);
        }
    }
}


export default LogicaDBProcesohemofilia;