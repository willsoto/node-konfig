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

const loader = new Konfig.FileLoader({
  files: [
    {
      path: path.join(__dirname, "config.yaml"),
      // Accepts any options that the `js-yaml` library accepts
      parser: new YAMLParser(),
    },
  ],
});
```
