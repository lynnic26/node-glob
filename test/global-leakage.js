if (require.main === module)
  return console.log('ok')

var before = Object.keys(global).sort().join(':')
var assert = require('assert')
var glob = require('../')

process.on('exit', function() {
  delete global.TAP_Global_Harness
  var after = Object.keys(global).sort().join(':')
  if (after !== before) {
    console.log('- ' + before)
    console.log('+ ' + after)
  }
  assert.equal(before, after)
})
