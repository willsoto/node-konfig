# Node Konfig Vault

> Thanks to [Konfig](https://github.com/lalamove/konfig) for the inspiration. This library would not have been possible without it.

Documentation is available at [https://willsoto.github.io/node-konfig/](https://willsoto.github.io/node-konfig/)

## Installation

```bash
npm install @willsoto/node-konfig-vault
```

```bash
yarn add @willsoto/node-konfig-vault
```

```bash
pnpm add @willsoto/node-konfig-vault
```

## Quick look

```javascript
import * as Konfig from "@willsoto/node-konfig-core";
import { VaultLoader } from "@willsoto/node-konfig-vault";

const loader = new VaultLoader({
  secrets: [
    {
      key: "secret/data/database",
    },
  ],
});
```
