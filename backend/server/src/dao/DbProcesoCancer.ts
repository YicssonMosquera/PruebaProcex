import pool from '../database'

class DbProcesoCancer {
    public static guardar(body, cb) {
        try {
            pool.query('insert into bd_proceso_cancer set ?', body, function (err, result, fields) {
                if (err) throw err;
                cb(result);

            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }


    public static buscarPorId(id, cb) {
        try {
            pool.query('select * from bd_proceso_cancer where ID_PROCESO_CANCER = ? ', [id], function (err, result, fields) {
                if (err) throw err;
                cb(result);

            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static actualizar(body, ID_PROCESO_CANCER, cb) {
        try {
            pool.query('update bd_proceso_cancer set ? where ID_PROCESO_CANCER = ? ', [body, ID_PROCESO_CANCER], function (err, result, fields) {
                if (err) throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public getVigente(userName, nameFile) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ID_PROCESO_CANCER, NOMBRE_ARCHIVO, USUARIO_CREACION  from bd_proceso_cancer where VIGENTE = 'S' and NOMBRE_ARCHIVO = ? and USUARIO_CREACION = ?";
                pool.query(query, [userName,nameFile], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    consultarUltimoArchivoCargado(ID_PROCESO_CANCER){
        return new Promise(function (resolev, reject) {
            try {
                var query = "select * from bd_proceso_cancer where ID_PROCESO_CANCER = ? ";
                pool.query(query, [ID_PROCESO_CANCER], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static actualizarEstado(Estado,ID_PROCESO_CANCER ) {
        try {
            pool.query('update bd_proceso_cancer set VIGENTE = ? where ID_PROCESO_CANCER = ? ', [Estado,ID_PROCESO_CANCER], function (err, result, fields) {
                if (err) throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public getNombreArchivo() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select NOMBRE_ARCHIVO, USUARIO_CREACION  from bd_proceso_cancer where VIGENTE = 'S' ";
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

export default DbProcesoCancer;