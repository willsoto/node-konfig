# Etcd

## Installation

```bash
npm install @willsoto/node-konfig-etcd
```

```bash
yarn add @willsoto/node-konfig-etcd
```

```bash
pnpm add @willsoto/node-konfig-etcd
```

## Usage

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import { EtcdLoader } from "@willsoto/node-konfig-etcd";

const loader = new EtcdLoader({
  keys: [
    {
      accessor: "database",
      parser: new Konfig.JSONParser(),
    },
  ],
});
```

Check the documentation for [etcd3](https://github.com/microsoft/etcd3) for configuration options.

## Options

| Name           | Required | Description                                                              |
| -------------- | -------- | ------------------------------------------------------------------------ |
| `keys`         | yes      | An array of values to load. See `Key` for more information.              |
| `etcd3Options` | no       | [`IOptions`](https://microsoft.github.io/etcd3/interfaces/ioptions.html) |

### Key

| Name       | Required | Description                    |
| ---------- | -------- | ------------------------------ |
| `accessor` | yes      | The path to the value in Etcd. |
