# Overview

A parser is responsible for converting other structures into plain old JavaScript objects (POJOs).

## Core parsers

The following parsers are included by default in `node-konfig-core`:

- `JSONParser`

## Usage

For loaders that support it, an appropriate parser must be instantiated and passed to the loader. Parsers can be shared between loaders.

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import process from "node:process";
import path from "node:path";

const loader = new Konfig.FileLoader({
  files: [
    {
      path: path.join(process.cwd(), "config.json"),
      parser: new Konfig.JSONParser(),
    },
  ],
});
```
