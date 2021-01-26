'use strict';

global.$ = {
  g: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  print: require('gulp-print').default,
  path: {
    tasks: require('./gulp/config/tasks.js'),
    serverDir: './app/build/',
    src: {
      html: ['./app/src/*.{html,pug}', './app/src/pages/*.{html,pug}'],
      style: './app/src/scss/*.*',
      js: ['./app/src/scripts/*.js','./app/src/scripts/libs/**/*.js'],
      img: './app/src/images/**/*.{png,jpg,gif,svg}',
      fonts: './app/src/fonts/**/*.*',
    },
    build: {
      html: './app/build/',
      style: './app/build/styles/',
      js: './app/build/scripts/',
      img: './app/build/images/',
      fonts: './app/build/fonts/',
    },
    watch: {
      html: ['./app/src/*.{html,pug}', './app/src/views/**/*.*', './app/src/pages/**/*.*'],
      style: './app/src/scss/**/*.*',
      js: './app/src/scripts/*.js',
      img: './app/src/images/**/*.{png,jpg,gif,svg}',
      fonts: './app/src/fonts/**/*.*',
    }
  }
}

$.path.tasks.forEach(taskPath => require(taskPath)());
$.g.task('default', $.g.series($.g.parallel('html', 'sass', 'scripts', 'img', 'fonts', 'watch', 'server')))
$.g.task('build', $.g.series($.g.parallel('html', 'sass', 'scripts', 'img', 'fonts')))
