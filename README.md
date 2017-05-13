# node-root.pddivine
Easy, lightweight determiner of the project root full path to be dropped into any node module.

## TLDR;

```javascript
const root = require('node-root.pddivine') // /path/to/node/application/root/directory

const yourModule = require(`${root}/relative/path/to/yourModule`); // Success!
```

## How It Works

At runtime node creates a registry of the full paths of all loaded files. The modules are loaded first, and thus at the top of this registry. By selecting the first element of the registry and returning the path before the 'node_modules' directory we are able to determine the root of the application.

The entirety of the code is as follows:

```javascript
module.exports = process.mainModule.paths[0].split('node_modules')[0].slice(0, -1); // /path/to/node/application/root/directory
```

## Other Notes
* This will work even if there are no node modules. ( But if you use this library you will have at least one ;) )
* This will work with test frameworks, like Mocha.

## Concluding Remarks
Enjoy!
