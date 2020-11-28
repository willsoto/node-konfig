---
id: "envloader"
title: "Class: EnvLoader"
sidebar_label: "EnvLoader"
---

## Hierarchy

- [Loader](loader.md)

  ↳ **EnvLoader**

## Constructors

### constructor

\+ **new EnvLoader**(`options`: [EnvLoaderOptions](../interfaces/envloaderoptions.md)): [EnvLoader](envloader.md)

_Overrides [Loader](loader.md).[constructor](loader.md#constructor)_

_Defined in [packages/core/src/loaders/env.ts:17](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/env.ts#L17)_

#### Parameters:

| Name      | Type                                                  |
| --------- | ----------------------------------------------------- |
| `options` | [EnvLoaderOptions](../interfaces/envloaderoptions.md) |

**Returns:** [EnvLoader](envloader.md)

## Properties

### maxRetries

• **maxRetries**: number

_Inherited from [Loader](loader.md).[maxRetries](loader.md#maxretries)_

_Defined in [packages/core/src/loaders/base.ts:13](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/base.ts#L13)_

---

### name

• **name**: string = "env"

_Overrides [Loader](loader.md).[name](loader.md#name)_

_Defined in [packages/core/src/loaders/env.ts:17](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/env.ts#L17)_

---

### options

• `Readonly` **options**: [EnvLoaderOptions](../interfaces/envloaderoptions.md)

_Defined in [packages/core/src/loaders/env.ts:15](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/env.ts#L15)_

---

### retryDelay

• **retryDelay**: number

_Inherited from [Loader](loader.md).[retryDelay](loader.md#retrydelay)_

_Defined in [packages/core/src/loaders/base.ts:14](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/base.ts#L14)_

---

### stopOnFailure

• **stopOnFailure**: boolean

_Inherited from [Loader](loader.md).[stopOnFailure](loader.md#stoponfailure)_

_Defined in [packages/core/src/loaders/base.ts:12](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/base.ts#L12)_

## Accessors

### retryPolicy

• `Protected`get **retryPolicy**(): RetryPolicy

_Inherited from [Loader](loader.md).[retryPolicy](loader.md#retrypolicy)_

_Defined in [packages/core/src/loaders/base.ts:24](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/base.ts#L24)_

**Returns:** RetryPolicy

## Methods

### load

▸ **load**(`store`: [Store](store.md)): void

_Overrides [Loader](loader.md).[load](loader.md#load)_

_Defined in [packages/core/src/loaders/env.ts:25](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/env.ts#L25)_

#### Parameters:

| Name    | Type              |
| ------- | ----------------- |
| `store` | [Store](store.md) |

**Returns:** void

---

### processValue

▸ `Private`**processValue**(`value`: string, `arraySeparator?`: undefined \| string): string \| string[]

_Defined in [packages/core/src/loaders/env.ts:37](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/env.ts#L37)_

#### Parameters:

| Name              | Type                |
| ----------------- | ------------------- |
| `value`           | string              |
| `arraySeparator?` | undefined \| string |

**Returns:** string \| string[]
