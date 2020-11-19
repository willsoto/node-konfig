---
id: file
title: File
---

## Overview

Loads configuration from files. Files can be of any type as long as there is a [`Parser`](../parsers/overview.md) available.

## Usage

```javascript
import * as Konfig from "@willsoto/node-konfig-core";

const parser = new Konfig.JSONParser();

const loader = new Konfig.FileLoader({
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
