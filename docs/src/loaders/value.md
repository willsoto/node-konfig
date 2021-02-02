# Value

## Overview

Loads configuration from plain old JavaScript objects.

## Usage

```typescript
import * as Konfig from "@willsoto/node-konfig-core";

const loader = new Konfig.ValueLoader({
  values: {
    name: "bar",
    database: {
      host: "localhost",
    },
  },
});

// Loads the following structure into the store
store.get("name"); // "bar"
store.get("database.host"); // "localhost"
```

## Options

| Name     | Required | Description |
| -------- | -------- | ----------- |
| `values` | yes      | Any POJO    |
