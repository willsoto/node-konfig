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

Configuration library for Node.js written in TypeScript. Can load and merge
configuration for multiple sources into one object for easy access. Inspired by Go's
[Konfig.](https://github.com/lalamove/konfig)

# Quick look

```yaml
# configs/default.yaml
name: "my-app"
```

```json
// configs/development.json
{
  "database": {
    "host": "localhost",
    "port": 5432,
    "user": "development",
    "password": "development"
  }
}
```

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import { VaultLoader } from "@willsoto/node-konfig-vault";
import * as path from "path";

const configDir = path.join(__dirname, "configs");

// Create the store, this is the object you will use to access your config
export const store = new Konfig.Store();

// Always load some defaults.
// These values will be merged with subsequent loaders. On conflicts, last one wins.
store.regiserLoader(
  new Konfig.FileLoader({
    files: [
      {
        path: path.join(configDir, "default.yaml"),
        // This will tell the `FileLoader` how it should interpret the files it loads
        parser: new Konfig.YAMLParser(),
      },
    ],
  }),
);

// Use a local json file in development
if (process.env.NODE_ENV === "development") {
  const loader = new Konfig.FileLoader({
    files: [
      {
        path: path.join(configDir, "development.json"),
        parser: new Konfig.JSONParser(),
      },
    ],
  });

  // Make sure the loader is registered on the store in order for it to be processed
  store.registerLoader(loader);
} else {
  // Use Vault in production or any other non-development environment.
  store.regiserLoader(
    new VaultLoader({
      secrets: [
        {
          key: "secret/data/database",
        },
      ],
    }),
  );
}

// `init` must be called in order to actually resolve and process all the registered loaders
// This only needs to be called once at some point during application startup
await store.init();

store.get("name"); // "my-app"
store.get("database"); // Will return the appropriate database configuration based on `NODE_ENV`
```
