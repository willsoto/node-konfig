# Examples

## NestJS

### Usage

```typescript
import * as Konfig from "@willsoto/node-konfig-core";
import { Module } from "@nestjs/common";

class MyStore extends Konfig.Store {
  constructor() {
    super({
      /* configuration options*/
    });
  }
}

@Module({
  providers: [
    {
      provide: MyStore,
      async useFactory() {
        const store = new MyStore();

        await store.init();

        return store;
      },
    },
  ],
  exports: [MyStore],
})
export class ConfigModule {}
```

```typescript
import { Injectable } from "@nestjs/common";
import { MyStore } from "./config";

@Injectable()
export class SomeService {
  constructor(private store: MyStore) {}
}
```

## Express

```typescript
// config/store.ts
import * as Konfig from "@willsoto/node-konfig-core";

export const store = new Konfig.Store({
  loaders: [
    new Konfig.ValueLoader({
      values: {
        name: "express-development",
        database: {
          host: "localhosts",
          port: 5432,
          database: "development",
          password: "development",
        },
      },
    }),
  ],
});
```

```typescript
// main.ts
import * as express from "express";
import { store } from "./config/store";

const app = express();

app.get("/config", (req, res) => {
  // Will be serialized as JSON
  res.send(store);
});

async function start() {
  await store.init();

  app.listen(3000);

  console.log("Application started on :3000");
  console.log("Configuration loaded", store.toJSON());
}

void start();
```
