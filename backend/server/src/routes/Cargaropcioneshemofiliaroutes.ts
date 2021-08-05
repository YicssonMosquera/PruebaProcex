import {Router} from 'express'
import {cargarOpcioneshemofiliaController} from '../controller/CargaropcioneshemofiliaControllers'


class CargaropcioneshemofiliaRoutes{
    public   router:Router = Router()

    constructor(){
      this.config();
    }

    config():void{
       this.router.get('/',cargarOpcioneshemofiliaController.CargarTipodocumento5)
       this.router.get('/sexo',cargarOpcioneshemofiliaController.CargarSexo8)
       this.router.get('/regimen',cargarOpcioneshemofiliaController.RegimenAfiliacion10)
       this.router.get('/petnica',cargarOpcioneshemofiliaController.CargarcodigoPertenenciaetnica12)
       this.router.get('/gpoblacion',cargarOpcioneshemofiliaController.Cargargrupopoblacional13)
       this.router.get('/gestacionfechacorte',cargarOpcioneshemofiliaController.CargarEstadogestionfechacorte17)
       this.router.get('/planificacionconsegeria',cargarOpcioneshemofiliaController.CargarUsarioProgramaconsegeria18)
       this.router.get('/motivopruebadiagnostico',cargarOpcioneshemofiliaController.Cargarmotivopruebadiagnostico20)
       this.router.get('/tipofrecuenciadiagnostico',cargarOpcioneshemofiliaController.CarTipofrecuenciaDiagnostico23)
       this.router.get('/clasificacionseveridad',cargarOpcioneshemofiliaController.CargarClasificacionSeveridadNF24)
       this.router.get('/afaasociadohemofilia',cargarOpcioneshemofiliaController.CargarAFAsociadohemofilia26)
       this.router.get('/factorrecibido',cargarOpcioneshemofiliaController.CargarFactorrecibido27)
       this.router.get('/esquemaantecedentes',cargarOpcioneshemofiliaController.CargarEsquema28)
       this.router.get('/factorrecibidota',cargarOpcioneshemofiliaController.CargarFacorRecibidoTA30)
       this.router.get('/esquemata',cargarOpcioneshemofiliaController.CargarEsquemaTA31)
       this.router.get('/frecuenciasemana',cargarOpcioneshemofiliaController.CargarFrecuenciaSemana322)
       this.router.get('/modalidadtratamiento',cargarOpcioneshemofiliaController.CargarModalidadapltratamiento33)
       this.router.get('/viaadministracion',cargarOpcioneshemofiliaController.CargarviaAdministración34)
       this.router.get('/profecionalliderspaciente',cargarOpcioneshemofiliaController.CargarProfesionallieratenciondelpaciente57)
       this.router.get('/hermatosis',cargarOpcioneshemofiliaController.Cargarhermatosis40)
       this.router.get('/presenciaifechacorte',cargarOpcioneshemofiliaController.CargarPresenciainhibidorfechacorte48)
       this.router.get('/pacienteiti',cargarOpcioneshemofiliaController.CargarPacienteITI482)
       this.router.get('/recibioiti',cargarOpcioneshemofiliaController.CargarRecibioITI483)
       this.router.get('/artropicronica',cargarOpcioneshemofiliaController.CargarArtropiahermofilicacronica49)
       this.router.get('/vhc',cargarOpcioneshemofiliaController.CargarInfectadoporVHC50)
       this.router.get('/vhb',cargarOpcioneshemofiliaController.CargarInfectadoporVHB51)
       this.router.get('/vih',cargarOpcioneshemofiliaController.CargarInfectadoporVIH52)
       this.router.get('/Pseudotumores',cargarOpcioneshemofiliaController.CargarPseudotumores53)
       this.router.get('/fracturas',cargarOpcioneshemofiliaController.CargarFracturas54)
       this.router.get('/anafilaxis',cargarOpcioneshemofiliaController.CargarAnafilaxis55)
       this.router.get('/novedad',cargarOpcioneshemofiliaController.CargarNovedad64)
       this.router.get('/causanuerte',cargarOpcioneshemofiliaController.Cargarcausademuerte641)
       this.router.get('/ciudad',cargarOpcioneshemofiliaController.CargarMunicipioresidencia14)
       this.router.get('/codigovalidoips',cargarOpcioneshemofiliaController.Codigovalidohabilitacionips22)
       this.router.get('/cum',cargarOpcioneshemofiliaController.CodigoCUM35363738)
       this.router.get('/ocupacion',cargarOpcioneshemofiliaController.CargarOcupacion9)
       this.router.post('/cargarhemofilia',cargarOpcioneshemofiliaController.CargarRegistrohermofilia)
       this.router.post('/cargarregistrohemofilia',cargarOpcioneshemofiliaController.CargarRegistrohermofilia2)
       this.router.get('/:Campo_6',cargarOpcioneshemofiliaController.CargarRegistrohermofilia3)
       this.router.get('/numeroRegistro/Registro',cargarOpcioneshemofiliaController.getNumeroRegistro)
    }
}

const cargaropcioneshemofiliaRoutes =  new CargaropcioneshemofiliaRoutes()
export default cargaropcioneshemofiliaRoutes.router

