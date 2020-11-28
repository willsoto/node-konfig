---
id: "etcdloader"
title: "Class: EtcdLoader"
sidebar_label: "EtcdLoader"
---

## Hierarchy

- Loader

  ↳ **EtcdLoader**

## Constructors

### constructor

\+ **new EtcdLoader**(`options`: [EtcdLoaderOptions](../interfaces/etcdloaderoptions.md)): [EtcdLoader](etcdloader.md)

_Overrides void_

_Defined in [packages/etcd/src/loader.ts:24](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/etcd/src/loader.ts#L24)_

#### Parameters:

| Name      | Type                                                    |
| --------- | ------------------------------------------------------- |
| `options` | [EtcdLoaderOptions](../interfaces/etcdloaderoptions.md) |

**Returns:** [EtcdLoader](etcdloader.md)

## Properties

### client

• `Readonly` **client**: Etcd3

_Defined in [packages/etcd/src/loader.ts:22](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/etcd/src/loader.ts#L22)_

---

### maxRetries

• **maxRetries**: number

_Inherited from [ConsulLoader](consulloader.md).[maxRetries](consulloader.md#maxretries)_

_Defined in packages/core/dist/loaders/base.d.ts:11_

---

### name

• **name**: string = "etcd"

_Overrides void_

_Defined in [packages/etcd/src/loader.ts:24](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/etcd/src/loader.ts#L24)_

---

### options

• `Readonly` **options**: [EtcdLoaderOptions](../interfaces/etcdloaderoptions.md)

_Defined in [packages/etcd/src/loader.ts:21](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/etcd/src/loader.ts#L21)_

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

### execute

▸ **execute**(`store`: Store): Promise&#60;void>

_Defined in [packages/etcd/src/loader.ts:41](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/etcd/src/loader.ts#L41)_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `store` | Store |

**Returns:** Promise&#60;void>

---

### load

▸ **load**(`store`: Store): Promise&#60;void>

_Overrides void_

_Defined in [packages/etcd/src/loader.ts:33](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/etcd/src/loader.ts#L33)_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `store` | Store |

**Returns:** Promise&#60;void>
