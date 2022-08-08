# TOML

## Installation

```bash
npm install @willsoto/node-konfig-toml-parser
```

```bash
yarn add @willsoto/node-konfig-toml-parser
```

```bash
pnpm add @willsoto/node-konfig-toml-parser
```

## Usage

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import { TOMLParser } from "@willsoto/node-konfig-toml-parser";
import process from "node:process";
import path from "node:path";

const loader = new Konfig.FileLoader({
  files: [
    {
      path: path.join(process.cwd(), "config.toml"),
      parser: new TOMLParser(),
    },
  ],
});
```
