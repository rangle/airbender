The raw text of De Finibus articles is stored in individual text files under
/text/. The metadata is provided in "articles-template.json".

articles.json is a generated JSON file in the appropriate format for loading
into the database using Koast tools.

To generate articles.json, run this command in the `de-finibus` folder:

```bash
  node data/make-articles.js > data/articles.js
```

You can then load articles into the database by running this command in the
Airbender root folder.:

```bash
  koast load --col=articles --src=sample-apps/de-finibus/data/articles.js
```
