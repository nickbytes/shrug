var menubar = require('menubar')
var clipboard = require('clipboard')

var mb = menubar({
  width: 200,
  height: 100
})

mb.on('show', function ready () {
  clipboard.writeText('¯\\_(ツ)_/¯');
})
