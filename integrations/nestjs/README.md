# NestJS Node Konfig

> Thanks to [Konfig](https://github.com/lalamove/konfig) for the inspiration. This library would not have been possible without it.

Documentation is available at [https://willsoto.github.io/node-konfig/](https://willsoto.github.io/node-konfig/)

## Installation

```bash
npm install @willsoto/nestjs-node-konfig
```

```bash
yarn add @willsoto/nestjs-node-konfig
```

```bash
pnpm add @willsoto/nestjs-node-konfig
```

## Quick look

```typescript
// config.module.ts
import { NodeKonfigModule } from "@willsoto/nestjs-node-konfig";
import { Module } from "@nestjs/common";

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

```javascript
// some.service.ts
import { Injectable } from "@nestjs/common";
import { Store } from "@willsoto/node-konfig-core";

@Injectable()
export class SomeService {
  constructor(private readonly store: Store) {}
}
```
