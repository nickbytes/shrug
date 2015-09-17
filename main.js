var menubar = require('menubar')
var clipboard = require('clipboard')
var globalShortcut = require('global-shortcut')

var mb = menubar({
  width: 200,
  height: 100
})

mb.on('ready', function ready(){
  var ret = globalShortcut.register('ctrl+alt+\\', function() {
    console.log('ctrl+alt+\\ is pressed');
  })

  if (!ret) {
    console.log('registration failed');
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('ctrl+alt+\\'));
})

// When menubar opens
mb.on('show', function ready () {
  clipboard.writeText('¯\\_(ツ)_/¯');
})

// When menubar application closes
mb.on('will-quit', function ready(){
  // Unregister all shortcuts.
  globalShortcut.unregisterAll();
})
