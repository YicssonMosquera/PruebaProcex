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

    constructor() {
        this.data = new Map();
        this.fechanacimiento2016 = new Date('2021-01-31');
        this.fechacorte = new Date();
        this.fehaMayorEdad = new Date();
        this.fechaMenorEdad = new Date();
        this.fechaMaores60 = new Date();
        this.fechaMaores9 = new Date();
        this.fechaMayores70 = new Date();

    }

    async Validar(arrayCampos) {
        var _this = this;
        //Calculos de fecha de acuerdo con la fecha de corte de la base de datos.
        _this.fehaMayorEdad = await validacionhemofila.calcularMayorEdad();
        _this.fechaMenorEdad = await validacionhemofila.CalcularMenorEdad();
        _this.fechaMaores60 = await validacionhemofila.calcularAfiliadosde60Añ0s();
        _this.fechaMaores9 = await validacionhemofila.calcularAfiliadosde9Años();
        _this.fechaMayores70 = await validacionhemofila.calcularAfiliadosde70Años();

        console.log(validacionhemofila.formatofecha(_this.fechaMayores70))

        //recorrer el array campos que son las filas del file txt
        for (let index = 0; index < arrayCampos.length; index++) {
            //get campo fila
            const camposFila = arrayCampos[index];
            var numFila = index + 1;

            //crear arreglos para adicionar campos buenos y malos
            var arrayCamposBuenos = [];
            var arrayCamposMalos = [];

            //validacion afiliados mayores de edad
            if (camposFila.CAMPO_5 == 'CC' && validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacionhemofila.formatofecha(_this.fehaMayorEdad)) {
                console.log('entro 7');
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de identificacion no corresponde el usuario debe ser mayor de edad' + '' + camposFila.CAMPO_7,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                }
            }

            //validacion afiliados con 5años y cumplimiento del campo 56
            if (validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                if (camposFila.CAMPO_56 == '0' || camposFila.CAMPO_56 == '5555' || camposFila.CAMPO_56 == '9996' || camposFila.CAMPO_56 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_56,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    }
                }
            }
            //validacion afiliados con 5años y cumplimiento del campo 56-_1
            if (validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                if (camposFila.CAMPO_56_1 == '0' || camposFila.CAMPO_56_1 == '5555' || camposFila.CAMPO_56_1 == '9996' || camposFila.CAMPO_56_1 == '9999') {
                    console.log('Entra validcion campo 56_1');
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_56_1,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
            }
            //validacion afilidados masculino con el campo 23 
            if (camposFila.CAMPO_8 == 'M') {
                if (camposFila.CAMPO_23 != 2) {
                    console.log('Entra campo 23');
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_23,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
            }

            //validacion afiliado campo 17 y aceptacion
            if (camposFila.CAMPO_17 == '3' && camposFila.CAMPO_8 == 'M') {
                console.log('entra campo 8 con respecto al 17');
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_17,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion campo 17 con cumpliento
            if (camposFila.CAMPO_17 == '1') {
                if (validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacionhemofila.formatofecha(_this.fechaMaores60) && validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacionhemofila.formatofecha(_this.fechaMaores9)) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_17,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
            }

            //validacion campo 17 con campo 11
            if (camposFila.CAMPO_17 == '55' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_11,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion campo 17 con cumplimiento de campo 8
            if (camposFila.CAMPO_17 <= '2' && camposFila.CAMPO_8 == 'F') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_8,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion campo 18 con cumplimiento campo 7
            if (camposFila.CAMPO_18 == '3') {
                if (validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacionhemofila.formatofecha(_this.fehaMayorEdad) || validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacionhemofila.formatofecha(_this.fechaMayores70)) {
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
                    };
                }
            }

            //validacion campo 18 con cumplimiento campo 11
            if (camposFila.CAMPO_18 == '55' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion campo 19 con cumplimiento camopo 64 y campo 21 
            if (camposFila.CAMPO_19 == '5555') {
                if (camposFila.CAMPO_64 == '11' && validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1846-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                } else {
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
            }

            ////validacion campo 19 con cumplimiento camopo 21
            if (camposFila.CAMPO_19 == '9998' && validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1811-01-01')) {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_21,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }
            //validacion campo 20 con cumplimiento del campo 64
            if (camposFila.CAMPO_20 == '55' && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }
            //validacion campo 21 con cumplimiento 64 diferente a 2 
            if (validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1811-01-01') && camposFila.CAMPO_64 != '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion campo 21 con cumplimiento 64 diferente a 2 
            if (validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1800-01-01') && camposFila.CAMPO_64 != '2') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }


            if (validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
                arrayCamposBuenos.push(camposFila);
            } else {
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }
            //validacion fila 229 a 234
            if (validacionhemofila.formatofecha(camposFila.CAMPO_21) >= validacionhemofila.formatofecha(camposFila.CAMPO_7)) {
                if (camposFila.CAMPO_19 < 100 && validacionhemofila.formatofecha(camposFila.CAMPO_21) <= validacionhemofila.formatofecha(camposFila.CAMPO_66) || validacionhemofila.formatofecha(camposFila.CAMPO_21) >= validacionhemofila.formatofecha(camposFila.CAMPO_7) || validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1800-01-01') || validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1811-01-01') || validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacionhemofila.formatofecha('1846-01-01')) {
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
                    };
                }
            }
            // validacion fila 236 
            if (camposFila.CAMPO_22 == '99' && camposFila.CAMPO_64 != '2') {
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
                };
            }
            // validacion fila 238
            if (camposFila.CAMPO_23 == '1' && camposFila.CAMPO_24 <= '2') {
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
                };
            }
            //validacion fila  239 y 240 
            if (camposFila.CAMPO_23 == '3') {
                if (camposFila.CAMPO_24 >= '3' && camposFila.CAMPO_24 <= '6') {
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
                    };
                }
            }

            //validacion fila 241
            if (camposFila.CAMPO_23 == '2' && camposFila.CAMPO_26 != '1') {
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
                };
            }
            //validacion fila 242 hasta 258
            if (camposFila.CAMPO_23 == '2') {
                if (camposFila.CAMPO_8 == 'F' && camposFila.CAMPO_40 == '0' && camposFila.CAMPO_40_1 == '0' && camposFila.CAMPO_40_2 == '0' && camposFila.CAMPO_42 == '0' && camposFila.CAMPO_43 == '0' && camposFila.CAMPO_44 == '0' && camposFila.CAMPO_45 == 0 && camposFila.CAMPO_46 == '0' && camposFila.CAMPO_47_1 == 0 && camposFila.CAMPO_47_2 == 0 && camposFila.CAMPO_47_3 == 0 && camposFila.CAMPO_49 == '0' && camposFila.CAMPO_49_1 == '0' || camposFila.CAMPO_24 == '7' || camposFila.CAMPO_49 == '9999') {
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
                    };
                }
            }

            //validacion fila 260
            if (camposFila.CAMPO_23 >= '4' && camposFila.CAMPO_24 == '9999') {
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
                };
            }
            //validacion fila 261 y 262
            if (camposFila.CAMPO_23 >= 2) {
                if (camposFila.CAMPO_25 == '9999' || camposFila.CAMPO_25 == '55555') {
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
                    };
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
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
            }

            //validacion fila 266
            if (camposFila.CAMPO_23 > '3' && camposFila.CAMPO_49 == '9999') {
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
                };
            }

            //validacion fila 268 hasta 271
            if (camposFila.CAMPO_24 == '1') {
                if (camposFila.CAMPO_25 >= '1' && camposFila.CAMPO_25 < '5' || camposFila.CAMPO_25 == '5555' || camposFila.CAMPO_25 == '3333') {
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
                    };
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
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
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
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
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
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
            }

            //validacion fila 280
            if (camposFila.CAMPO_24 == '7' && camposFila.CAMPO_23 == '2') {
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
                };
            }

            //validacion fila 282
            if(camposFila.CAMPO_25 == '5555' && camposFila.CAMPO_64 == '11'){
                arrayCamposBuenos.push(camposFila);
            }else{
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion fila 287
            if(camposFila.CAMPO_25 <= '40' && camposFila.CAMPO_23 <= '1'){
                arrayCamposBuenos.push(camposFila);
            }else{
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion fila 288
            if(camposFila.CAMPO_25 == '9999' && camposFila.CAMPO_23 >= '2'){
                arrayCamposBuenos.push(camposFila);
            }else{
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }
            //validacion fila 290
            if(camposFila.CAMPO_26 == '5555' && camposFila.CAMPO_64 == '11'){
                arrayCamposBuenos.push(camposFila);
            }else{
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion fila 294
            if(camposFila.CAMPO_27 == '5555' && camposFila.CAMPO_64 == '11'){
                arrayCamposBuenos.push(camposFila);
            }else{
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion fila 298 hasta 300
            if(camposFila.CAMPO_27 =='1'){
                if(camposFila.CAMPO_23 == '1' || camposFila.CAMPO_23 == '2' || camposFila.CAMPO_23 >= '2'){
                    arrayCamposBuenos.push(camposFila);
                }else{
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
            }

            //validacion fila 301
            if(camposFila.CAMPO_27 == '10' && camposFila.CAMPO_23 <= '1'){
                arrayCamposBuenos.push(camposFila);
            }else{
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }

            //validacion fila 302
            if(camposFila.CAMPO_27 == '6' && camposFila.CAMPO_23 == '3'){
                arrayCamposBuenos.push(camposFila);
            }else{
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }
            //validacion fila 303 y 304
            if(camposFila.CAMPO_27 == '9999'){
                if(camposFila.CAMPO_23 > 3 && camposFila.CAMPO_28 == '9999'){
                    arrayCamposBuenos.push(camposFila);
                }else{
                    var hemofilia: Hemofiliaerror = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
            }
            //validacion campo 306
            if(camposFila.CAMPO_28 == '5555' && camposFila.CAMPO_64 == '11'){
                arrayCamposBuenos.push(camposFila);
            }else{
                var hemofilia: Hemofiliaerror = {
                    //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                    TIPO_ERROR: 'CD',
                    DESCRIPCION_ERROR: 'Tipo de dato no valido',
                    USUARIO_CREACION: '',
                    USUARIO_MODIFICACION: '',
                    VALOR_ANTERIOR: '',
                    VALOR_NUEVO: '',
                    NUMERO_REGISTRO: numFila
                };
            }
        }
    }
}

export default ValidacionContenidoPH;