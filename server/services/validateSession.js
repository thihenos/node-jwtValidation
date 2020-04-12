/*
  Descrição: Script criado para decriptografar o token enviado no header
 */

"use strict";

let jwt = require('jsonwebtoken');

exports.IsAuthenticated = function(req, res, next) {
    let jwt = require('jsonwebtoken');

    let token = req.headers['token'];

    if (!token) return res.status(401).send({ auth: false, grant: false , message: 'Sem Token, por favor, autenticar-se!' });

    jwt.verify(token, 'MeuTokenJWT', function(err, decoded) {
      console.log(decoded);
      if (err) return res.status(401).send({ auth: false, grant: false , message: 'Falha ao autenticar o Token' });
      // se tudo estiver ok, prosseguir para proxima function
      next();
    });
};
