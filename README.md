There are two main parts to this app: the service (in the "service" directory)
and developer's own app (in "myApp" directory). Those would normally be
running on two different servers.

# The Service

The service provides resources that would normally be accessed as SAAS. This
includes much of the front-end JavaScript, as well as back-end services such
as database access, authentication, etc.

A developer can go ahead and run their own instance of the service, but the
main case we are shooting for is many developer apps using the same service.

See "service" directory for details.

# The App

The app is a specific application, such as a blog. This would normally be
served from a different server than the service. A simple app can consist just
of HTML and CSS.

See "myApp" directory for details.
