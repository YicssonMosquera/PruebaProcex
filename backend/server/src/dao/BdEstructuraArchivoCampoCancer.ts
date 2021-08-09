import pool from '../database'

class BdEstructuraArchivoCampoCancer {
    public static buscarTodos() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from bd_estructura_archivo_campo_cancer", function (err, result, fields) {
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


export default BdEstructuraArchivoCampoCancer;