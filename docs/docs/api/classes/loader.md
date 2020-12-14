---
id: "loader"
title: "Class: Loader"
sidebar_label: "Loader"
---

## Hierarchy

- **Loader**

  ↳ [EnvLoader](envloader.md)

  ↳ [FileLoader](fileloader.md)

  ↳ [FlagLoader](flagloader.md)

  ↳ [ValueLoader](valueloader.md)

## Constructors

### constructor

\+ **new Loader**(`options`: [LoaderOptions](../interfaces/loaderoptions.md)): [Loader](loader.md)

_Defined in [packages/core/src/loaders/base.ts:14](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L14)_

#### Parameters:

| Name      | Type                                            |
| --------- | ----------------------------------------------- |
| `options` | [LoaderOptions](../interfaces/loaderoptions.md) |

**Returns:** [Loader](loader.md)

## Properties

### maxRetries

• **maxRetries**: number

_Defined in [packages/core/src/loaders/base.ts:13](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L13)_

---

### name

• **name**: string = "base"

_Defined in [packages/core/src/loaders/base.ts:11](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L11)_

---

### retryDelay

• **retryDelay**: number

_Defined in [packages/core/src/loaders/base.ts:14](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L14)_

---

### stopOnFailure

• **stopOnFailure**: boolean

_Defined in [packages/core/src/loaders/base.ts:12](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L12)_

## Accessors

### retryPolicy

• `Protected`get **retryPolicy**(): RetryPolicy

_Defined in [packages/core/src/loaders/base.ts:24](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L24)_

**Returns:** RetryPolicy

## Methods

### load

▸ `Abstract`**load**(`store`: [Store](store.md)): void \| Promise&#60;void>

_Defined in [packages/core/src/loaders/base.ts:22](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L22)_

#### Parameters:

| Name    | Type              |
| ------- | ----------------- |
| `store` | [Store](store.md) |

**Returns:** void \| Promise&#60;void>
