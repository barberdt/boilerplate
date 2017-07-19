# Boilerplate

***

## Installation

- Clone this repository

```
$ cd path/to/repository
$ yarn
```

## Usage

```
$ yarn run dev
```

## What's Included

### Client

#### View Library

[React]()

The views for this boilerplate application are rendered using React. React is one of many flavors in a growing trend of "purely functional" component libraries.

#### View Routing

[React Router]()

Client side routing for navigation (in addition to server side rendering of a given route) is done using React Router. React Router is a set of components and tools to be used with the React view library for these purposes.

#### Application State

[Flux]()
[Redux]()

In coordination with the growing trend of purely functional component libraries, the Flux application state architecture has proven itself to be minimal yet robust in its ability to manage the state of your application. While Flux is simply a "standard" or "paradigm" of sorts, there are many Flux "implementations" out there. Of these implementations, Redux is without a doubt the most popular. It has achieved this popularity through its simplicity, minimal size, and an incredible set of documentation and tutorials, primarily lead by its original creator.

#### Styles

[Aphrodite]()
[react-with-styles]()

This boilerplate application makes use of a popular trend referred to as "CSS in JS". The core principal of CSS in JS is that instead of writing your view's styles in traditional CSS or even a CSS preprocessor (like Sass or Less), you define them using JSON objects. These JSON objects are then leveraged by the tool of choice (Aphrodite with react-with-styles in this case) to apply styles to your view's components (React in this case).

Note that `normalize.css` is also included and rendered as a traditional `<link>`.

#### HTTP

[Fetch API]()

Along with the use of a polyfill for unsupportive browsers, this boilerplate application makes use of the Fetch API for performing HTTP requests to the server.

#### Bundling/Transpiling

[Webpack]()
[react-hot-loader]()
[Babel]()

Webpack is used as the bundling tool for this application and includes the use of react-hot-loader. Along with Webpack's support for "hot module replacement", react-hot-loader allows the application's React components to live re-render after changes have been made during development.

In addition to using Webpack, Babel is also used to transpile the source code from ES2015+ to cross-browser supported JavaScript.

#### Linting

[ESLint]()

Linting your JavaScript as it is written has become one of the most powerful tools for preventing runtime errors, inconsistent syntax, and extraneous code. ESLint is one of the most popular linting tools and is the one that has been chosen for this application. Be sure to investigate your text editor of choice's support for an ESLint plugin.

### Server

#### HTTP Server/General Framework

[Express]()

Express is a tried and true NodeJS framework for building lightweight HTTP-based applications. It is especially handy for those well versed in JavaScript.

#### View Rendering

This boilerplate application makes use of ReactDOM's built-in support for rendering a given application's React tree to a string. This string can then be templated (using native JavaScript string interpolation) into the base `<html>` and `<body>` of a traditional text/html response. The tools chosen for view routing, application state, and styles (documented above) all have out-of-the-box support for server rendering as well. This architecture lets you truly write your application isomorphically (sharing your JS between client and server).

#### Dev

[Nodemon]()

Nodemon is a great tool for running a particular NodeJS application in watch mode, allowing the server to automatically restart upon file changes.
