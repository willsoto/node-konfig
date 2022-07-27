# Specifying loaders per environment

Loaders can also be declared for each environment. Loaders specified in this way will always
take precedence over "default" loaders (i.e., those not belonging to any environment).

In this example, we use Vault for staging and production, but not for development.

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import { VaultLoader } from "@willsoto/node-konfig-vault";

assert(process.env.NODE_KONFIG_ENV === "development");

const store = new Konfig.Store({
  loadersByEnvironment: {
    development: [
      new Konfig.ValueLoader({
        values: {
          name: "app-development",
        },
      }),
    ],
    staging: [new VaultLoader()],
    production: [new VaultLoader()],
  },
});

store.get("name"); // app-development
```

In terms of how the resulting store would look, this example is equivalent to the
previous example.

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import { VaultLoader } from "@willsoto/node-konfig-vault";

const store = new Konfig.Store({
  loaders: [
    new Konfig.ValueLoader({
      values: {
        name: "app-development",
      },
    }),
  ],
  loadersByEnvironment: {
    staging: [new VaultLoader()],
    production: [new VaultLoader()],
  },
});

store.get("name"); // app-development
```

Which environment to load will be determined by the presence (or lack thereof) of certain environment variables.
They will be evaluated in the following order, defaulting to "development" if not set.

1. `NODE_KONFIG_ENV`
2. `NODE_ENV`
3. "development"
