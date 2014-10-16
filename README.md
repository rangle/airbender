Airbender is a framework for building a CMS-style AngularJS application using
just a simple static web server.

Airbender provides you with the following:

* Backend services such as database access and authentication.
* AngularJS components (directives, services, and controllers) from which you
  assemble your application.

Those elements are provided in the form of software-as-a-service.

As an application developer, you only need a simple static web server, where
you place the following elements:

* HTML templates.
* CSS.
* Image assets, etc.

You should not need to write JavaScript, unless you want to add custom
directives, services or controller.

As an application developer, you do _not_ need to run the Airbender server
contained in this repository. If you want to spin up your own instance,
however, you can.

## An Airbender App

An Airbender app is a specific application, such as a blog. It is _not_ served
by the Airbender server. Rather, you should put it on your own server, which
can be any static web server. In development, we recommend using NodeJS's
"http-server" for that. But again, any server will do.

See "sample-apps" for examples of apps.

## The Airbender Server

Airbender's server-side provides frontend components (currently served as
static assets) and a REST API that serves the data.

See "client" for the front-end components and "server" for the server-side
code, including the API definitions.

Airbender server is based on [Koast](https://github.com/rangle/koast).

