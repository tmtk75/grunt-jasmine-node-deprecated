/*
 * grunt-contrib-jasmine-node
 * https://github.com/tsakuma/grunt-contrib-jasmine-node
 *
 * Copyright (c) 2013 Tomotaka Sakuma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('jasmine-node', '', function() {
    grunt.config.requires('jasmine-node.run.spec');

    var options = [];
    if (grunt.config('jasmine-node.options.coffee')) {
      options.push("--coffee");
    }

    options.push(grunt.config('jasmine-node.run.spec'));

    var env = {}
    var _env = grunt.config('jasmine-node.env')
    for (var i in process.env) { env[i] = process.env[i]; }
    for (var i in _env) { env[i] = _env[i]; }

    var spawn = require("child_process").spawn;

    var done = this.async();
    var cmd = spawn("jasmine-node", options, {env:env});
    var write = function(data) { process.stdout.write(data.toString()); }
    cmd.stdout.on('data', write);
    cmd.stderr.on('data', write);
    cmd.on('exit', function(code) { done(code == 0); });
  });

};
