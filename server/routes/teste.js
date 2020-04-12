
exports.teste = function(req, res) {
  //res.render('view/nomeDoHTML');
  res.status(200).send({ auth: true, message: 'Token Autenticado' });
}
