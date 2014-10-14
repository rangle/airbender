var koast = require('koast');
var mapper = koast.mongoMapper.makeMapper();

function getAppKey(req) {
  // Hardcoding until we can handle async query decorators.
  var apps = {
    'definibus.airbender.dev:9000' : {
      'appKey': 'definibus'
    }
  };
  var app = apps[req.headers.host];
  if (app) {
    return app.appKey;
  }
}

var defaults = {
  authorization: function(req, res) {
    return !!getAppKey(req);
  }
};

var routes = [{
  method: ['get'],
  route: 'articles/:slug',
  handler: mapper.get({
    model: 'articles',
    queryDecorator: function(query, req, res) {
      query.appKey = getAppKey(req);
    }
  })
}];

exports.koastModule = {
  defaults: defaults,
  router: koast.koastRouter(routes,defaults)  
}