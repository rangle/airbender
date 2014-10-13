'use strict';

var gulp = require('gulp');
var rg = require('rangle-gulp');

rg.setLogLevel('info');

gulp.task('mocha', rg.mocha({
  files: 'lib/**/*.test.js',
  reporter: 'nyan'
}));

gulp.task('lint', rg.jshint({
  files: [
    'lib/**/*.js',
    'index.js'
  ]
}));

gulp.task('beautify', rg.beautify({
  files: []
}));

gulp.task('concat', rg.concatAndUglify({
  files: 'client/app/**/*.js',
  name: 'airbender-all',
  dist: 'client/dist/'
}));

gulp.task('default', ['lint', 'mocha']);
