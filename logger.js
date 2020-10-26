function log() {
  console.log.apply({}, Array.from(arguments))
}

function debug() {
  console.log.apply({}, Array.from(arguments))
}

function error() {
  console.log.apply({}, Array.from(arguments))
}

function warn() {
  console.log.apply({}, Array.from(arguments))
}

module.exports = {
  log, debug, error, warn
}