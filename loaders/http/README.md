# Node Konfig HTTP

> Thanks to [Konfig](https://github.com/lalamove/konfig) for the inspiration. This library would not have been possible without it.

Documentation is available at [https://willsoto.github.io/node-konfig/](https://willsoto.github.io/node-konfig/)

## Installation

```bash
npm install @willsoto/node-konfig-http
```

```bash
yarn add @willsoto/node-konfig-http
```

```bash
pnpm add @willsoto/node-konfig-http
```

## Quick look

```javascript
import * as Konfig from "@willsoto/node-konfig-core";
import { HttpLoader } from "@willsoto/node-konfig-http";

const loader = new HttpLoader({
  sources: [
    {
      url: "https://internal.config.com/config.json",
      parser: new Konfig.JSONParser(),
    },
  ],
});
```
