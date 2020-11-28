---
id: "consulloader"
title: "Class: ConsulLoader"
sidebar_label: "ConsulLoader"
---

## Hierarchy

- Loader

  ↳ **ConsulLoader**

## Constructors

### constructor

\+ **new ConsulLoader**(`options`: [ConsulLoaderOptions](../interfaces/consulloaderoptions.md)): [ConsulLoader](consulloader.md)

_Overrides void_

_Defined in [packages/consul/src/loader.ts:36](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/consul/src/loader.ts#L36)_

#### Parameters:

| Name      | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `options` | [ConsulLoaderOptions](../interfaces/consulloaderoptions.md) |

**Returns:** [ConsulLoader](consulloader.md)

## Properties

### client

• `Readonly` **client**: consul.Consul

_Defined in [packages/consul/src/loader.ts:34](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/consul/src/loader.ts#L34)_

---

### maxRetries

• **maxRetries**: number

_Inherited from [ConsulLoader](consulloader.md).[maxRetries](consulloader.md#maxretries)_

_Defined in packages/core/dist/loaders/base.d.ts:11_

---

### name

• **name**: string = "consul"

_Overrides void_

_Defined in [packages/consul/src/loader.ts:36](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/consul/src/loader.ts#L36)_

---

### options

• `Readonly` **options**: [ConsulLoaderOptions](../interfaces/consulloaderoptions.md)

_Defined in [packages/consul/src/loader.ts:33](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/consul/src/loader.ts#L33)_

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

_Defined in [packages/consul/src/loader.ts:49](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/consul/src/loader.ts#L49)_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `store` | Store |

**Returns:** Promise&#60;void>

---

### postLoad

▸ `Private`**postLoad**(`key`: [Key](../interfaces/key.md), `accessor`: string, `value`: unknown): [accessor: string, value: unknown]

_Defined in [packages/consul/src/loader.ts:81](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/consul/src/loader.ts#L81)_

#### Parameters:

| Name       | Type                        |
| ---------- | --------------------------- |
| `key`      | [Key](../interfaces/key.md) |
| `accessor` | string                      |
| `value`    | unknown                     |

**Returns:** [accessor: string, value: unknown]

---

### process

▸ **process**(`store`: Store): Promise&#60;void>

_Defined in [packages/consul/src/loader.ts:57](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/consul/src/loader.ts#L57)_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `store` | Store |

**Returns:** Promise&#60;void>
