# Flag

## Overview

Loads configuration from CLI flags.

## Usage

```typescript
import * as Konfig from "@willsoto/node-konfig-core";

const loader = new Konfig.FlagLoader({
  cliOptions: {
    flags: {
      environment: {
        alias: "env",
        default: "development",
      },
      appName: {
        default: "default",
      },
    },
  },
});
```

```bash
ts-node /src/main.ts --environment production --app-name my-app
```

```javascript
// Loads the following structure into the store
store.get("environment"); // "production"
store.get("appName"); // "my-app"
```

## Options

| Name         | Required | Description                                                   |
| ------------ | -------- | ------------------------------------------------------------- |
| `cliOptions` | yes      | See [meow](https://github.com/sindresorhus/meow) for options. |
