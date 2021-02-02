# Overview

A parser is responsible for converting other structures into plain old JavaScript objects (POJOs).

## Core parsers

The following parsers are included by default in `node-konfig-core`:

- `JSONParser`
- `TOMLParser`
- `YAMLParser`

## Usage

For loaders that support it, an appropriate parser must be instantiated and passed to the loader. Parsers can be shared between loaders.

```javascript
import * as Konfig from "@willsoto/node-konfig-core";

const loader = new Konfig.FileLoader({
  files: [
    {
      path: path.join(__dirname, "config.json"),
      parser: new Konfig.JSONParser(),
    },
    {
      path: path.join(__dirname, "config.yaml"),
      // Accepts any options that the `js-yaml` library accepts
      parser: new Konfig.YAMLParser(),
    },
    {
      path: path.join(__dirname, "config.toml"),
      parser: new Konfig.TOMLParser(),
    },
  ],
});
```
