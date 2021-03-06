# Consul

## Installation

```bash
npm install @willsoto/node-konfig-consul
```

```bash
yarn add @willsoto/node-konfig-consul
```

```bash
pnpm add @willsoto/node-konfig-consul
```

## Usage

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import { ConsulLoader } from "@willsoto/node-konfig-consul";

const loader = new ConsulLoader({
  keys: [
    {
      key: "database",
      parser: new Konfig.JSONParser(),
    },
    {
      key: "appName",
    },
  ],
});
```

Check the documentation for [consul](https://github.com/silas/node-consul) for configuration options.

## Options

| Name            | Required | Description                                                           |
| --------------- | -------- | --------------------------------------------------------------------- |
| `keys`          | yes      | An array of keys to load. See `Key` for more information.             |
| `consulOptions` | no       | [`ConsulOptions`](https://github.com/silas/node-consul#consuloptions) |

### Key

| Name         | Required | Description                                                           |
| ------------ | -------- | --------------------------------------------------------------------- |
| `key`        | yes      | The path to the secret in Consul.                                     |
| `getOptions` | no       | [`consul.Kv.GetOptions`](https://github.com/silas/node-consul#kv-get) |
