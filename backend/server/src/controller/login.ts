import { Request, Response, json, request } from 'express';
import pool from '../database';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'


class Logincontrollers{
    public async Login(req: Request, res: Response) {
        let { PKUsuario, password } = req.body
        let JWT_Secret = 'procex';
        try {
          
            var query = "SELECT * FROM tblusuario WHERE PKUsuario = ? "
            let usuario = await pool.query(query, [PKUsuario ], function (err, result, fields) {
                if (result.length > 0) {
                    console.log(password)
                    let match =  bcrypt.compare(PKUsuario, result[0].password);
                    if (match) {
                        usuario = result[0];
                        delete result.password;
                        var token = jwt.sign(JSON.stringify(result), JWT_Secret);
                        res.json({ signedUser: result, token: token });
                        
                        
                    }
                    else {
                        res.status(404).json({ text: "Contraseña no valida" });
                    }
                }
               
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron obtener Datos' });
        };
    }


}
export const  logincontrollers = new Logincontrollers();