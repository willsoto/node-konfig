# Integrations

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
