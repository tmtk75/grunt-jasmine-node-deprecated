# grunt-contrib-jasmine-node

> plugin for jasmine-node

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-jasmine-node --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-jasmine-node');
```

## The "jasmine-node" task

### Overview
In your project's Gruntfile, add a section named `jasmine-node` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  "jasmine-node": {
    options: {
      coffee: true
    },
    run: {
      spec: "spec"
    },
    env: {
      NODE_PATH: "lib/js"
    },
    executable: './node_modules/.bin/jasmine-node'
  }
})
```

### Options

#### executable
Type: `String`
Default value: `undefined`

Used to specify the jasmine-node executable. If it's not provided, it will fall back to the global installation.

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
```js
grunt.initConfig({
  "jasmine-node": {
    options: {
      coffee: false,
      noStack: false
    },
    run: {
      spec: "spec"
    },
    env: {
      NODE_PATH: undefined
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
