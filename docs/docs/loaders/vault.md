---
id: vault
title: Vault
---

## Installation

```bash
npm install @willsoto/node-konfig-vault node-vault
```

```bash
yarn add @willsoto/node-konfig-vault node-vault
```

```bash
pnpm add @willsoto/node-konfig-vault node-vault
```

## Usage

```javascript
import * as Konfig from "@willsoto/node-konfig-core";
import { VaultLoader } from "@willsoto/node-konfig-vault";
import vault from "node-vault";

const client = vault();

const store = new Konfig.Store();

const loader = new VaultLoader({
  secrets: [
    {
      key: "secret/data/database",
    },
  ],
  client,
});

store.registerLoader(loader);

await store.init();
```

Check the documentation for [node-vault](https://github.com/kr1sp1n/node-vault) for configuration options.

## Options

| Name      | Required | Description                                                     |
| --------- | -------- | --------------------------------------------------------------- |
| `secrets` | yes      | An array of secrets to load. See `Secret` for more information. |
| `client`  | yes      | The node-vault client                                           |

### Secret

| Name  | Required | Description                      |
| ----- | -------- | -------------------------------- |
| `key` | yes      | The path to the secret in Vault. |
