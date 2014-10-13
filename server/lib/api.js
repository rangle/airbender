var koast = require('koast');
var mapper = koast.mongoMapper.makeMapper();

var defaults = {
  authorization: function(req,res) {
    return true;
  }
};
var routes = [{
  method: ['get'],
  route: 'articles/:slug',
  handler: mapper.get({
    model: 'articles'
  })
}];

exports.koastModule = {
  defaults: defaults,
  router: koast.koastRouter(routes,defaults)  
}