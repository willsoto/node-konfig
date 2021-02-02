# Basic usage

Configuration can be loaded from various sources and merged together to form the final config object
your application will use.

```json
{
  "name": "my-app",
  "database": {
    "host": "localhost",
    "port": 5432
  }
}
```

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import path from "path";

// Create the store, this is the object you will use to access your config
export const store = new Konfig.Store();

// This will load configuration from the specified files. A parser must be provided
// so the loader knows how to interpret the file.
// Files are loaded in order, so any conflicts will be resolved through a "last one wins" approach.
// In this case, `local.json` will override properties that exist in both configurations.
const loader = new Konfig.FileLoader({
  files: [
    {
      path: path.join(__dirname, "configs", "development.json"),
      // This will tell the loader how it should interpret the files it loads
      parser: new Konfig.JSONParser(),
    },
  ],
});

// Make sure the loader is registered on the store in order for it to be processed.
store.registerLoader(loader);

// `init` must be called in order to actually resolve and process all the registered loaders
// This only needs to be called once at some point during application startup.
await store.init();
```