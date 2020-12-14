---
id: "flagloader"
title: "Class: FlagLoader"
sidebar_label: "FlagLoader"
---

## Hierarchy

- [Loader](loader.md)

  ↳ **FlagLoader**

## Constructors

### constructor

\+ **new FlagLoader**(`options`: [FlagLoaderOptions](../interfaces/flagloaderoptions.md)): [FlagLoader](flagloader.md)

_Overrides [Loader](loader.md).[constructor](loader.md#constructor)_

_Defined in [packages/core/src/loaders/flag.ts:14](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/loaders/flag.ts#L14)_

#### Parameters:

| Name      | Type                                                    |
| --------- | ------------------------------------------------------- |
| `options` | [FlagLoaderOptions](../interfaces/flagloaderoptions.md) |

**Returns:** [FlagLoader](flagloader.md)

## Properties

### #cli

• `Private` **#cli**: Result&#60;meow.AnyFlags>

_Defined in [packages/core/src/loaders/flag.ts:10](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/loaders/flag.ts#L10)_

---

### maxRetries

• **maxRetries**: number

_Inherited from [Loader](loader.md).[maxRetries](loader.md#maxretries)_

_Defined in [packages/core/src/loaders/base.ts:13](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/loaders/base.ts#L13)_

---

### name

• **name**: string = "flag"

_Overrides [Loader](loader.md).[name](loader.md#name)_

_Defined in [packages/core/src/loaders/flag.ts:14](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/loaders/flag.ts#L14)_

---

### options

• `Readonly` **options**: [FlagLoaderOptions](../interfaces/flagloaderoptions.md)

_Defined in [packages/core/src/loaders/flag.ts:12](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/loaders/flag.ts#L12)_

---

### retryDelay

• **retryDelay**: number

_Inherited from [Loader](loader.md).[retryDelay](loader.md#retrydelay)_

_Defined in [packages/core/src/loaders/base.ts:14](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/loaders/base.ts#L14)_

---

### stopOnFailure

• **stopOnFailure**: boolean

_Inherited from [Loader](loader.md).[stopOnFailure](loader.md#stoponfailure)_

_Defined in [packages/core/src/loaders/base.ts:12](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/loaders/base.ts#L12)_

## Accessors

### retryPolicy

• `Protected`get **retryPolicy**(): RetryPolicy

_Inherited from [Loader](loader.md).[retryPolicy](loader.md#retrypolicy)_

_Defined in [packages/core/src/loaders/base.ts:24](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/loaders/base.ts#L24)_

**Returns:** RetryPolicy

## Methods

### load

▸ **load**(`store`: [Store](store.md)): void \| Promise&#60;void>

_Overrides [Loader](loader.md).[load](loader.md#load)_

_Defined in [packages/core/src/loaders/flag.ts:23](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/loaders/flag.ts#L23)_

#### Parameters:

| Name    | Type              |
| ------- | ----------------- |
| `store` | [Store](store.md) |

**Returns:** void \| Promise&#60;void>
