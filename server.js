const express = require('express'),
bodyParser = require('body-parser'),
app = express();

/* Configuração de body */
	app.use(bodyParser.json());
	app.use(logErrors);
	app.use(clientErrorHandler);
	app.use(errorHandler);

	function errorHandler(err, req, res, next) {
	  res.status(500);
	  res.render('error', { error: err });
	}
	function clientErrorHandler(err, req, res, next) {
	  if (req.xhr) {
	    res.status(500).send({ error: 'Something failed!' });
	  } else {
	    next(err);
	  }
	}
	function logErrors(err, req, res, next) {
	  console.error(err.stack);
	  next(err);
	}
/* Fim Configuração de body */

const server = require('http').createServer(app);

/* Configuração de porta express */
	// Subindo server em porta desejada
	app.listen(process.env.PORT || 3000, function(){
		console.log('Server Started On Port 3000');
	});
/* Fim Condiguração de porta express */

/* Chamada das rotas REST da aplicação */
	require('./server/routes')(app);
/* Fim Chamada das rotas REST da aplicação */
