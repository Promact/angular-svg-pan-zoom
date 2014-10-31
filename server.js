/* jshint undef: true, unused: true */
/* jshint strict: true */
/* jslint vars: true */
/* global require, __dirname, console */

var connect = require("connect");
var serveStatic = require("serve-static");

connect().use(serveStatic(__dirname)).listen(8080);

console.log("NodeJS running on http://localhost:8080");