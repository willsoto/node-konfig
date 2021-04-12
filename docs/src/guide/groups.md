# Groups

Groups can be used to better organize the store. Groups can be thought of as "sub-stores."
They can specify their own loaders but still be accessed via the main store.

```typescript
import * as Konfig from "@willsoto/node-konfig-core";

export const store = new Konfig.Store();

const group = store.group("database").registerLoader(
  new Konfig.ValueLoader({
    values: {
      host: "localhost",
      port: 5432,
    },
  }),
);

// Will also initialize all groups within the store
await store.init();

store.get("database.host"); // "localhost"
group.get("host"); // "localhost"
```

## Group options

Groups can also be initialized with the same options you would provide to the `Store`.

> Options will only be accepted and processed when a group is created. Subsequent calls with options
> will be ignored.

```typescript
store.group("database", {
  loaders: [
    new Konfig.ValueLoader({
      values: {
        host: "localhost",
        port: 5432,
      },
    }),
  ],
});
```
