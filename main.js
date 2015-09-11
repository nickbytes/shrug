var menubar = require('menubar')
var clipboard = require('clipboard')

var mb = menubar({
  width: 200,
  height: 200
})

mb.on('ready', function ready () {
  console.log('app is ready')

  clipboard.writeText('¯\\_(ツ)_/¯');
})
