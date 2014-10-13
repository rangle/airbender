Airbender server provides resources for building a CMS-style AngularJS
application using just a static web server. Resources provided by Airbender
include frontend components, as well as back-end services such as database
access and authentication. A specific app would provide templates, CSS, image
assets. It can also optionally provide additional JavaScript to extend
Airbender behavior.

Airbender is intended to be accessed as software-as-a-service. In other words,
an app developer does _not_ need to run the Airbender server. Instead, they
should just serve their own frontend assets using a simple static server.
Consequently, the server is being designed with a goal of supporting many
different apps at the same time. Developers can run their own instance of the
server if they want, however.

## An Airbender App

An Airbender app is a specific application, such as a blog. It is _not_ served
by the Airbender server. Rather, it should live on its own server, which can
be any static web server, such as NodeJS's "http-server".

A simple app can consist just of HTML and CSS. It can optionally use custom
JavaScript.

See "sample-apps" for examples of apps.

## The Airbender Server

Airbender's server-side provides frontend components (currently served as
static assets) and a REST API that serves the data.

See "client" for the front-end components and "server" for the server-side
code, including the API definition.
