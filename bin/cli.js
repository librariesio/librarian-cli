#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const dir = path.resolve(process.cwd(), argv._[0] !== undefined ? argv._[0] : '')

if (argv.h || argv.help) return help()

require('../librarian')(dir, (err, data) => {
  if (err) {
    process.stderr.write(err.stack)
    process.stderr.write('\n')
    process.exit(1)
  }
  process.stdout.write(JSON.stringify(data, null, argv.pretty ? 2 : undefined))
  process.stdout.write('\n')
})

function help() {
  console.log(fs.readFileSync(__dirname + '/help.txt', 'utf8'))
}
