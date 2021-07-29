import pool from '../database'
class CAC_Artritis {
   public static guardarDatos(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into cuenta_artritis set ?', newDatos, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public consultarDatos(page, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT C.C8_CAMPO_9, C.C3_CAMPO_4, C.C4_CAMPO_5, C.C5_CAMPO_6, C.C6_CAMPO_7, C.C7_CAMPO_8, C.C8_CAMPO_9, C.C9_CAMPO_10, C.C10_CAMPO_11  ";
                query += "FROM cuenta_artritis C  where C.C3_CAMPO_4 LIKE '%" + primerNombre + "%' and C.C5_CAMPO_6 LIKE '%" + primerApellido + "%'  and C.C7_CAMPO_8 LIKE '%" + TipoIdentificaion + "%'  and C.C8_CAMPO_9 LIKE '%" + NoIdentificacion + "%' limit ?,? " 
                pool.query(query, [page, row], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                  
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select count(0) as numero_registro from cuenta_artritis ";
                pool.query(query, function (err, result, fields) {
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

export default CAC_Artritis;