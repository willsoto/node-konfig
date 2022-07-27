# Vault

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

## Usage

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

Check the documentation for [node-vault](https://github.com/kr1sp1n/node-vault) for configuration options.

## Options

| Name           | Required | Description                                                     |
| -------------- | -------- | --------------------------------------------------------------- |
| `secrets`      | yes      | An array of secrets to load. See `Secret` for more information. |
| `vaultOptions` | no       | [`VaultOptions`](https://github.com/kr1sp1n/node-vault)         |

### Secret

| Name  | Required | Description                      |
| ----- | -------- | -------------------------------- |
| `key` | yes      | The path to the secret in Vault. |
