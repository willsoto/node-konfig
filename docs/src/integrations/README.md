# Integrations

## NestJS

### Installation

```bash
npm install @willsoto/nestjs-node-konfig
```

```bash
yarn add @willsoto/nestjs-node-konfig
```

```bash
pnpm add @willsoto/nestjs-node-konfig
```

### Usage

```typescript
import { NodeKonfigModule } from "@willsoto/nestjs-node-konfig";
import { Module } from "@nestjs/common";
import { ValueLoader } from "@willsoto/node-konfig-core";

@Module({
  imports: [
    NodeKonfigModule.register({
      storeOptions: {
        loaders: [
          new ValueLoader({
            values: {
              foo: "bar",
            },
          }),
        ],
      },
    }),
  ],
})
export class ConfigModule {}
```

```typescript
import { Injectable } from "@nestjs/common";
import { Store } from "@willsoto/node-konfig-core";

@Injectable()
export class SomeService {
  constructor(private readonly store: Store) {}

  method() {
    const value = this.store.get("key");

    // do something with value
  }
}
```

You can also provide a `name` if you wish to have multiple stores.

```typescript{7-8}
import { NodeKonfigModule } from "@willsoto/nestjs-node-konfig";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    NodeKonfigModule.register({
      // Can also be set when using `registerAsync`
      name: "userConfigStore",
      storeOptions: {
        loaders: [
          new ValueLoader({
            values: {
              foo: "bar",
            },
          }),
        ],
      },
    }),
  ],
})
export class UsersConfigModule {}
```

```typescript{6-7}
import { Injectable, Inject } from "@nestjs/common";
import { Store } from "@willsoto/node-konfig-core";

@Injectable()
export class SomeService {
  // Inject using the token you provided when registering the store to get that instance.
  constructor(@Inject("userConfigStore") private readonly store: Store) {}

  method() {
    const value = this.store.get("key");

    // do something with value
  }
}
```
