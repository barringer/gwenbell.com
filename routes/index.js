
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Gwen Bell • Technical Writing & Web Debauchery' });
};

exports.about = function(req, res){
	res.render('about', { title: 'About Gwen Bell'});
};

exports.responses = function(req, res){
res.render('responses', { title: 'Reader Responses'});
};

exports.writing = function(req, res){
res.render('writing', { title: 'Writing'});
};

exports.motherlessdaughters = function(req, res){
res.render('motherlessdaughters', { title: 'Motherless Daughters'});
};