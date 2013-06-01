/*
 * grunt-contrib-jasmine-node
 * https://github.com/tsakuma/grunt-contrib-jasmine-node
 *
 * Copyright (c) 2013 Tomotaka Sakuma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var addOption = function (options, optionName) {
    var value = grunt.config('jasmine-node.options.' + optionName),
      argumentName = "--" + optionName;

    if (value) {
      if (value === true) {
        options.push(argumentName);
      } else {
        options.push(argumentName, value);
      }
    }
  },
  addOptionsList = function (list) {
    var i = 0, 
      l = list.length,
      result = [];

    for (i = 0; i < l; i += 1) {

      addOption(result, list[i]);
    }

    return result;
  };

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('jasmine-node', '', function() {
    grunt.config.requires('jasmine-node.run.spec');

    var options = addOptionsList([
      'coffee',
      'color',
      'noColor',
      'verbose',
      'match',
      'matchall',
      'junitreport',
      'output',
      'runWithRequireJs',
      'requireJsSetup',
      'nohelpers',
      'forceexit',
      'test-dir',
      'captureExceptions',
      'config',
      'noStack'
    ]);

    options.push(grunt.config('jasmine-node.run.spec'));

    var env = {};
    var _env = grunt.config('jasmine-node.env');
    for (var i in process.env) { env[i] = process.env[i]; }
    for (var i in _env) { env[i] = _env[i]; }

    var spawn = require("child_process").spawn;

    var done = this.async();

    var platform = require("os").platform();
    var executable = grunt.config('jasmine-node.executable') || "jasmine-node";

    if (platform === "win32") {
        executable += ".cmd";
    }

    var cmd = spawn(executable, options, {env:env});
    var write = function(data) { process.stdout.write(data.toString()); };
    cmd.stdout.on('data', write);
    cmd.stderr.on('data', write);
    cmd.on('exit', function(code) { done(code == 0); });
  });

};
