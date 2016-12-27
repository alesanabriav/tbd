'use strict';
import jwt from 'jsonwebtoken';
import config from '../config';
const secret = config.secret;

export default function() {
  return {
    login(req, res) {
      let user = req.body.user ? req.body.user : null;
      let password = req.body.password ? req.body.password : null;

      let userRequired = 'taller84_db';
      let passwordRequired = 'tall3r_mercadeo=84';

      if(userRequired == user && passwordRequired == password) {
        var token = jwt.sign({admin: true}, secret);
        return res.json({success: true, 'token': token});
      }

      return res.status(401).json({success: false, message: 'usuario o contraseña incorrecto'});

    }
  }

}
