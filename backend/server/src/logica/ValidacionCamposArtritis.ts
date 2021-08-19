import { validacionhemofila } from "../controller/validacioncamposhemofilia";
import { ArtritisError } from "../models/artritiserror";


class ValidacionCamposArtritis {
    filas_buenas: {};
    filas_malas: {};
    data: Map<any, any>;
    numeroErroresCampo: number;
    numMalos: number;
    numBuenos: number;
    totalCamposMalos: number;
    archivoFilas: number;


    constructor() {
        this.data = new Map();
        this.filas_buenas = {};
        this.filas_malas = {};
        this.numeroErroresCampo = 0;
        this.numMalos = 0;
        this.numBuenos = 0;
        this.totalCamposMalos = 0;
        this.archivoFilas = 0;
    }

    validar(arrayCampos, resultEstructuraCampo) {
        var _this = this;
        this.archivoFilas = arrayCampos.length;

        try {
            //insertando valores al map
            for (let i = 0; i < resultEstructuraCampo.length; i++) {
                var objeto = resultEstructuraCampo[i];
                objeto.NUM_CAMPO = objeto.NOMBRE_CAMPO.replace("CAMPO_", "");
                _this.data.set(objeto.NOMBRE_CAMPO, objeto);
            }

            //recorrer el array campos que son las filas del file txt
            for (let index = 0; index < arrayCampos.length; index++) {
                //get campo fila
                const camposFila = arrayCampos[index];
                var numFila = index + 1;

                //crear arreglos para adicionar campos buenos y malos
                var arrayCamposBuenos = [];
                var arrayCamposMalos = [];

                //recorrer los campos de la fila
                for (const key in camposFila) {
                    var nombrecampo = key;
                    var valorcampo = camposFila[key];
                    var campofila = {};
                    campofila[nombrecampo] = valorcampo;
                    var validacioncampo = _this.data.get(nombrecampo);
                    var validacion = validacionhemofila;

                    if (nombrecampo == "CAMPO_1" || nombrecampo == "CAMPO_4" || nombrecampo == "CAMPO_5" || nombrecampo == "CAMPO_6" || nombrecampo == "CAMPO_7") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else {
                                arrayCamposBuenos.push(campofila);

                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {

                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                    }

                    if (nombrecampo == "CAMPO_2" || nombrecampo == "CAMPO_3" || nombrecampo == "CAMPO_8" || nombrecampo == "CAMPO_11" || nombrecampo == "CAMPO_71_5" || nombrecampo == "CAMPO_75_1" || nombrecampo == "CAMPO_75_2" || nombrecampo == "CAMPO_75_3" || nombrecampo == "CAMPO_76" || nombrecampo == "CAMPO_81" || nombrecampo == "CAMPO_85") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }

                        }
                    }

                    if (nombrecampo == "CAMPO_9" || nombrecampo == "CAMPO_10" || nombrecampo == "CAMPO_13" || nombrecampo == "CAMPO_14" || nombrecampo == "CAMPO_15" || nombrecampo == "CAMPO_16" || nombrecampo == "CAMPO_17" || nombrecampo == "CAMPO_18" || nombrecampo == "CAMPO_19") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE))
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else {
                                arrayCamposBuenos.push(campofila);

                            }
                    } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                        if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                            var hemofilia: ArtritisError = {
                                NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                TIPO_ERROR: 'A',
                                DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                USUARIO_CREACION: '',
                                USUARIO_MODIFICACION: '',
                                VALOR_ANTERIOR: '',
                                VALOR_NUEVO: '',
                                NUMERO_REGISTRO: numFila
                            }
                            arrayCamposMalos.push(hemofilia);
                            _this.totalCamposMalos = this.totalCamposMalos + 1;
                        } else {
                            arrayCamposBuenos.push(campofila);
                        }
                    }


                    if (nombrecampo == "CAMPO_12" || nombrecampo == "CAMPO_20" || nombrecampo == "CAMPO_21") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isRango(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isRango(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                    }

                    if (nombrecampo == "CAMPO_22" || nombrecampo == "CAMPO_23" || nombrecampo == "CAMPO_26") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }

                        }
                    }

                    if (nombrecampo == "CAMPO_24" || nombrecampo == "CAMPO_25" || nombrecampo == "CAMPO_27" || nombrecampo == "CAMPO_28" || nombrecampo == "CAMPO_29" || nombrecampo == "CAMPO_30" || nombrecampo == "CAMPO_42" || nombrecampo == "CAMPO_44") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);

                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                //aqui es 
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                    }

                    if (nombrecampo == "CAMPO_31" || nombrecampo == "CAMPO_32" || nombrecampo == "CAMPO_33" || nombrecampo == "CAMPO_34" || nombrecampo == "CAMPO_35" || nombrecampo == "CAMPO_36" || nombrecampo == "CAMPO_37" || nombrecampo == "CAMPO_38" || nombrecampo == "CAMPO_39" || nombrecampo == "CAMPO_41") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }

                        }
                    }

                    if (nombrecampo == "CAMPO_40" || nombrecampo == "CAMPO_43" || nombrecampo == "CAMPO_45_1" || nombrecampo == "CAMPO_45_6" || nombrecampo == "CAMPO_47_11" || nombrecampo == "CAMPO_47_12" || nombrecampo == "CAMPO_47_13" || nombrecampo == "CAMPO_47_14" || nombrecampo == "CAMPO_65" || nombrecampo == "CAMPO_69" || nombrecampo == "CAMPO_74_11" || nombrecampo == "CAMPO_74_12" || nombrecampo == "CAMPO_74_13" || nombrecampo == "CAMPO_74_14") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else {
                                arrayCamposBuenos.push(campofila);

                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                    }

                    if (nombrecampo == "CAMPO_45_2" || nombrecampo == "CAMPO_45_3" || nombrecampo == "CAMPO_45_4" || nombrecampo == "CAMPO_45_5" || nombrecampo == "CAMPO_45_7" || nombrecampo == "CAMPO_45_8" || nombrecampo == "CAMPO_46_1" || nombrecampo == "CAMPO_46_2" || nombrecampo == "CAMPO_46_3" || nombrecampo == "CAMPO_46_4" || nombrecampo == "CAMPO_46_5" || nombrecampo == "CAMPO_46_6" || nombrecampo == "CAMPO_46_7" || nombrecampo == "CAMPO_46_8" || nombrecampo == "CAMPO_46_9" || nombrecampo == "CAMPO_46_10" || nombrecampo == "CAMPO_47_1" || nombrecampo == "CAMPO_47_2" || nombrecampo == "CAMPO_47_3" || nombrecampo == "CAMPO_47_4" || nombrecampo == "CAMPO_47_5" || nombrecampo == "CAMPO_47_6" || nombrecampo == "CAMPO_47_7" || nombrecampo == "CAMPO_47_8" || nombrecampo == "CAMPO_47_9" || nombrecampo == "CAMPO_47_10") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }

                        }
                    }

                    if (nombrecampo == "CAMPO_48" || nombrecampo == "CAMPO_51" || nombrecampo == "CAMPO_52" || nombrecampo == "CAMPO_53" || nombrecampo == "CAMPO_54" || nombrecampo == "CAMPO_55" || nombrecampo == "CAMPO_56" || nombrecampo == "CAMPO_67" || nombrecampo == "CAMPO_70") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);

                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                //aqui es 
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                    }

                    if (nombrecampo == "CAMPO_49" || nombrecampo == "CAMPO_50" || nombrecampo == "CAMPO_57" || nombrecampo == "CAMPO_58" || nombrecampo == "CAMPO_59" || nombrecampo == "CAMPO_60" || nombrecampo == "CAMPO_61" || nombrecampo == "CAMPO_62" || nombrecampo == "CAMPO_63" || nombrecampo == "CAMPO_64" || nombrecampo == "CAMPO_46_5" || nombrecampo == "CAMPO_46_6" || nombrecampo == "CAMPO_46_7" || nombrecampo == "CAMPO_46_8" || nombrecampo == "CAMPO_46_9" || nombrecampo == "CAMPO_46_10" || nombrecampo == "CAMPO_47_1" || nombrecampo == "CAMPO_47_2" || nombrecampo == "CAMPO_47_3" || nombrecampo == "CAMPO_47_4" || nombrecampo == "CAMPO_47_5" || nombrecampo == "CAMPO_47_6" || nombrecampo == "CAMPO_47_7" || nombrecampo == "CAMPO_47_8" || nombrecampo == "CAMPO_47_9" || nombrecampo == "CAMPO_47_10" || nombrecampo == "CAMPO_66" || nombrecampo == "CAMPO_68" || nombrecampo == "CAMPO_75_4" || nombrecampo == "CAMPO_75_5" || nombrecampo == "CAMPO_75_6" || nombrecampo == "CAMPO_75_7") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }

                        }
                    }

                    if (nombrecampo == "CAMPO_71_1" || nombrecampo == "CAMPO_71_2" || nombrecampo == "CAMPO_71_3" || nombrecampo == "CAMPO_71_4" || nombrecampo == "CAMPO_71_6" || nombrecampo == "CAMPO_71_7" || nombrecampo == "CAMPO_73_1" || nombrecampo == "CAMPO_73_2" || nombrecampo == "CAMPO_73_3" || nombrecampo == "CAMPO_73_4" || nombrecampo == "CAMPO_73_5" || nombrecampo == "CAMPO_73_6" || nombrecampo == "CAMPO_73_7" || nombrecampo == "CAMPO_73_8" || nombrecampo == "CAMPO_73_9" || nombrecampo == "CAMPO_73_10" || nombrecampo == "CAMPO_74_1" || nombrecampo == "CAMPO_74_2" || nombrecampo == "CAMPO_74_3" || nombrecampo == "CAMPO_74_4" || nombrecampo == "CAMPO_74_5" || nombrecampo == "CAMPO_74_6" || nombrecampo == "CAMPO_74_7" || nombrecampo == "CAMPO_74_8" || nombrecampo == "CAMPO_74_9" || nombrecampo == "CAMPO_74_10" || nombrecampo == "CAMPO_80") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }

                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            } else {
                                var hemofilia: ArtritisError = {

                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }

                        }
                    }

                    if (nombrecampo == "CAMPO_72" || nombrecampo == "CAMPO_77" || nombrecampo == "CAMPO_78" || nombrecampo == "CAMPO_82" || nombrecampo == "CAMPO_83" || nombrecampo == "CAMPO_84" || nombrecampo == "CAMPO_86" || nombrecampo == "CAMPO_87" || nombrecampo == "CAMPO_88" || nombrecampo == "CAMPO_89" || nombrecampo == "CAMPO_90" || nombrecampo == "CAMPO_91") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else {
                                arrayCamposBuenos.push(campofila);

                            }
                        } else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var hemofilia: ArtritisError = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                }
                                arrayCamposMalos.push(hemofilia);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            } else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                    }
                }


                //guardar los arreglos campos buenos y malos
              
                if (arrayCamposBuenos.length == resultEstructuraCampo.length) {
                    _this.filas_buenas['fila_' + numFila] = camposFila;
                } else {
                    _this.filas_malas['fila_' + numFila] = arrayCamposMalos;
                    // console.log('filas malas ++++++++++++++++++++++++++++++++++')
                    // console.log(_this.filas_malas)
                }
            }
        }

        catch (error) {

        }
    }
}


export default ValidacionCamposArtritis;