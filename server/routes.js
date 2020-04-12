'use strict';

module.exports = function (app,redisClient) {

	/* Chamadas REST */

		let validation = require('./services/validateSession'); //Validação de Token
		let rotaTeste = require('./routes/teste'); //Validação de Token

		app.post('/api/setQueue',validation.IsAuthenticated, rotaTeste.Teste);

	/* Fim Chamada REST */

	//Se o usuário digitar qualquer rota REST que nao esteja cadastrada aqui, ele será direcionado para a tela de login
	app.route('/*').get(function (req, res) {
	  res.status(401).send({message : 'Eita! Não autorizado!', grant : false});
	});


};
