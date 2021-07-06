import { validacionhemofila } from '../controller/validacioncamposhemofilia'
import { Hemofiliaerror } from '../models/hemofiliaerror'

class ValidacionContenidoPH {
    data: Map<any, any>;
    fehaMayorEdad;
    fechanacimiento2016: Date;
    fechacorte: Date;
    fechaMenorEdad
    fechaMaores60
    fechaMaores9
    fechaMayores70

    filas_buenas: {};
    filas_malas: {};
    totalCamposMalos: number;

    constructor() {
        this.data = new Map();
        this.fechanacimiento2016 = new Date('2021-01-31');
        this.fechacorte = new Date();
        this.fehaMayorEdad = new Date();
        this.fechaMenorEdad = new Date();
        this.fechaMaores60 = new Date();
        this.fechaMaores9 = new Date();
        this.fechaMayores70 = new Date();
        this.filas_buenas = {};
        this.filas_malas = {};
        this.totalCamposMalos = 0;

    }

    async Validar(arrayCampos) {
        var _this = this;
        //Calculos de fecha de acuerdo con la fecha de corte de la base de datos.
        _this.fehaMayorEdad = await validacionhemofila.calcularMayorEdad();
        _this.fechaMenorEdad = await validacionhemofila.CalcularMenorEdad();
        _this.fechaMaores60 = await validacionhemofila.calcularAfiliadosde60Añ0s();
        _this.fechaMaores9 = await validacionhemofila.calcularAfiliadosde9Años();
        _this.fechaMayores70 = await validacionhemofila.calcularAfiliadosde70Años();
        _this.fechacorte = await validacionhemofila.fechacorte();
        console.log(_this.fechacorte)
        //recorrer el array campos que son las filas del file txt
        for (let index = 0; index < arrayCampos.length; index++) {

            //get campo fila
            const camposFila = arrayCampos[index];
            var numFila = index + 1;

            //crear arreglos para adicionar campos buenos y malos
            var arrayCamposBuenos = [];
            var arrayCamposMalos = [];


            //validacion fila 7
            if (camposFila.CAMPO_5 == 'CC' && validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacionhemofila.formatofecha(_this.fehaMayorEdad)) {
                console.log('entro 7');
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B896',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 10 hasta la fila 13
            if (validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                if (camposFila.CAMPO_56 == '0' || camposFila.CAMPO_56 == '5555' || camposFila.CAMPO_56 == '9996' || camposFila.CAMPO_56 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4389',
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
            //validacion fila 14 hasta la fila 17
            if (validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                if (camposFila.CAMPO_56_1 == '0' || camposFila.CAMPO_56_1 == '5555' || camposFila.CAMPO_56_1 == '9996' || camposFila.CAMPO_56_1 == '9999') {
                    console.log('Entra validcion campo 56_1');
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4390',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 18 y 19
            if (validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacionhemofila.formatofecha(camposFila.CAMPO_66) && validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacionhemofila.formatofecha('1919-01-31')) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B897',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 21  
            if (camposFila.CAMPO_8 == 'M') {
                if (camposFila.CAMPO_23 != 2) {
                    console.log('Entra campo 23');
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4557',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 205 y 206
            if (validacionhemofila.formatofecha(camposFila.CAMPO_16) <= validacionhemofila.formatofecha(camposFila.CAMPO_66) && validacionhemofila.formatofecha(camposFila.CAMPO_16) >= validacionhemofila.formatofecha(camposFila.CAMPO_7)) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B899 ',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 208
            if (camposFila.CAMPO_17 == '3' && camposFila.CAMPO_8 == 'M') {
                console.log('entra campo 8 con respecto al 17');
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1566',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 209 y 210
            if (camposFila.CAMPO_17 == '1') {
                if (validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacionhemofila.formatofecha(_this.fechaMaores60) && validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacionhemofila.formatofecha(_this.fechaMaores9)) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1844',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 211
            if (camposFila.CAMPO_17 == '55' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2380',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 212
            if (camposFila.CAMPO_17 <= '2' && camposFila.CAMPO_8 == 'F') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B900',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 214 y 215
            if (camposFila.CAMPO_18 == '3') {
                if (validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacionhemofila.formatofecha(_this.fehaMayorEdad) || validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacionhemofila.formatofecha(_this.fechaMayores70)) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1845',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 216 
            if (camposFila.CAMPO_18 == '55' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2381',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 218 y 219
            if (camposFila.CAMPO_19 == '5555') {
                if (camposFila.CAMPO_64 == '11' && validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1846-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2382',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            ////validacion fila 220
            if (camposFila.CAMPO_19 == '9998' && validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1811-01-01')) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2383',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }
            //validacion fila 222
            if (camposFila.CAMPO_20 == '55' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2384',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 223 y 224
            if (camposFila.CAMPO_20 <= '4' || camposFila.CAMPO_20 == '55') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3978',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 226
            if (validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1811-01-01') && camposFila.CAMPO_64 != '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1558',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 227
            if (validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1800-01-01') && camposFila.CAMPO_64 != '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2386',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 228
            if (validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2387',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 229 
            if (validacionhemofila.formatofecha(camposFila.CAMPO_21) >= validacionhemofila.formatofecha(camposFila.CAMPO_7)) {
                if (camposFila.CAMPO_19 < '100') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2388',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 230 hasta 234
            if (validacionhemofila.formatofecha(camposFila.CAMPO_21) <= validacionhemofila.formatofecha(camposFila.CAMPO_66) && validacionhemofila.formatofecha(camposFila.CAMPO_21) >= validacionhemofila.formatofecha(camposFila.CAMPO_7) || validacionhemofila.formatofecha(camposFila.CAMPO_21) <= validacionhemofila.formatofecha('1800-01-01') || validacionhemofila.formatofecha(camposFila.CAMPO_21) <= validacionhemofila.formatofecha('1811-01-01') || validacionhemofila.formatofecha(camposFila.CAMPO_21) <= validacionhemofila.formatofecha('1846-01-01')) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B901 ',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            // validacion fila 236 
            if (camposFila.CAMPO_22 == '99' && camposFila.CAMPO_64 != '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2389',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }
            // validacion fila 238
            if (camposFila.CAMPO_23 == '1' && camposFila.CAMPO_24 <= '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1158',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }
            //validacion fila  239 y 240 
            if (camposFila.CAMPO_23 == '3') {
                if (camposFila.CAMPO_24 >= '3' && camposFila.CAMPO_24 <= '6') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2392',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 241
            if (camposFila.CAMPO_23 == '2' && camposFila.CAMPO_26 != '1') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2553',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }
            //validacion fila 242 hasta 258
            if (camposFila.CAMPO_23 == '2') {
                if (camposFila.CAMPO_8 == 'F' && camposFila.CAMPO_40 == '0' && camposFila.CAMPO_40_1 == '0' && camposFila.CAMPO_40_2 == '0' && camposFila.CAMPO_42 == '0' && camposFila.CAMPO_43 == '0' && camposFila.CAMPO_44 == '0' && camposFila.CAMPO_45 == 0 && camposFila.CAMPO_46 == '0' && camposFila.CAMPO_47_1 == 0 && camposFila.CAMPO_47_2 == 0 && camposFila.CAMPO_47_3 == 0 && camposFila.CAMPO_49 == '0' && camposFila.CAMPO_49_1 == '0' || camposFila.CAMPO_24 == '7' || camposFila.CAMPO_49 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2558',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 259
            if (camposFila.CAMPO_23 > '12') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3987',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 260
            if (camposFila.CAMPO_23 >= '4' && camposFila.CAMPO_24 == '9999') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3988',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 261 y 262
            if (camposFila.CAMPO_23 >= 2) {
                if (camposFila.CAMPO_25 == '9999' || camposFila.CAMPO_25 == '55555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3989',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }
            //validacion fila 263 hasta 265
            if (camposFila.CAMPO_23 > '3') {
                if (camposFila.CAMPO_40 == '9999' && camposFila.CAMPO_40_1 == '9999' && camposFila.CAMPO_40_2 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4376',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 266
            if (camposFila.CAMPO_23 > '3' && camposFila.CAMPO_49 == '9999') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4377',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 268 hasta 271
            if (camposFila.CAMPO_24 == '1') {
                if (camposFila.CAMPO_25 >= '1' && camposFila.CAMPO_25 < '5' || camposFila.CAMPO_25 == '5555' || camposFila.CAMPO_25 == '3333') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1160',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }
            //validacion fila 272 hasta 274
            if (camposFila.CAMPO_24 == '2') {
                if (camposFila.CAMPO_25 < '1' || camposFila.CAMPO_25 == '5555' || camposFila.CAMPO_25 == '3333') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1161',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 275 hasta 277
            if (camposFila.CAMPO_24 == '0') {
                if (camposFila.CAMPO_25 >= '5' || camposFila.CAMPO_25 == '5555' || camposFila.CAMPO_25 == '3333') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1563',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 278 y 279
            if (camposFila.CAMPO_24 == '9999') {
                if (camposFila.CAMPO_31 == '9999' && camposFila.CAMPO_25 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1587',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 280
            if (camposFila.CAMPO_24 == '7' && camposFila.CAMPO_23 == '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2554',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 282
            if (camposFila.CAMPO_25 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2393',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 283 hasta 286
            if (camposFila.CAMPO_25 <= '40' || camposFila.CAMPO_25 == '9999' || camposFila.CAMPO_25 == '5555' || camposFila.CAMPO_25 == '3333') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3990',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 287
            if (camposFila.CAMPO_25 <= '40' && camposFila.CAMPO_23 <= '1') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3991',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 288
            if (camposFila.CAMPO_25 == '9999' && camposFila.CAMPO_23 >= '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B933',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }
            //validacion fila 290
            if (camposFila.CAMPO_26 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2394',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 291 y 292
            if (camposFila.CAMPO_26 <= '2' || camposFila.CAMPO_26 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2395',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 294
            if (camposFila.CAMPO_27 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2396',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion campo 295 hasta 297
            if (camposFila.CAMPO_27 <= '10' || camposFila.CAMPO_27 == '9999' || camposFila.CAMPO_27 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3992',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 298 hasta 300
            if (camposFila.CAMPO_27 == '1') {
                if (camposFila.CAMPO_23 == '1' || camposFila.CAMPO_23 == '2' || camposFila.CAMPO_23 >= '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3993',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 301
            if (camposFila.CAMPO_27 == '10' && camposFila.CAMPO_23 <= '1') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3994',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 302
            if (camposFila.CAMPO_27 == '6' && camposFila.CAMPO_23 == '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3995',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }
            //validacion fila 303 y 304
            if (camposFila.CAMPO_27 == '9999') {
                if (camposFila.CAMPO_23 > 3 && camposFila.CAMPO_28 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B935',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }
            //validacion fila 306
            if (camposFila.CAMPO_28 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2397',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 307 hasta 311
            if (camposFila.CAMPO_28 <= '1' || camposFila.CAMPO_28 == '5' || camposFila.CAMPO_28 == '6' || camposFila.CAMPO_28 == '9999' || camposFila.CAMPO_28 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3996',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 312 
            if (camposFila.CAMPO_28 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B936 ',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 314
            if (validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacionhemofila.formatofecha('1845-01-01') && camposFila.CAMPO_23 > 3) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1559',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 315 y 316 
            if (validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacionhemofila.formatofecha('1800-01-01')) {
                if (camposFila.CAMPO_64 != '2' && camposFila.CAMPO_23 <= '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1565',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 317 
            if (validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2398',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }
            //validacion fila 318
            if (validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacionhemofila.formatofecha('1811-01-01') && camposFila.CAMPO_23 <= '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3997',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 319 hasta 324
            if (validacionhemofila.formatofecha(camposFila.CAMPO_29) <= validacionhemofila.formatofecha(camposFila.CAMPO_64) && validacionhemofila.formatofecha(camposFila.CAMPO_29) >= validacionhemofila.formatofecha(camposFila.CAMPO_21) || validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacionhemofila.formatofecha('1800-01-01') || validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacionhemofila.formatofecha('1845-01-01') || validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacionhemofila.formatofecha('1811-01-01') || validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacionhemofila.formatofecha('1846-01-01')) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B902',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 326 hasta 336
            if (camposFila.CAMPO_30 == '7') {
                if (camposFila.CAMPO_31 == '6' && camposFila.CAMPO_32_1 == '9998' && camposFila.CAMPO_32_2 == '0' && camposFila.CAMPO_32_3 == '0' && camposFila.CAMPO_32_4 == '0' && camposFila.CAMPO_33 == '4' && camposFila.CAMPO_34 == '2' && camposFila.CAMPO_35 == '0' && camposFila.CAMPO_36 == '0' && camposFila.CAMPO_37 == '0' && camposFila.CAMPO_38 == '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1848',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 337 hasta 339
            if (camposFila.CAMPO_30 <= '1') {
                if (camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_60 == '0' || camposFila.CAMPO_60 == '99') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2453',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 340 hasta 342
            if (camposFila.CAMPO_30 == '8') {
                if (camposFila.CAMPO_61 > '1500000' && camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_61 == '99') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2459',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 343 hasta 345
            if (camposFila.CAMPO_30 == '11') {
                if (camposFila.CAMPO_61 > '1000000' && camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_61 == '99') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2460',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 346 y 347
            if (camposFila.CAMPO_30 == '2') {
                if (camposFila.CAMPO_61 > '1500000' || camposFila.CAMPO_61 == '99') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2461',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 348 y 349
            if (camposFila.CAMPO_30 == '3') {
                if (camposFila.CAMPO_61 > '1000000' || camposFila.CAMPO_61 == '99') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2462',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 350 hasta 352
            if (camposFila.CAMPO_30 == '9') {
                if (camposFila.CAMPO_61 > '1000000' && camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_61 == '99') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2555',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 353 hasta 355
            if (camposFila.CAMPO_30 == '10') {
                if (camposFila.CAMPO_61 > '1500000' && camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_61 == '99') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2556',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 356 hasta 362
            if (camposFila.CAMPO_30 < '13' || camposFila.CAMPO_30 == '15' || camposFila.CAMPO_30 == '16' || camposFila.CAMPO_30 == '17' || camposFila.CAMPO_30 == '18' || camposFila.CAMPO_30 == '9996' || camposFila.CAMPO_30 == '9999') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B3998',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 363 hasta 365
            if (camposFila.CAMPO_30 == '0') {
                if (camposFila.CAMPO_23 == '0' || camposFila.CAMPO_23 == '3' || camposFila.CAMPO_23 == '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3999',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 366 y 367 
            if (camposFila.CAMPO_30 == '1') {
                if (camposFila.CAMPO_23 == '1' || camposFila.CAMPO_23 == '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4000',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 368 hasta 370
            if (camposFila.CAMPO_30 == '2') {
                if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 <= '3' || camposFila.CAMPO_48 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4001',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 371 y 372
            if (camposFila.CAMPO_30 == '3') {
                if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 != '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4002',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 373
            if (camposFila.CAMPO_30 == '7' && camposFila.CAMPO_23 <= '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4003',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion campo 374 y 375
            if (camposFila.CAMPO_30 == '8') {
                if (camposFila.CAMPO_23 == '0' && camposFila.CAMPO_48 != '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4004',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 376 y 377
            if (camposFila.CAMPO_30 == '9') {
                if (camposFila.CAMPO_23 == '0' && camposFila.CAMPO_48 != '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4005',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 378 y 379
            if (camposFila.CAMPO_30 == '10') {
                if (camposFila.CAMPO_23 == '1' && camposFila.CAMPO_48 != '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4006',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 380 y 381 
            if (camposFila.CAMPO_30 == '11') {
                if (camposFila.CAMPO_23 == '1' && camposFila.CAMPO_48 != '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4007',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 382
            if (camposFila.CAMPO_30 == '12' && camposFila.CAMPO_23 == '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4008',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            // validacion fila 383 hasta 385
            if (camposFila.CAMPO_30 == '15') {
                if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 <= '3' || camposFila.CAMPO_48 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4009',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 386 y 387
            if (camposFila.CAMPO_30 == '16') {
                if (camposFila.CAMPO_23 == '0' && camposFila.CAMPO_48 <= '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4010',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 388 y 389
            if (camposFila.CAMPO_30 == '17') {
                if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 <= '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4011',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 390 y 391
            if (camposFila.CAMPO_30 == '18') {
                if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 <= '2') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4012',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 392 y 393
            if (camposFila.CAMPO_30 == '9996') {
                if (camposFila.CAMPO_23 <= '3' && camposFila.CAMPO_64 == '9') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4013',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 394 y 395
            if (camposFila.CAMPO_30 == '9999') {
                if (camposFila.CAMPO_23 > '3' && camposFila.CAMPO_64 == '9') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4014',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 396 hasta 398
            if (camposFila.CAMPO_30 == '12') {
                if (camposFila.CAMPO_60 > '2000000' || camposFila.CAMPO_60 == '99' || camposFila.CAMPO_60 == '933500') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4016',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 399 y 400
            if (camposFila.CAMPO_30 == '15') {
                if (camposFila.CAMPO_62 > '4000000' && camposFila.CAMPO_34 == '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4017',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 401
            if (camposFila.CAMPO_30 == '16' && camposFila.CAMPO_62 > '4000000') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4018',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            // validacion fila 402
            if (camposFila.CAMPO_30 == '17' && camposFila.CAMPO_62 > '4000000') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4019',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 403
            if (camposFila.CAMPO_30 == '18' && camposFila.CAMPO_62 > '4000000') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4020',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 404 y 405 
            if (camposFila.CAMPO_30 == '9996') {
                if (camposFila.CAMPO_60 == '0' && camposFila.CAMPO_61 == '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4021',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 406 y 407
            if (camposFila.CAMPO_30 == '6') {
                if (camposFila.CAMPO_32 == '0' && camposFila.CAMPO_31 == '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4115',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 409 hasta 413
            if (camposFila.CAMPO_31 == '0') {
                if (camposFila.CAMPO_30 != '7' && camposFila.CAMPO_30 != '9999' && camposFila.CAMPO_32_1 == '9998' && camposFila.CAMPO_32_2 == '0' && camposFila.CAMPO_32_4 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1168',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 414 hasta 420
            if (camposFila.CAMPO_31 == '1') {
                if (camposFila.CAMPO_32_1 < '90' && camposFila.CAMPO_32_2 >= '1' && camposFila.CAMPO_32_2 <= '6' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997' || camposFila.CAMPO_32_3 == '999955' || camposFila.CAMPO_32_4 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1170',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 421 hasta 424 
            if (camposFila.CAMPO_31 == '3') {
                if (camposFila.CAMPO_32_2 == '9997' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997' && camposFila.CAMPO_48_2 == '1') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1560',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 425 hasta 431 
            if (camposFila.CAMPO_31 == '2') {
                if (camposFila.CAMPO_32_1 < '90' && camposFila.CAMPO_32_2 >= '1' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997' || camposFila.CAMPO_32_3 == '999955' || camposFila.CAMPO_32_4 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1567',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 432 hasta 438
            if (camposFila.CAMPO_31 == '4') {
                if (camposFila.CAMPO_32_1 >= '1' && camposFila.CAMPO_32_2 <= '6' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997' && camposFila.CAMPO_48_2 == '1' || camposFila.CAMPO_32_3 == '999955' || camposFila.CAMPO_32_4 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1568',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            // validacion fila 439 a 443
            if (camposFila.CAMPO_31 == '5') {
                if (camposFila.CAMPO_32_1 == '9998' && camposFila.CAMPO_32_2 == '0' && camposFila.CAMPO_32_3 > '0' && camposFila.CAMPO_32_4 > '0' && camposFila.CAMPO_48_2 == '1') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1570',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 444 hasta 447
            if (camposFila.CAMPO_31 < '6') {
                if (camposFila.CAMPO_34 < '2' || camposFila.CAMPO_34 == '3' || camposFila.CAMPO_34 == '4' || camposFila.CAMPO_34 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1853',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 448
            if (camposFila.CAMPO_31 < '6' && camposFila.CAMPO_35 != '0') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1854',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //valiadacion fila 449 hasta 451
            if (camposFila.CAMPO_31 < '6') {
                if (camposFila.CAMPO_60 >= '0' || camposFila.CAMPO_61 >= '0' || camposFila.CAMPO_62 >= '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1855',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 452 hasta 454 
            if (camposFila.CAMPO_31 == '4') {
                if (camposFila.CAMPO_30 >= '8' && camposFila.CAMPO_30 <= '11' || camposFila.CAMPO_30 == '16') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1859',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 455 hasta 457
            if (camposFila.CAMPO_31 == '5') {
                if (camposFila.CAMPO_30 >= '8' && camposFila.CAMPO_30 <= '11' && camposFila.CAMPO_23 <= '1') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1861',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 458 hasta 461
            if (camposFila.CAMPO_31 == '3') {
                if (camposFila.CAMPO_23 == '0' && camposFila.CAMPO_30 == '0' || camposFila.CAMPO_23 == '1' && camposFila.CAMPO_30 == '1') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2403',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 462 hasta  465 
            if (camposFila.CAMPO_31 >= '0' && camposFila.CAMPO_31 <= '8' || camposFila.CAMPO_31 == '9999' || camposFila.CAMPO_31 == '9996') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2571',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 466 hasta 469  
            if (camposFila.CAMPO_31 == '7') {
                if (camposFila.CAMPO_34 == '3' && camposFila.CAMPO_35 != '0' || camposFila.CAMPO_33 < '4' && camposFila.CAMPO_34 < 2) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2576o',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 370 hasta 374
            if (camposFila.CAMPO_31 == '6') {
                if (camposFila.CAMPO_32_1 == '9998' && camposFila.CAMPO_32_2 == '0' && camposFila.CAMPO_32_3 == '0' && camposFila.CAMPO_32_4 == '0' && camposFila.CAMPO_55 == '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2657',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 375
            if (camposFila.CAMPO_31 == '6' && camposFila.CAMPO_30 == '7') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4022',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 476 hasta 480
            if (camposFila.CAMPO_31 == '7') {
                if (camposFila.CAMPO_32_1 < '90' && camposFila.CAMPO_32_2 >= '1' && camposFila.CAMPO_32_2 <= '6' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4023',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 481 hasta 486
            if (camposFila.CAMPO_31 == '8') {
                if (camposFila.CAMPO_23 == '3' && camposFila.CAMPO_32_1 < '90' && camposFila.CAMPO_32_2 >= '1' && camposFila.CAMPO_32_2 <= '6' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4024',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 487 hasta 489
            if (camposFila.CAMPO_31 == '8') {
                if (camposFila.CAMPO_33 < '4' && camposFila.CAMPO_34 < '2' && camposFila.CAMPO_35 != '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4025',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 490 hasta 497 
            if (camposFila.CAMPO_31 == '9996') {
                if (camposFila.CAMPO_30 == '9996' && camposFila.CAMPO_32_1 == '9996' && camposFila.CAMPO_32_2 == '9996' && camposFila.CAMPO_32_3 == '999996' && camposFila.CAMPO_32_4 == '9996' && camposFila.CAMPO_33 == '9996' && camposFila.CAMPO_34 == '9996' && camposFila.CAMPO_35 == '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4026',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 498 hasta 504
            if (camposFila.CAMPO_31 == '9999') {
                if (camposFila.CAMPO_30.CAMPO_30 == '9999' && camposFila.CAMPO_32_1 == '9999' && camposFila.CAMPO_32_2 == '9999' && camposFila.CAMPO_32_3 == '999999' && camposFila.CAMPO_32_4 == '9999' && camposFila.CAMPO_33 == '9999' && camposFila.CAMPO_34 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4027',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 505 y 506
            if (camposFila.CAMPO_31 < '6') {
                if (camposFila.CAMPO_33 < '4' || camposFila.CAMPO_33 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4342',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 507
            if (camposFila.CAMPO_31 == '1' && camposFila.CAMPO_48 != '4') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4379',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 508 
            if (camposFila.CAMPO_31 == '2' && camposFila.CAMPO_48 != '4') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4380',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 509 
            if (camposFila.CAMPO_31 == '7' && camposFila.CAMPO_48 != '4') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4381',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 510 y 511
            if (camposFila.CAMPO_31 == '5') {
                if (camposFila.CAMPO_32_3 > '0' && camposFila.CAMPO_32_3 <= '900000') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4382',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 512
            if (camposFila.CAMPO_31 == '0' && camposFila.CAMPO_34 != '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B5424',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 514 y 515
            if (camposFila.CAMPO_32 >= '2' && camposFila.CAMPO_32 <= '250') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B903',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 517 hasta 521
            if (camposFila.CAMPO_32_1 < '90') {
                if (camposFila.CAMPO_31 == '1' || camposFila.CAMPO_31 == '2' || camposFila.CAMPO_31 == '4' || camposFila.CAMPO_31 == '7' || camposFila.CAMPO_31 == '8') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4384',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 522 hasta la 527
            if (camposFila.CAMPO_32_1 > '0' && camposFila.CAMPO_32_1 < '90' || camposFila.CAMPO_32_1 == '9998' || camposFila.CAMPO_32_1 == '9999' || camposFila.CAMPO_32_1 == '9997' || camposFila.CAMPO_32_1 == '9996') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B904',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 529 hasta 532
            if (camposFila.CAMPO_32_2 < '8' || camposFila.CAMPO_32_2 == '9996' || camposFila.CAMPO_32_2 == '9997' || camposFila.CAMPO_32_2 == '9999') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4028',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 534 hasta 539 
            if (camposFila.CAMPO_32_3 >= '0' && camposFila.CAMPO_32_3 <= '900000' || camposFila.CAMPO_32_3 == '999997' || camposFila.CAMPO_32_3 == '999999' || camposFila.CAMPO_32_3 == '999996' || camposFila.CAMPO_32_3 == '999955') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B905',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            // validacion fila 541 hasta 545
            if (camposFila.CAMPO_32_4 >= '0' && camposFila.CAMPO_32_4 <= '500' || camposFila.CAMPO_32_4 == '9996' || camposFila.CAMPO_32_4 == '9999' || camposFila.CAMPO_32_4 == '9997' || camposFila.CAMPO_32_4 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B906',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 548 hasta 551
            if (camposFila.CAMPO_33 < '5' || camposFila.CAMPO_33 == '9996' || camposFila.CAMPO_33 == '9999' || camposFila.CAMPO_33 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4029',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 553 hasta 556
            if (camposFila.CAMPO_34 < '5' || camposFila.CAMPO_34 == '9996' || camposFila.CAMPO_34 == '9999' || camposFila.CAMPO_34 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4030',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 558 hasta 560
            if (camposFila.CAMPO_35 > '0') {
                if (camposFila.CAMPO_60 > '0' || camposFila.CAMPO_62 > '0' || camposFila.CAMPO_61 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2454',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 562 hasta 564
            if (camposFila.CAMPO_36 > '0') {
                if (camposFila.CAMPO_60 > '0' || camposFila.CAMPO_61 > '0' || camposFila.CAMPO_62 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2455',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 565
            if (camposFila.CAMPO_36 != '0' && camposFila.CAMPO_35 != '0') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4031',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 567 hasta 569
            if (camposFila.CAMPO_37 > '0') {
                if (camposFila.CAMPO_60 > '0' || camposFila.CAMPO_61 > '0' || camposFila.CAMPO_62 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2456',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 570 y 571
            if (camposFila.CAMPO_37 != '0') {
                if (camposFila.CAMPO_35 != '0' && camposFila.CAMPO_36 != '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4032',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 573 hasta 575 
            if (camposFila.CAMPO_38 > '0') {
                if (camposFila.CAMPO_60 > '0' || camposFila.CAMPO_61 > '0' || camposFila.CAMPO_62 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2457',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 576 hasta 578
            if (camposFila.CAMPO_38 != '0') {
                if (camposFila.CAMPO_35 != '0' && camposFila.CAMPO_36 != '0' && camposFila.CAMPO_37 != '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4033',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion  fila 581 y 582 
            if (camposFila.CAMPO_40 == '0') {
                if (camposFila.CAMPO_40_1 == '0' && camposFila.CAMPO_40_2 == '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1178',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 583 y 584
            if (camposFila.CAMPO_40 == '1') {
                if (camposFila.CAMPO_40_1 != '0' || camposFila.CAMPO_40_2 != '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1180',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 585 hasta 587
            if (camposFila.CAMPO_40 == '5555') {
                if (camposFila.CAMPO_40_1 == '5555' && camposFila.CAMPO_40_2 == '5555' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2405',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 588 hasta 591
            if (camposFila.CAMPO_40 <= '1' || camposFila.CAMPO_40 == '9996' || camposFila.CAMPO_40 == '9999' || camposFila.CAMPO_40 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4034',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 592 y 593
            if (camposFila.CAMPO_40 == '1') {
                if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_23 == '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4035',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 594
            if (camposFila.CAMPO_40 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4036',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 596
            if (camposFila.CAMPO_40_1 <= '60' && camposFila.CAMPO_23 <= '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1940',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 597
            if (camposFila.CAMPO_40_1 <= '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4037',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 598 hasta 602
            if (camposFila.CAMPO_40_1 >= '0' && camposFila.CAMPO_40_1 <= '60' || camposFila.CAMPO_40_1 == '9999' || camposFila.CAMPO_40_1 == '9996' || camposFila.CAMPO_40_1 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B907',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 604 
            if (camposFila.CAMPO_40_2 <= '60' && camposFila.CAMPO_23 <= '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1941',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 605
            if (camposFila.CAMPO_40_2 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4038',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 606 hasta 610
            if (camposFila.CAMPO_40_2 >= '0' && camposFila.CAMPO_40_2 <= '60' || camposFila.CAMPO_40_2 == '9999' || camposFila.CAMPO_40_2 == '99996' || camposFila.CAMPO_40_2 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B908',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }



            //validacion fila 612 hasta 614 
            if (camposFila.CAMPO_41 >= '1') {
                if (camposFila.CAMPO_47_3 > '0' || camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1951',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 615 hasta 619
            if (camposFila.CAMPO_41 >= '0' && camposFila.CAMPO_41 <= '60' || camposFila.CAMPO_41 == '9999' || camposFila.CAMPO_41 == '9996' || camposFila.CAMPO_41 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2406',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacio fila 620
            if (camposFila.CAMPO_41 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4039',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validaion fila 622 hasta 624
            if (camposFila.CAMPO_40_2 >= '1') {
                if (camposFila.CAMPO_47_3 > '0' || camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1952',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 625 hasta 629
            if (camposFila.CAMPO_42 >= '0' && camposFila.CAMPO_42 <= '60' || camposFila.CAMPO_42 == '9999' || camposFila.CAMPO_42 == '9996' || camposFila.CAMPO_42 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2407',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 630
            if (camposFila.CAMPO_42 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4040',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 632 hasta 634
            if (camposFila.CAMPO_43 >= '1') {
                if (camposFila.CAMPO_47_3 > '0' || camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1953',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 635 hasta 639
            if (camposFila.CAMPO_43 >= '0' && camposFila.CAMPO_43 <= '60' || camposFila.CAMPO_43 == '9999' || camposFila.CAMPO_43 == '9996' || camposFila.CAMPO_43 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2408',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 640
            if (camposFila.CAMPO_43 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4041',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 642 hasta 644
            if (camposFila.CAMPO_44 >= '1') {
                if (camposFila.CAMPO_47_3 > '0' || camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1954',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 645 hasta 649
            if (camposFila.CAMPO_44 >= '0' && camposFila.CAMPO_44 <= '60' || camposFila.CAMPO_44 == '9999' || camposFila.CAMPO_44 == '9996' || camposFila.CAMPO_44 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2409',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 650
            if (camposFila.CAMPO_44 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4042',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //vañidacion fila 652 hasta 654
            if (camposFila.CAMPO_45 >= '1') {
                if (camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0' || camposFila.CAMPO_47_3 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1955',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            // validacion fila 655 hasta 659
            if (camposFila.CAMPO_45 >= '0' && camposFila.CAMPO_45 <= '60' || camposFila.CAMPO_45 == '9999' || camposFila.CAMPO_45 == '9996' || camposFila.CAMPO_45 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2410',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 660
            if (camposFila.CAMPO_45 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4043',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 662 hasta 664
            if (camposFila.CAMPO_46 >= '1') {
                if (camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0' || camposFila.CAMPO_47_3 > '0') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1956',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 665 hasta 669
            if (camposFila.CAMPO_46 >= '0' && camposFila.CAMPO_46 <= '60' || camposFila.CAMPO_46 == '9999' || camposFila.CAMPO_46 == '9996' || camposFila.CAMPO_46 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2411',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }



            //validacion fila 670 
            if (camposFila.CAMPO_46 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4044',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 672
            if (camposFila.CAMPO_47_1 <= '60' && camposFila.CAMPO_23 <= '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1942',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 673 hasta 681
            if (camposFila.CAMPO_47_1 == '9999') {
                if (camposFila.CAMPO_41 == '9999' && camposFila.CAMPO_42 == '9999' && camposFila.CAMPO_43 == '9999' && camposFila.CAMPO_44 == '9999' && camposFila.CAMPO_45 == '9999' && camposFila.CAMPO_46 == '9999' && camposFila.CAMPO_47_2 == '9999' && camposFila.CAMPO_47_3 == '9999' && camposFila.CAMPO_23 > '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1948',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 682 hasta 689
            if (camposFila.CAMPO_47_1 == '5555') {
                if (camposFila.CAMPO_41 == '5555' && camposFila.CAMPO_42 == '5555' && camposFila.CAMPO_43 == '5555' && camposFila.CAMPO_44 == '5555' && camposFila.CAMPO_45 == '5555' && camposFila.CAMPO_46 == '5555' && camposFila.CAMPO_47_2 == '5555' && camposFila.CAMPO_47_3 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2412',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 690 hasta 694
            if (camposFila.CAMPO_47_1 >= '0' && camposFila.CAMPO_47_1 <= '60' || camposFila.CAMPO_47_1 == '9999' || camposFila.CAMPO_47_1 == '9996' || camposFila.CAMPO_47_1 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B909',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 696 hasta 704
            if (camposFila.CAMPO_47_2 == '9999') {
                if (camposFila.CAMPO_41 == '9999' && camposFila.CAMPO_42 == '9999' && camposFila.CAMPO_43 == '9999' && camposFila.CAMPO_44 == '9999' && camposFila.CAMPO_45 == '9999' && camposFila.CAMPO_46 == '9999' && camposFila.CAMPO_47_1 == '9999' && camposFila.CAMPO_47_3 == '9999' && camposFila.CAMPO_23 > '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1241',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 705
            if (camposFila.CAMPO_47_2 <= '60' && camposFila.CAMPO_23 <= '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1943',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 706 hasta 713
            if (camposFila.CAMPO_47_2 == '5555') {
                if (camposFila.CAMPO_41 == '5555' && camposFila.CAMPO_42 == '5555' && camposFila.CAMPO_43 == '5555' && camposFila.CAMPO_44 == '5555' && camposFila.CAMPO_45 == '5555' && camposFila.CAMPO_46 == '5555' && camposFila.CAMPO_47_1 == '5555' && camposFila.CAMPO_47_3 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2413',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 714 hasta 718
            if (camposFila.CAMPO_47_2 >= '0' && camposFila.CAMPO_47_2 <= '60' || camposFila.CAMPO_47_2 == '9999' || camposFila.CAMPO_47_2 == '9996' || camposFila.CAMPO_47_2 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B910',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 720 hasta 728
            if (camposFila.CAMPO_47_3 == '9999') {
                if (camposFila.CAMPO_41 == '9999' && camposFila.CAMPO_42 == '9999' && camposFila.CAMPO_43 == '9999' && camposFila.CAMPO_44 == '9999' && camposFila.CAMPO_45 == '9999' && camposFila.CAMPO_46 == '9999' && camposFila.CAMPO_47_1 == '9999' && camposFila.CAMPO_47_2 == '9999' && camposFila.CAMPO_23 > '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1242',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 729
            if (camposFila.CAMPO_47_3 <= '60' && camposFila.CAMPO_23 <= '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1944',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 730 hasta 737
            if (camposFila.CAMPO_47_3 == '5555') {
                if (camposFila.CAMPO_41 == '5555' && camposFila.CAMPO_42 == '5555' && camposFila.CAMPO_43 == '5555' && camposFila.CAMPO_44 == '5555' && camposFila.CAMPO_45 == '5555' && camposFila.CAMPO_46 == '5555' && camposFila.CAMPO_47_1 == '5555' && camposFila.CAMPO_47_2 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2414',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 738 hasta 742
            if (camposFila.CAMPO_47_3 >= '0' && camposFila.CAMPO_47_3 <= '60' || camposFila.CAMPO_47_3 == '9999' || camposFila.CAMPO_47_3 == '9996' || camposFila.CAMPO_47_3 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B911',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 744 y 745
            if (camposFila.CAMPO_48 == '5555') {
                if (validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2416',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 746 hasta 749
            if (camposFila.CAMPO_48 <= '6' || camposFila.CAMPO_48 == '9996' || camposFila.CAMPO_48 == '9999' || camposFila.CAMPO_48 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4047',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 750 y 751 
            if (camposFila.CAMPO_48 <= '2') {
                if (camposFila.CAMPO_23 <= '1' && validacionhemofila.formatofecha(camposFila.CAMPO_48_1) >= validacionhemofila.formatofecha('2019-02-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4048',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 752 hasta 754 
            if (camposFila.CAMPO_48 == '3') {
                if (camposFila.CAMPO_23 <= '1' || validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacionhemofila.formatofecha('1845-01-01') && camposFila.CAMPO_23 == '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4049',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 755 hasta 757 
            if (camposFila.CAMPO_48 == '4') {
                if (camposFila.CAMPO_23 <= '1' || camposFila.CAMPO_23 == '3' && validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacionhemofila.formatofecha('1845-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4050',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 758 y 759
            if (camposFila.CAMPO_48 == '5') {
                if (camposFila.CAMPO_23 == '3' && validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacionhemofila.formatofecha('2019-02-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4051',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 760 y 761 
            if (camposFila.CAMPO_48 == '9996') {
                if (camposFila.CAMPO_23 <= '3' && validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacionhemofila.formatofecha('1845-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4052',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 762 hasta 764
            if (camposFila.CAMPO_48 == '9999') {
                if (camposFila.CAMPO_23 == '2' || camposFila.CAMPO_24 > '3' && validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacionhemofila.formatofecha('1845-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4053',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 765
            if (camposFila.CAMPO_48 == '6' && camposFila.CAMPO_23 == '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4558',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 767
            if (validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2417',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 768 hasta 771
            if (validacionhemofila.formatofecha(camposFila.CAMPO_48_1) <= validacionhemofila.formatofecha(camposFila.CAMPO_66) && validacionhemofila.formatofecha(camposFila.CAMPO_48_1) >= validacionhemofila.formatofecha('2020-02-01') || validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacionhemofila.formatofecha('1846-01-01') || validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacionhemofila.formatofecha('1845-01-01')) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B912',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 773 hasta 775
            if (camposFila.CAMPO_48_2 <= '1' || camposFila.CAMPO_48_2 == '9999' || camposFila.CAMPO_48_2 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4054',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 776
            if (camposFila.CAMPO_48_2 == '1' && camposFila.CAMPO_23 <= '1') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4055',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 777
            if (camposFila.CAMPO_48_2 == '9999' && camposFila.CAMPO_23 > '1') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4056',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 779 hasta 781
            if (camposFila.CAMPO_48_3 == '0') {
                if (camposFila.CAMPO_48_4 == '9998' && camposFila.CAMPO_31 < '3' || camposFila.CAMPO_31 > '5') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1179',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 782 
            if (camposFila.CAMPO_48_3 == '1' && camposFila.CAMPO_48 <= '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1181',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 783 y784
            if (camposFila.CAMPO_48_3 == '1') {
                if (camposFila.CAMPO_48_4 >= '1' && camposFila.CAMPO_48_4 <= '365') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1594',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 785 hasta 788
            if (camposFila.CAMPO_42 == '2') {
                if (camposFila.CAMPO_48_4 > '0' && camposFila.CAMPO_48_4 <= '365' && camposFila.CAMPO_31 >= '3' && camposFila.CAMPO_31 <= '5') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1595',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 789
            if (camposFila.CAMPO_48_3 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2418',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 790 hasta 793
            if (camposFila.CAMPO_48_3 <= '2' || camposFila.CAMPO_48_3 == '9996' || camposFila.CAMPO_48_3 == '9999' || camposFila.CAMPO_48_3 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4057',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 794 hasta 798
            if (camposFila.CAMPO_48_3 == '2') {
                if (camposFila.CAMPO_30 < '2' || camposFila.CAMPO_30 == '8' || camposFila.CAMPO_30 == '9' || camposFila.CAMPO_30 == '10' || camposFila.CAMPO_30 == '11') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4058',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 799
            if (camposFila.CAMPO_48_3 == '3' && camposFila.CAMPO_30 == '18') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4059',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 800 y 801
            if (camposFila.CAMPO_48_3 == '9999') {
                if (camposFila.CAMPO_23 >= '2' && camposFila.CAMPO_48_4 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4060',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
            }

            //validacion fila 802
            if (camposFila.CAMPO_48_3 == '9996' && camposFila.CAMPO_48_4 == '9996') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4372',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validaicon fila 804
            if (camposFila.CAMPO_48_4 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2419',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 805 hasta 810
            if (camposFila.CAMPO_48_4 >= '1' && camposFila.CAMPO_48_4 <= '365' || camposFila.CAMPO_48_4 == '9998' || camposFila.CAMPO_48_4 == '9999' || camposFila.CAMPO_48_4 == '9996' || camposFila.CAMPO_48_4 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B913',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 812
            if (camposFila.CAMPO_49 == '0' && camposFila.CAMPO_49_1 == '0') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1183',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 813 y 814
            if (camposFila.CAMPO_49 == '1') {
                if (camposFila.CAMPO_49_1 > '0' && camposFila.CAMPO_49_1 < '30') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1184',
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

            //validacion fila 815
            if (camposFila.CAMPO_49_1 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2420',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            // validacion fila 816 hasta 819
            if (camposFila.CAMPO_49 <= '1' || camposFila.CAMPO_49 == '9996' || camposFila.CAMPO_49 == '9999' || camposFila.CAMPO_49 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4061',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 820 y 821
            if (camposFila.CAMPO_49 == '1') {
                if (camposFila.CAMPO_23 < '2' && camposFila.CAMPO_23 == '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4062',
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

            //validacion fila 822 hasta 824 
            if (camposFila.CAMPO_49 == '9999') {
                if (camposFila.CAMPO_23 == '2' || camposFila.CAMPO_23 > '3' && camposFila.CAMPO_49_1 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4063',
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

            //validacion fila 826 hasta 830
            if (camposFila.CAMPO_49_1 >= '0' && camposFila.CAMPO_49_1 <= '100' || camposFila.CAMPO_49_1 == '9999' || camposFila.CAMPO_49_1 == '9996' || camposFila.CAMPO_49_1 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B914',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 832
            if (camposFila.CAMPO_50 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2421',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 833 hasta hasta 836
            if (camposFila.CAMPO_50 <= '1' || camposFila.CAMPO_50 == '9999' || camposFila.CAMPO_50 == '9996' || camposFila.CAMPO_50 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2422',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 837
            if (camposFila.CAMPO_50 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4064',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 839
            if (camposFila.CAMPO_51 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2423',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            // validacion fila 840 hasta 843
            if (camposFila.CAMPO_51 <= '1' || camposFila.CAMPO_51 == '9996' || camposFila.CAMPO_51 == '9999' || camposFila.CAMPO_51 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2424',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 844
            if (camposFila.CAMPO_51 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4065',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 846
            if (camposFila.CAMPO_52 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2425',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 846 hasta 850
            if (camposFila.CAMPO_52 <= '1' || camposFila.CAMPO_52 == '9999' || camposFila.CAMPO_52 == '9996' || camposFila.CAMPO_52 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2426',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 851 
            if (camposFila.CAMPO_52 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4066',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 853
            if (camposFila.CAMPO_53 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2427',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 854 a 857
            if (camposFila.CAMPO_53 <= '1' || camposFila.CAMPO_53 == '9999' || camposFila.CAMPO_53 == '9996' || camposFila.CAMPO_53 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2428',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 858 y 859
            if (camposFila.CAMPO_53 == '1') {
                if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_23 == '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4067',
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

            //validacion fila 860 
            if (camposFila.CAMPO_53 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4068',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 862 
            if (camposFila.CAMPO_54 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2429',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 863 hasta 866
            if (camposFila.CAMPO_54 <= '1' || camposFila.CAMPO_54 == '9999' || camposFila.CAMPO_54 == '9996' || camposFila.CAMPO_54 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2430',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 867 y 868
            if (camposFila.CAMPO_54 == '1') {
                if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_23 == '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4069',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    }
                }
            }

            //validacion fila 869
            if (camposFila.CAMPO_54 == '9999' && camposFila.CAMPO_23 > '3') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4070',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 871
            if (camposFila.CAMPO_55 == '1' && camposFila.CAMPO_55_1 != '0') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1334',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 872
            if (camposFila.CAMPO_55 == '0' && camposFila.CAMPO_55_1 == '0') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1865',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 873 y 874 
            if (camposFila.CAMPO_55 == '5555') {
                if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2431',
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

            //validacion fila 875 hasta 878
            if (camposFila.CAMPO_55 <= '1' || camposFila.CAMPO_55 == '9996' || camposFila.CAMPO_55 == '9999' || camposFila.CAMPO_55 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4071',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }



            //validacion fila 879 y 880
            if (camposFila.CAMPO_55 == '1') {
                if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_23 == '3') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4072',
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

            //validacion fila 881 y 882
            if (camposFila.CAMPO_55 == '9999') {
                if (camposFila.CAMPO_23 > '3' && camposFila.CAMPO_55_1 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4073',
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

            //validacion fila 884
            if (camposFila.CAMPO_55_1 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2432',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 886
            if (camposFila.CAMPO_56 == '9999' && camposFila.CAMPO_56_1 == '9999') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1868',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 887 hasta 890
            if (camposFila.CAMPO_56 >= '0' && camposFila.CAMPO_56 <= '20' || camposFila.CAMPO_56 == '9999' || camposFila.CAMPO_56 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1897',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 891 y 892
            if (camposFila.CAMPO_56 == '0') {
                if (camposFila.CAMPO_56_1 == '0' || camposFila.CAMPO_56_1 == '9996') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1901',
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

            //validacion fila 893
            if (camposFila.CAMPO_56 == '5555' && camposFila.CAMPO_56_1 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2433',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 894
            if (camposFila.CAMPO_56 <= '20' && camposFila.CAMPO_23 < '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4074',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 896 
            if (camposFila.CAMPO_56_1 <= '20' && camposFila.CAMPO_56 <= '20') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4075',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 897 hasta 901
            if (camposFila.CAMPO_56_1 >= '0' && camposFila.CAMPO_56_1 <= '20' || camposFila.CAMPO_56_1 == '9999' || camposFila.CAMPO_56_1 == '9996' || camposFila.CAMPO_56_1 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B915',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 903 hasta 905
            if (camposFila.CAMPO_57 == '9996') {
                if (camposFila.CAMPO_57_1 == '9996' && camposFila.CAMPO_57_2 == '9996' && camposFila.CAMPO_64 == '9') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1869',
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

            //validacion fila 906
            if (camposFila.CAMPO_57 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2434',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 907 hasta 910
            if (camposFila.CAMPO_57 <= '5' || camposFila.CAMPO_57 == '9999' || camposFila.CAMPO_57 == '9996' || camposFila.CAMPO_57 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2435',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 912
            if (camposFila.CAMPO_57_1 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2436',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 913 hasta 917
            if (camposFila.CAMPO_57_1 >= '0' && camposFila.CAMPO_57_1 <= '30' || camposFila.CAMPO_57_1 == '9996' || camposFila.CAMPO_57_1 == '9999' || camposFila.CAMPO_57_1 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B916',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 519
            if (camposFila.CAMPO_57_2 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2437',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 920 hasta 924 
            if (camposFila.CAMPO_57_2 >= '0' && camposFila.CAMPO_57_2 <= '30' || camposFila.CAMPO_57_2 == '9999' || camposFila.CAMPO_57_2 == '9996' || camposFila.CAMPO_57_2 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B917',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 926
            if (camposFila.CAMPO_57_3 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2438',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 927 hasta 931
            if (camposFila.CAMPO_57_3 >= '0' && camposFila.CAMPO_57_3 <= '50' || camposFila.CAMPO_57_3 == '9999' || camposFila.CAMPO_57_3 == '9996' || camposFila.CAMPO_57_3 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2439',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //valdacion fila 933
            if (camposFila.CAMPO_57_4 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2440',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 934 hasta 938
            if (camposFila.CAMPO_57_4 >= '0' && camposFila.CAMPO_57_4 <= '30' || camposFila.CAMPO_57_4 == '9999' || camposFila.CAMPO_57_4 == '9996' || camposFila.CAMPO_57_4 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B918',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 940
            if (camposFila.CAMPO_57_5 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2441',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 941 hasta 945
            if (camposFila.CAMPO_57_5 >= '0' && camposFila.CAMPO_57_5 <= '30' || camposFila.CAMPO_57_5 == '9999' || camposFila.CAMPO_57_5 == '9996' || camposFila.CAMPO_57_5 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B919',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 947 
            if (camposFila.CAMPO_57_6 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2442',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 948 hasta 952
            if (camposFila.CAMPO_57_6 >= '0' && camposFila.CAMPO_57_6 <= '30' || camposFila.CAMPO_57_6 == '9999' || camposFila.CAMPO_57_6 == '9996' || camposFila.CAMPO_57_6 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B920',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 954
            if (camposFila.CAMPO_57_7 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2443',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 955 hasta 959
            if (camposFila.CAMPO_57_7 >= '0' && camposFila.CAMPO_57_7 <= '30' || camposFila.CAMPO_57_7 == '9999' || camposFila.CAMPO_57_7 == '9996' || camposFila.CAMPO_57_7 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B921 ',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 961
            if (camposFila.CAMPO_57_8 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2444',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 962 hasta 966
            if (camposFila.CAMPO_57_8 >= '0' && camposFila.CAMPO_57_8 <= '30' || camposFila.CAMPO_57_8 == '9999' || camposFila.CAMPO_57_8 == '9996' || camposFila.CAMPO_57_8 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B922',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 968
            if (camposFila.CAMPO_57_9 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2445',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 969 hasta 973
            if (camposFila.CAMPO_57_9 >= '0' && camposFila.CAMPO_57_9 <= '150' || camposFila.CAMPO_57_9 == '9999' || camposFila.CAMPO_57_9 == '9996' || camposFila.CAMPO_57_9 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2446',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 975 hasta 979
            if (camposFila.CAMPO_57_10 >= '0' && camposFila.CAMPO_57_11 <= '150' || camposFila.CAMPO_57_11 == '9999' || camposFila.CAMPO_57_11 == '9996' || camposFila.CAMPO_57_11 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2448',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 981
            if (camposFila.CAMPO_57_11 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2447',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 986
            if (camposFila.CAMPO_58 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2450',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 987 hasta 991
            if (camposFila.CAMPO_58 == '9999') {
                if (camposFila.CAMPO_23 > '3' && camposFila.CAMPO_40 == '9999' && camposFila.CAMPO_47_1 == '9999' && camposFila.CAMPO_47_2 == '9999' && camposFila.CAMPO_47_3 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4076',
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

            //validacion fila 992 hasta 995
            if (camposFila.CAMPO_58 >= '0' && camposFila.CAMPO_58 <= '30' || camposFila.CAMPO_58 == '9999' || camposFila.CAMPO_58 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B923',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }


            //validacion fila 997
            if (camposFila.CAMPO_59 == '5555' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2449',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 998 hasta 1001
            if (camposFila.CAMPO_59 >= '0' && camposFila.CAMPO_59 <= '30' || camposFila.CAMPO_59 == '9999' || camposFila.CAMPO_59 == '5555') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B924',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1003 hasta 1005
            if (camposFila.CAMPO_60 == '99') {
                if (camposFila.CAMPO_10 == 'S' || camposFila.CAMPO_10 == 'E' || camposFila.CAMPO_10 == 'C') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4078',
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

            //validacion fila 1006 hasta 1009
            if (camposFila.CAMPO_60 >= '60000' && camposFila.CAMPO_60 <= '9000000000' || camposFila.CAMPO_60 == '0' || camposFila.CAMPO_60 == '99') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B925',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1011 y 1012
            if (camposFila.CAMPO_61 == '99') {
                if (camposFila.CAMPO_10 == 'S' || camposFila.CAMPO_10 == 'E') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4079',
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

            //validacion fila 1013 hasta 1016
            if (camposFila.CAMPO_61 >= '800000' && camposFila.CAMPO_61 <= '9000000000' || camposFila.CAMPO_61 == '0' || camposFila.CAMPO_61 == '99') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B926',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1018 y 1019
            if (camposFila.CAMPO_62 >= camposFila.CAMPO_60 && camposFila.CAMPO_62 >= camposFila.CAMPO_61) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2562',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1020 y 1021
            if (camposFila.CAMPO_62 >= '0' && camposFila.CAMPO_62 <= '9000000000') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B927',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1023 y 2024
            if (camposFila.CAMPO_63 >= '0' && camposFila.CAMPO_63 <= '99000000') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B928',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1026
            if (camposFila.CAMPO_64 == '4' && validacionhemofila.formatofecha(camposFila.CAMPO_64_2) != validacionhemofila.formatofecha('1845-01-01')) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1195',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1027
            if (camposFila.CAMPO_64 == '4' && camposFila.CAMPO_64_1 != '98') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1228',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1028
            if (camposFila.CAMPO_64 == '10' && validacionhemofila.formatofecha(camposFila.CAMPO_64_2) != validacionhemofila.formatofecha('1845-01-01')) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1561',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1029
            if (camposFila.CAMPO_64 == '10' && camposFila.CAMPO_64_1 != '98') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1562',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1030 y 1031 
            if (camposFila.CAMPO_64 < '4') {
                if (camposFila.CAMPO_64_1 == '98' && validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacionhemofila.formatofecha('1845-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1875',
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

            //validacion fila 1032 y 1033
            if (camposFila.CAMPO_64 == '5') {
                if (camposFila.CAMPO_64_1 == '98' && validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacionhemofila.formatofecha('1845-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1876',
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

            //validacion fila 1034 y 1035
            if (camposFila.CAMPO_64 == '7') {
                if (camposFila.CAMPO_64_1 == '98' && validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacionhemofila.formatofecha('1845-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1877',
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

            //validacion fila 1036 y 1037
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_64_1 == '98' && validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacionhemofila.formatofecha('1845-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1878',
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

            //validacion fila 1038 hasta 1042
            if (camposFila.CAMPO_64 == '2') {
                if (validacionhemofila.formatofecha(camposFila.CAMPO_21) != validacionhemofila.formatofecha('1800-01-01') && camposFila.CAMPO_22 != '99' && camposFila.CAMPO_27 != '4' && camposFila.CAMPO_28 != '6' && validacionhemofila.formatofecha(camposFila.CAMPO_29) != validacionhemofila.formatofecha('1800-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2557',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    }
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }

                //validacion fila 1043 hasta 1045
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_61 == '0' && camposFila.CAMPO_62 == '0' && camposFila.CAMPO_60 == '0') {
                        arrayCamposBuenos.push(camposFila);
                    } else {
                        var hemofilia: Hemofiliaerror = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B2582',
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

                //validacion fila 1046 y 1047
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_40 == '9996' || camposFila.CAMPO_40 == '9999') {
                        arrayCamposBuenos.push(camposFila);
                    } else {
                        var hemofilia: Hemofiliaerror = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B4094',
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

            //validacion fila 1048 y 1049
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_40_1 == '9996' || camposFila.CAMPO_40_1 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4095',
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

            //validacion fila 1050 y 1051
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_40_2 == '9996' || camposFila.CAMPO_40_2 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4096',
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

            //validacion fila 1052 y 1053
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_41 == '9996' || camposFila.CAMPO_41 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4097',
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

            //validacion fila 1054 y 1055
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_42 == '9996' || camposFila.CAMPO_42 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4098',
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

            //validacion fila 1056 y 1057
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_43 == '9996' || camposFila.CAMPO_43 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4099',
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

            //validacion fila 1058 y 1059
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_44 == '9996' || camposFila.CAMPO_44 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4100',
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

            //validacion fila 1060 y 1061
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_45 == '9996' || camposFila.CAMPO_45 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4101',
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

            //validacion fila 1062 y 1063
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_46 == '9996' || camposFila.CAMPO_46 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4102',
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

            //validacion fila 1064 y 1065
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_47_1 == '9996' || camposFila.CAMPO_47_1 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4103',
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

            //validacion fila 1066 y 1067
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_47_2 == '9996' || camposFila.CAMPO_47_2 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4104',
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

            //validacion fila 1068 y 1069
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_47_3 == '9996' || camposFila.CAMPO_47_3 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4105',
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

            //validacion fila 1070 y 1071
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_48_3 == '9996' || camposFila.CAMPO_48_3 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4106',
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

            //validacion fila 1072 y 1073
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_48_4 == '9996' || camposFila.CAMPO_48_4 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4107',
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

            //validacion fila 1074 y 1075
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_53 == '9996' || camposFila.CAMPO_53 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4108',
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

            //validacion fila 1076 y 1077
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_54 == '9996' || camposFila.CAMPO_54 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
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

            //validacion fila 1078 y 1079
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_55 == '9996' || camposFila.CAMPO_55 == 'B4109') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4110',
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

            //validacion fila 1080 y 1081
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_55_1 == '9996' || camposFila.CAMPO_55_1 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4111',
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

            //validacion fila 1082 y 1083
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_58 == '0' || camposFila.CAMPO_58 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4112',
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

            //validacion fila 1084 y 1085
            if (camposFila.CAMPO_64 == '9') {
                if (camposFila.CAMPO_59 == '0' || camposFila.CAMPO_59 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4113',
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

            //validacion fila 1086
            if (camposFila.CAMPO_64 == '9' && camposFila.CAMPO_57 == '9996') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4386',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1087 hasta 1089
            if (camposFila.CAMPO_64 == '11') {
                if (camposFila.CAMPO_40 == '5555' && camposFila.CAMPO_40_1 == '5555' && camposFila.CAMPO_40_2 == '55555') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4387',
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


            //validacion fila 1091 y 1092
            if (camposFila.CAMPO_64_1 == '98') {
                if (camposFila.CAMPO_64 != '4' && camposFila.CAMPO_64 != '10') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1196',
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

            //validacion fila 1093
            if (camposFila.CAMPO_64_1 == '55' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B2451',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1095 hasta 1097
            if (validacionhemofila.formatofecha(camposFila.CAMPO_64_2) >= validacionhemofila.formatofecha('2020-02-01') && validacionhemofila.formatofecha(camposFila.CAMPO_64_2) >= validacionhemofila.formatofecha(camposFila.CAMPO_66) || validacionhemofila.formatofecha(camposFila.CAMPO_64_2) >= validacionhemofila.formatofecha('1845-01-01')) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1198',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1098 y 1099
            if (validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacionhemofila.formatofecha('1845-01-01')) {
                if (camposFila.CAMPO_64_1 == '98' || camposFila.CAMPO_64_1 == '55') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4015',
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

            //validacion fila 1100
            if (validacionhemofila.formatofecha(camposFila.CAMPO_64_2) >= validacionhemofila.formatofecha('2020-02-01') && camposFila.CAMPO_48_1 < camposFila.CAMPO_64_2) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B4388',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //validacion fila 1103
            if (validacionhemofila.formatofecha(camposFila.CAMPO_66) == validacionhemofila.formatofecha(_this.fechacorte)) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'B1899',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
                arrayCamposMalos.push(hemofilia);
                _this.totalCamposMalos = this.totalCamposMalos + 1;
            }

            //guardar los arreglos campos buenos y malos

            _this.filas_buenas['fila_' + numFila] = arrayCamposBuenos;
            _this.filas_malas['fila_' + numFila] = arrayCamposMalos;
            console.log('filas malas -----------------------------------------------')
            console.log(_this.filas_malas);
        }
    }
}


export default ValidacionContenidoPH;