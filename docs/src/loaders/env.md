# Env

## Overview

Loads configuration from environment varibles.

## Usage

```bash
export PORT=5432
export HOSTS=localhost:1234,localhost:5678
```

```typescript
import * as Konfig from "@willsoto/node-konfig-core";

const loader = new Konfig.EnvLoader({
  envVars: [
    {
      accessor: "port",
      envVarName: "PORT",
    },
    {
      accessor: "hosts",
      envVarName: "HOSTS",
      arraySeparator: ",",
    },
  ],
});

// Loads the following structure into the store
store.get("port"); // "5432"
store.get("hosts"); // ["localhost:1234", "localhost:5678"]
```

## Options

| Name      | Required | Description  |
| --------- | -------- | ------------ |
| `envVars` | yes      | See `EnvVar` |

### EnvVar

| Name             | Required | Description                                                                                         |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `accessor`       | yes      | Where to place the environment variable in the store. Can be in dot notation for nested structures. |
| `envVarName`     | yes      | The name of the environment variable to look up.                                                    |
| `arraySeparator` | no       | If the value is meant to be an array, how should it be converted into a native JS array.            |
