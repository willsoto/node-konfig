---
id: http
title: HTTP
---

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

## Usage

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

## Options

| Name      | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| `sources` | yes      | An array of urls to load. See `Source` for more information. |

### Source

| Name           | Required | Description                                                                    |
| -------------- | -------- | ------------------------------------------------------------------------------ |
| `url`          | yes      | The path to the secret in vault.                                               |
| `parser`       | yes      | The parser to use. See [Parsers](../parsers/overview.md) for more information. |
| `fetchOptions` | no       | See [node-fetch](https://github.com/node-fetch/node-fetch)                     |
