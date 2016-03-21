'use strict'

const test = require('tape')
const analayse = require('../')
const path = require('path')
const pkg = require('../package.json')

test('librarian cli', (t) => {
  analayse(__dirname + '/..', (err, data) => {
    if (err) return t.end(err)
    t.equal(data.directory.path, path.resolve(__dirname, '..'), 'shows correct directory path')
    t.equal(data.manifests[0].platform, 'NPM', 'detects npm as the platform for this project')
    t.equal(data.manifests[0].filepath, 'package.json', 'detects package.json for this project')
    let depCount = Object.keys(pkg.dependencies).length + Object.keys(pkg.devDependencies).length
    t.equal(data.manifests[0].dependencies.length, depCount, 'picks up the correct number of dependencies')
    t.end()
  })
})
