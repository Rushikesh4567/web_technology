# Angular.js

it is a typescript framework which is developed by google.
it helps us to build a single page application. (SPA)

1. what is spa?
=> where the page does not fully reload when navigation between different views.z

tools which we use for angular to install :

1. node js
2. npm (node package manager)
3. Angular CLI (command line interface)

CLI - used for creating and managing angular apps.

# list packages: 
Includes dependencies and dev dependencies

dependencies: for production
devdependencies : only for local development.

angular.js file = > project configuration file
global css => for styling

.gitignore => ignores files and folder to execute from version control.
tsconfig.json => typescript configuration file 
index.html=> main file which runs first
main html file loads angular.

app.config.ts => app configuration file
we can add environment

main.ts => entry point of application.
component : it is a component based ui block or ui structure.

when we create one comoponent using command:

syntax=> ng generate component component-name
shortcut => ng g c component-name

then 4 files are created:
html, css ,ts, spec.ts(testing file)

# Data Binding:
Connect ui to code.
types of data binding:
1. one way data binding
    a) Interpolation
    b)property binding
    c)Event binding
2. two way data binding

1. one way:

show data from ts in html.

