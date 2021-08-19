import pool from '../database'

class BdEstructuraArchivoCampoErc {
    public static buscarTodos() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from bd_estructura_archivo_campo_erc", function (err, result, fields) {
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


export default BdEstructuraArchivoCampoErc;