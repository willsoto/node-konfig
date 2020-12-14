---
id: "httploader"
title: "Class: HttpLoader"
sidebar_label: "HttpLoader"
---

## Hierarchy

- Loader

  ↳ **HttpLoader**

## Constructors

### constructor

\+ **new HttpLoader**(`options`: [HttpLoaderOptions](../interfaces/httploaderoptions.md)): [HttpLoader](httploader.md)

_Overrides void_

_Defined in [packages/http/src/loader.ts:22](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/http/src/loader.ts#L22)_

#### Parameters:

| Name      | Type                                                    |
| --------- | ------------------------------------------------------- |
| `options` | [HttpLoaderOptions](../interfaces/httploaderoptions.md) |

**Returns:** [HttpLoader](httploader.md)

## Properties

### maxRetries

• **maxRetries**: number

_Inherited from [ConsulLoader](consulloader.md).[maxRetries](consulloader.md#maxretries)_

_Defined in packages/core/dist/loaders/base.d.ts:11_

---

### name

• **name**: string = "http"

_Overrides void_

_Defined in [packages/http/src/loader.ts:22](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/http/src/loader.ts#L22)_

---

### options

• `Readonly` **options**: [HttpLoaderOptions](../interfaces/httploaderoptions.md)

_Defined in [packages/http/src/loader.ts:20](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/http/src/loader.ts#L20)_

---

### retryDelay

• **retryDelay**: number

_Inherited from [ConsulLoader](consulloader.md).[retryDelay](consulloader.md#retrydelay)_

_Defined in packages/core/dist/loaders/base.d.ts:12_

---

### stopOnFailure

• **stopOnFailure**: boolean

_Inherited from [ConsulLoader](consulloader.md).[stopOnFailure](consulloader.md#stoponfailure)_

_Defined in packages/core/dist/loaders/base.d.ts:10_

## Accessors

### retryPolicy

• `Protected`get **retryPolicy**(): RetryPolicy

_Inherited from [ConsulLoader](consulloader.md).[retryPolicy](consulloader.md#retrypolicy)_

_Defined in packages/core/dist/loaders/base.d.ts:15_

**Returns:** RetryPolicy

## Methods

### load

▸ **load**(`store`: Store): Promise&#60;void>

_Overrides void_

_Defined in [packages/http/src/loader.ts:30](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/http/src/loader.ts#L30)_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `store` | Store |

**Returns:** Promise&#60;void>

---

### process

▸ **process**(`store`: Store): Promise&#60;void>

_Defined in [packages/http/src/loader.ts:38](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/http/src/loader.ts#L38)_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `store` | Store |

**Returns:** Promise&#60;void>
