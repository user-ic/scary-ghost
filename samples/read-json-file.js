var fs = require('fs');
var casper = require('casper').create();

casper.echo(fs.read('manifest.json'));

casper.exit();


