# [Librarian CLI](http://libraries.io/npm/librarian-cli)
[![Build Status](https://travis-ci.org/librariesio/librarian-cli.svg?branch=master)](https://travis-ci.org/librariesio/librarian-cli)
[![npm version](https://badge.fury.io/js/librarian-cli.svg)](http://badge.fury.io/js/librarian-cli)
[![Dependency Status](https://david-dm.org/librariesio/librarian-cli.svg?theme=shields.io)](https://david-dm.org/librariesio/librarian-cli)
[![devDependency Status](https://david-dm.org/librariesio/librarian-cli/dev-status.svg?theme=shields.io)](https://david-dm.org/librariesio/librarian-cli#info=devDependencies)
[![Gitter chat](http://img.shields.io/badge/gitter-librariesio/support-brightgreen.svg)](https://gitter.im/librariesio/support)

File based dependency manifest parsing for [Libraries.io](https://libraries.io)

## Install

```bash
npm install -g librarian-cli
```

## Usage

### CLI

```
  librarian [flags] [directory]

  Analyse a project for dependencies.

  Options:

    --pretty for readable json

  Directory defaults to the current directory. Relative
  paths are resolved against the current directory.
```

### Javascript API

```javascript
var analyse = require('librarian-cli')
analyse('/path/to/thing', (err, data) => {})
```

## Development

Source hosted at [GitHub](http://github.com/librariesio/librarian-cli).
Report Issues/Feature requests on [GitHub Issues](http://github.com/librariesio/librarian-cli/issues).

### Note on Patches/Pull Requests

 * Fork the project.
 * Make your feature addition or bug fix.
 * Add tests for it. This is important so I don't break it in a future version unintentionally.
 * Send me a pull request. Bonus points for topic branches.

## License

Copyright (c) 2016 Ben Gourley, Licensed under GNU Affero General Public License. See [LICENSE](https://github.com/librariesio/librarian-cli/blob/master/LICENSE.txt) for details.
