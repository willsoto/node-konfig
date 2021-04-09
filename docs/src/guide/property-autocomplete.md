# Property autocomplete

To enable TypeScript autocomplete for properties, you can provide an interface to
the `Store` class like so:

```ts
import * as Konfig from "@willsoto/node-konfig-core";

interface MyStore {
  name: string;
  database: {
    host: string;
    port: number;
  }
}

const store = new Konfig.Store<MyStore>();

store.get("foo"); // ✗ - error
store.get("database.host"); // ✓ - knows `database.host` is a `string`
```
