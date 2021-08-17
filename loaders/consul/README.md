# Node Konfig Consul

> Thanks to [Konfig](https://github.com/lalamove/konfig) for the inspiration. This library would not have been possible without it.

Documentation is available at [https://willsoto.github.io/node-konfig/](https://willsoto.github.io/node-konfig/)

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

## Quick look

```javascript
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
