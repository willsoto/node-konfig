# File

## Overview

Loads configuration from files. Files can be of any type as long as there is a [`Parser`](../parsers/overview.md) available.

## Installation

```bash
npm install @willsoto/node-konfig-file
```

```bash
yarn add @willsoto/node-konfig-file
```

```bash
pnpm add @willsoto/node-konfig-file
```

## Usage

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import { FileLoader } from "@willsoto/node-konfig-file";

const parser = new Konfig.JSONParser();

const loader = new FileLoader({
  files: [
    {
      path: path.join(__dirname, "config.json"),
      parser,
    },
    {
      path: path.join(__dirname, `${process.env.NODE_ENV}.json`),
      parser,
    },
  ],
});
```

## Options

| Name    | Required | Description                                                 |
| ------- | -------- | ----------------------------------------------------------- |
| `files` | yes      | An array of files to load. See `File` for more information. |

### File

| Name     | Required | Description                                                                    |
| -------- | -------- | ------------------------------------------------------------------------------ |
| `path`   | yes      | The path to the file.                                                          |
| `parser` | yes      | The parser to use. See [Parsers](../parsers/overview.md) for more information. |
