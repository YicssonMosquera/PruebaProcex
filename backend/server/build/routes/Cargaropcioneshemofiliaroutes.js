"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CargaropcioneshemofiliaControllers_1 = require("../controller/CargaropcioneshemofiliaControllers");
class CargaropcioneshemofiliaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarTipodocumento5);
        this.router.get('/sexo', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarSexo8);
        this.router.get('/regimen', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.RegimenAfiliacion10);
        this.router.get('/petnica', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarcodigoPertenenciaetnica12);
        this.router.get('/gpoblacion', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.Cargargrupopoblacional13);
        this.router.get('/gestacionfechacorte', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarEstadogestionfechacorte17);
        this.router.get('/planificacionconsegeria', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarUsarioProgramaconsegeria18);
        this.router.get('/motivopruebadiagnostico', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.Cargarmotivopruebadiagnostico20);
        this.router.get('/tipofrecuenciadiagnostico', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CarTipofrecuenciaDiagnostico23);
        this.router.get('/clasificacionseveridad', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarClasificacionSeveridadNF24);
        this.router.get('/afaasociadohemofilia', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarAFAsociadohemofilia26);
        this.router.get('/factorrecibido', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarFactorrecibido27);
        this.router.get('/esquemaantecedentes', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarEsquema28);
        this.router.get('/factorrecibidota', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarFacorRecibidoTA30);
        this.router.get('/esquemata', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarEsquemaTA31);
        this.router.get('/frecuenciasemana', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarFrecuenciaSemana322);
        this.router.get('/modalidadtratamiento', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarModalidadapltratamiento33);
        this.router.get('/viaadministracion', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarviaAdministración34);
        this.router.get('/profecionalliderspaciente', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarProfesionallieratenciondelpaciente57);
        this.router.get('/hermatosis', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.Cargarhermatosis40);
        this.router.get('/presenciaifechacorte', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarPresenciainhibidorfechacorte48);
        this.router.get('/pacienteiti', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarPacienteITI482);
        this.router.get('/recibioiti', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarRecibioITI483);
        this.router.get('/artropicronica', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarArtropiahermofilicacronica49);
        this.router.get('/vhc', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarInfectadoporVHC50);
        this.router.get('/vhb', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarInfectadoporVHB51);
        this.router.get('/vih', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarInfectadoporVIH52);
        this.router.get('/Pseudotumores', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarPseudotumores53);
        this.router.get('/fracturas', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarFracturas54);
        this.router.get('/anafilaxis', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarAnafilaxis55);
        this.router.get('/novedad', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarNovedad64);
        this.router.get('/causanuerte', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.Cargarcausademuerte641);
        this.router.get('/ciudad', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarMunicipioresidencia14);
        this.router.get('/codigovalidoips', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.Codigovalidohabilitacionips22);
        this.router.get('/cum', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CodigoCUM35363738);
        this.router.get('/ocupacion', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarOcupacion9);
        this.router.post('/', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.Guardarhemofilia);
        this.router.post('/cargarhemofilia', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarRegistrohermofilia);
        this.router.get('/cargarregistrohemofilia', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarRegistrohermofilia2);
        this.router.get('/:Campo_6', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.CargarRegistrohermofilia3);
        this.router.put('/update/:Campo_6', CargaropcioneshemofiliaControllers_1.cargarOpcioneshemofiliaController.Actualizarhemofilia);
    }
}
const cargaropcioneshemofiliaRoutes = new CargaropcioneshemofiliaRoutes();
exports.default = cargaropcioneshemofiliaRoutes.router;
