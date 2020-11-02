# Node Konfig

> Thanks to [Konfig](https://github.com/lalamove/konfig) for the inspiration. This library would not have been possible without it.

- [Installation](#installation)
- [Usage](#usage)
- [Core Loaders](#core-loaders)
- [Core Parsers](#core-parsers)
- [Vault Loader](#vault-loader)

## Installation

```bash
npm install @willsoto/node-konfig-core
```

## Usage

Configuration can be loaded from various sources and merged together to form the final config object
your application will use.

```javascript
import * as Konfig from "@willsoto/node-konfig-core";
import path from "path";

// Create the store, this is the object you will use to access your config
export const store = new Konfig.Store();

// This will tell the loader how it should interpret the files it loads
const parser = new Konfig.JSONParser();

// This will load configuration from the specified files. A parser must be provided
// so the loader knows how to interpret the file.
// Files are loaded in order, so any conflicts will be resolved through a "last one wins" approach.
// In this case, `local.json` will override properties that exist in both configurations.
const loader = new Konfig.FileLoader({
  files: [
    {
      path: path.join(process.cwd(), "configs", "development.json"),
      parser,
    },
    {
      path: path.join(process.cwd(), "configs", "local.json"),
      parser,
    },
  ],
}),

// Make sure the loader is registered on the store in order for it to be processed.
store.registerLoader(loader);

// `init` must be called in order to actually resolve and process all the registered loaders
// This only needs to be called once at some point during application startup.
await store.init();
```

## Core Loaders

- `FileLoader`
- `EnvLoader`
- `FlagLoader`

## Core Parsers

- `JSONParser`

## Vault Loader

Loads configuration from Vault

```bash
npm install @willsoto/node-konfig-core @willsoto/node-konfig-vault node-vault
```

```javascript
import * as Konfig from "@willsoto/node-konfig-core";
import vault from "node-vault";
import { VaultLoader } from "@willsoto/node-konfig-vault";

// For configuration, see the docs: https://github.com/kr1sp1n/node-vault
const client = vault();

export const store = new Konfig.Store();

const loader = new VaultLoader({
  secrets: [
    {
      key: "secret/data/database",
    },
  ],
  client,
});

store.registerLoader(loader);

await store.init();
```
