---
id: "valueloader"
title: "Class: ValueLoader"
sidebar_label: "ValueLoader"
---

## Hierarchy

- [Loader](loader.md)

  ↳ **ValueLoader**

## Constructors

### constructor

\+ **new ValueLoader**(`options`: [ValueLoaderOptions](../interfaces/valueloaderoptions.md)): [ValueLoader](valueloader.md)

_Overrides [Loader](loader.md).[constructor](loader.md#constructor)_

_Defined in [packages/core/src/loaders/value.ts:11](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/value.ts#L11)_

#### Parameters:

| Name      | Type                                                      |
| --------- | --------------------------------------------------------- |
| `options` | [ValueLoaderOptions](../interfaces/valueloaderoptions.md) |

**Returns:** [ValueLoader](valueloader.md)

## Properties

### maxRetries

• **maxRetries**: number

_Inherited from [Loader](loader.md).[maxRetries](loader.md#maxretries)_

_Defined in [packages/core/src/loaders/base.ts:13](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L13)_

---

### name

• **name**: string = "value"

_Overrides [Loader](loader.md).[name](loader.md#name)_

_Defined in [packages/core/src/loaders/value.ts:11](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/value.ts#L11)_

---

### options

• `Readonly` **options**: [ValueLoaderOptions](../interfaces/valueloaderoptions.md)

_Defined in [packages/core/src/loaders/value.ts:9](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/value.ts#L9)_

---

### retryDelay

• **retryDelay**: number

_Inherited from [Loader](loader.md).[retryDelay](loader.md#retrydelay)_

_Defined in [packages/core/src/loaders/base.ts:14](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L14)_

---

### stopOnFailure

• **stopOnFailure**: boolean

_Inherited from [Loader](loader.md).[stopOnFailure](loader.md#stoponfailure)_

_Defined in [packages/core/src/loaders/base.ts:12](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L12)_

## Accessors

### retryPolicy

• `Protected`get **retryPolicy**(): RetryPolicy

_Inherited from [Loader](loader.md).[retryPolicy](loader.md#retrypolicy)_

_Defined in [packages/core/src/loaders/base.ts:24](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L24)_

**Returns:** RetryPolicy

## Methods

### load

▸ **load**(`store`: [Store](store.md)): void

_Overrides [Loader](loader.md).[load](loader.md#load)_

_Defined in [packages/core/src/loaders/value.ts:19](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/value.ts#L19)_

#### Parameters:

| Name    | Type              |
| ------- | ----------------- |
| `store` | [Store](store.md) |

**Returns:** void
