'use strict'

module.exports = analayse

const parsers = require('librarian-parsers')
const fs = require('fs')
const path = require('path')
const async = require('async')
const isPromise = require('is-promise')

function analayse(dir, cb) {

  dir = path.resolve(dir)

  fs.readdir(dir, (err, files) => {

    if (err) return cb(err)

    getManifests(files, (err, manifests) => {
      if (err) return cb(err)
      let metadata = getMeta(files)
        , directory = { path: dir }
      cb(null, { directory, manifests, metadata })
    })

  })

  function getMeta(files) {
    return files.reduce((accum, path) => {
      if (path.match(/^README/i)) accum['readme'] = path
      if (path.match(/^CHANGELOG/i)) accum['changelog'] = path
      if (path.match(/^CONTRIBUTING/i)) accum['contributing'] = path
      if (path.match(/^LICENSE/i)) accum['license'] = path
      if (path.match(/^CODE[-_]OF[-_]CONDUCT/i)) accum['codeofconduct'] = path
      if (path.match(/^THREAT[-_]MODEL/i)) accum['threatmodel'] = path
      if (path.match(/^AUDIT/i)) accum['audit'] = path
      return accum
    }, {})
  }

  function getManifests(files, cb) {
    async.map(files, (filepath, cb) => {
      let platform = parsers.findPlatform(filepath)
      if (!platform) return cb(null, null)
      fs.readFile(path.resolve(dir, filepath), (err, data) => {
        if (err) return cb(err)
        let parsed = platform.parser(data)
        if (isPromise(parsed)) {
          parsed.then((dependencies) => {
            let manifest =
              { platform: platform.name
              , type: platform.type
              , filepath: filepath
              , dependencies: dependencies
              }
            cb(null, manifest)
          }).catch(cb)
        } else {
          let manifest =
            { platform: platform.name
            , type: platform.type
            , filepath: filepath
            , dependencies: parsed
            }
          cb(null, manifest)
        }

      })
    }, (err, manifests) => {
      if (err) return cb(err)
      cb(null, manifests.filter(Boolean))
    })
  }

}
