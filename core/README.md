# Node Konfig

> Thanks to [Konfig](https://github.com/lalamove/konfig) for the inspiration. This library would not have been possible without it.

Documentation is available at [https://willsoto.github.io/node-konfig/](https://willsoto.github.io/node-konfig/)

## Installation

```bash
npm install @willsoto/node-konfig-core
```

```bash
yarn add @willsoto/node-konfig-core
```

```bash
pnpm add @willsoto/node-konfig-core
```

## Quick look

```jsonc
// configs/development.json
{
  "name": "my-app",
  "database": {
    "host": "localhost",
    "port": 5432
  }
}
```

```javascript
import * as Konfig from "@willsoto/node-konfig-core";
import path from "node:path";

// Create the store, this is the object you will use to access your config
export const store = new Konfig.Store();

// This will load configuration from the specified files. A parser must be provided
// so the loader knows how to interpret the file.
// Files are loaded in order, so any conflicts will be resolved through a "last one wins" approach.
// In this case, `local.json` will override properties that exist in both configurations.
const loader = new Konfig.FileLoader({
  files: [
    {
      path: path.join(process.cwd(), "configs", "development.json"),
      // This will tell the loader how it should interpret the files it loads
      parser: parser,
    },
    {
      path: path.join(process.cwd(), "configs", "local.json"),
      // This will tell the loader how it should interpret the files it loads
      parser: parser,
    },
  ],
});

// Make sure the loader is registered on the store in order for it to be processed.
store.registerLoader(loader);

// `init` must be called in order to actually resolve and process all the registered loaders
// This only needs to be called once at some point during application startup.
await store.init();

const databaseConfig = store.get("database");

console.log(databaseConfig);
// {
//   "host": "localhost",
//   "port": 5432
// }
```
