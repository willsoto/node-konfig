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

const loader = new Konfig.FileLoader({
  files: [
    {
      path: path.join(__dirname, "config.toml"),
      parser: new TOMLParser(),
    },
  ],
});
```
