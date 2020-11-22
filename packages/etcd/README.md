# Node Konfig Etcd

> Thanks to [Konfig](https://github.com/lalamove/konfig) for the inspiration. This library would not have been possible without it.

Documentation is available at [https://willsoto.github.io/node-konfig/](https://willsoto.github.io/node-konfig/)

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

## Quick look

```javascript
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
