---
id: "fileloader"
title: "Class: FileLoader"
sidebar_label: "FileLoader"
---

## Hierarchy

- [Loader](loader.md)

  ↳ **FileLoader**

## Constructors

### constructor

\+ **new FileLoader**(`options`: [FileLoaderOptions](../interfaces/fileloaderoptions.md)): [FileLoader](fileloader.md)

_Overrides [Loader](loader.md).[constructor](loader.md#constructor)_

_Defined in [packages/core/src/loaders/file.ts:18](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/file.ts#L18)_

#### Parameters:

| Name      | Type                                                    |
| --------- | ------------------------------------------------------- |
| `options` | [FileLoaderOptions](../interfaces/fileloaderoptions.md) |

**Returns:** [FileLoader](fileloader.md)

## Properties

### maxRetries

• **maxRetries**: number

_Inherited from [Loader](loader.md).[maxRetries](loader.md#maxretries)_

_Defined in [packages/core/src/loaders/base.ts:13](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/base.ts#L13)_

---

### name

• **name**: string = "file"

_Overrides [Loader](loader.md).[name](loader.md#name)_

_Defined in [packages/core/src/loaders/file.ts:18](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/file.ts#L18)_

---

### options

• `Readonly` **options**: [FileLoaderOptions](../interfaces/fileloaderoptions.md)

_Defined in [packages/core/src/loaders/file.ts:16](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/file.ts#L16)_

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

▸ **load**(`store`: [Store](store.md)): Promise&#60;void>

_Overrides [Loader](loader.md).[load](loader.md#load)_

_Defined in [packages/core/src/loaders/file.ts:26](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/file.ts#L26)_

#### Parameters:

| Name    | Type              |
| ------- | ----------------- |
| `store` | [Store](store.md) |

**Returns:** Promise&#60;void>

---

### processFiles

▸ **processFiles**(`store`: [Store](store.md)): Promise&#60;void>

_Defined in [packages/core/src/loaders/file.ts:34](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/loaders/file.ts#L34)_

#### Parameters:

| Name    | Type              |
| ------- | ----------------- |
| `store` | [Store](store.md) |

**Returns:** Promise&#60;void>
