import pool from "../database";

class bd_opciones_listasCANCER {
    public static cancer5() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C4_CAMPO_5'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cancer8() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C7_CAMPO_8'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer10() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C9_CAMPO_10'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer12() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C11_CAMPO_12'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer13() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C12_CAMPO_13'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer21() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C20_CAMPO_21'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer22() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C21_CAMPO_22'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer25() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from bd_ips", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer27() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C26_CAMPO_27'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer28() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C27_CAMPO_28'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer31() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C30_CAMPO_31'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer33() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C32_CAMPO_33'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer34() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C33_CAMPO_34'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer36() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C35_CAMPO_36' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer37() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C36_CAMPO_37' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer38() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C37_CAMPO_38' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer40() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C39_CAMPO_40' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer41() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C40_CAMPO_41' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer42() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C41_CAMPO_42' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer44() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C43_CAMPO_44' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer45() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C44_CAMPO_45' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer46() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C45_CAMPO_46' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer46_1() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C46_CAMPO_46_1' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer46_2() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C47_CAMPO_46_2' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer46_3() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C48_CAMPO_46_3' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer46_4() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C49_CAMPO_46_4' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer46_5() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C50_CAMPO_46_5' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer46_6() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C51_CAMPO_46_6' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer46_7() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C52_CAMPO_46_7' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer46_8() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C53_CAMPO_46_8' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer47() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C54_CAMPO_47' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer48() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C55_CAMPO_48' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer50() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C57_CAMPO_50' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer51() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C58_CAMPO_51' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer52() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C59_CAMPO_52' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C60_CAMPO_53' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53_1() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C61_CAMPO_53_1' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53_2() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C62_CAMPO_53_2' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53_3() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C63_CAMPO_53_3' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53_4() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C64_CAMPO_53_4' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53_5() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C65_CAMPO_53_5' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53_6() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C66_CAMPO_53_6' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53_7() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C67_CAMPO_53_7' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53_8() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C68_CAMPO_53_8' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer53_9() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C69_CAMPO_53_9' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer54() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C70_CAMPO_54' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer55() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C71_CAMPO_55' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer56() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C72_CAMPO_56' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer57() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C73_CAMPO_57' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer59() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C75_CAMPO_59' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer60() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C76_CAMPO_60' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer61() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C77_CAMPO_61' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer63() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C79_CAMPO_63' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer64() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C80_CAMPO_64' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer65() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C81_CAMPO_65' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C82_CAMPO_66' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66_1() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C83_CAMPO_66_1' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66_2() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C84_CAMPO_66_2' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66_3() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C85_CAMPO_66_3' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66_4() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C86_CAMPO_66_4' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66_5() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C87_CAMPO_66_5' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66_6() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C88_CAMPO_66_6' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66_7() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C89_CAMPO_66_7' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66_8() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C90_CAMPO_66_8' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer66_9() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C91_CAMPO_66_9' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer67() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C92_CAMPO_67' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer68() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C93_CAMPO_68' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer69() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C94_CAMPO_69' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer70() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C95_CAMPO_70' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer72() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C97_CAMPO_72' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer73() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C98_CAMPO_73' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer74() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C99_CAMPO_74' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer75() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C100_CAMPO_75' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer77() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C102_CAMPO_77' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer78() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C103_CAMPO_78' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer79() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C104_CAMPO_79' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer81() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C106_CAMPO_81' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer82() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C107_CAMPO_82' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer83() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C108_CAMPO_83' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer84() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C109_CAMPO_84' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer85() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C110_CAMPO_85' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer86() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C111_CAMPO_86' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer87() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C112_CAMPO_87' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer89() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C114_CAMPO_89' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer90() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C115_CAMPO_90' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer91() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C116_CAMPO_91' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer92() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C117_CAMPO_92' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer93() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C118_CAMPO_93' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer95() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C120_CAMPO_95' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer96() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C121_CAMPO_96' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer98() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C123_CAMPO_98' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer99() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C124_CAMPO_99' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer100() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C125_CAMPO_100' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer101() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C126_CAMPO_101' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer102() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C127_CAMPO_102' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer104() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C129_CAMPO_104' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer105() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C130_CAMPO_105' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer106() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C131_CAMPO_106' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer107() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C132_CAMPO_107' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer108() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C133_CAMPO_108' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer110() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C135_CAMPO_110' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer111() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C136_CAMPO_111' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer113() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C138_CAMPO_113' ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer114() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C139_CAMPO_114'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer114_1() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C140_CAMPO_114_1'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer114_2() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C141_CAMPO_114_2'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer114_3() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C142_CAMPO_114_3'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer114_4() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C143_CAMPO_114_4'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer114_5() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C144_CAMPO_114_5'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer114_6() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C145_CAMPO_114_6'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer116() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C147_CAMPO_116'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer117() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C148_CAMPO_117'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer119() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C150_CAMPO_119'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer120() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C151_CAMPO_120'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer122() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C153_CAMPO_122'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer123() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C154_CAMPO_123'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer124() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C155_CAMPO_124'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer125() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C156_CAMPO_125'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer126() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C157_CAMPO_126'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer127() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C158_CAMPO_127'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer128() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C159_CAMPO_128'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer129() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C160_CAMPO_129'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static cancer132() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C163_CAMPO_132'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

}

export default bd_opciones_listasCANCER;