# YAML

## Installation

```bash
npm install @willsoto/node-konfig-yaml-parser
```

```bash
yarn add @willsoto/node-konfig-yaml-parser
```

```bash
pnpm add @willsoto/node-konfig-yaml-parser
```

## Usage

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import { YAMLParser } from "@willsoto/node-konfig-yaml-parser";
import process from "node:process";
import path from "node:path";

const loader = new Konfig.FileLoader({
  files: [
    {
      path: path.join(process.cwd(), "config.yaml"),
      // Accepts any options that the `js-yaml` library accepts
      parser: new YAMLParser(),
    },
  ],
});
```
