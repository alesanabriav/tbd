'use strict';
import jwt from 'jsonwebtoken';
import config from '../config';
const secret = config.secret;

export default function(req, res, next) {
    var method = req.method;
    var url = req.method;
    var user = {};
    var token = req.headers['x-access-token'] || req.query.token;

    if(token) {
      var verify = jwt.verify(token, secret, (err, decoded) => {
        if(err) return res.status(401).json({'message': err});
          user = decoded;
          req.decoded = user;

          // if(!user.confirmed) return res.status(401).json({'message': 'Not authorized'});

          if(!user.admin && method == "GET" || method == "PUT") return next();

          if(user.admin) return next();

          return res.status(401).json({'message': 'Not authorized'});
      });
    } else {
      return res.status(401).json({'message': 'token not found'})
    }
}
