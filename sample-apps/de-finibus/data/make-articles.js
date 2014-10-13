
var fs = require('fs');

var articlesAsJson = fs.readFileSync('data/articles-template.json');
var articles = JSON.parse(articlesAsJson);

articles.forEach(function(article) {
  var path = 'data/text/' + article.slug + '.txt';
  article.app = 'de-finibus';
  article.content = fs.readFileSync(path).toString();
});

articlesAsJson = JSON.stringify(articles, null, 2);
console.log(articlesAsJson);
