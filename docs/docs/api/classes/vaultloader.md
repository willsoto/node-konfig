---
id: "vaultloader"
title: "Class: VaultLoader"
sidebar_label: "VaultLoader"
---

## Hierarchy

- Loader

  ↳ **VaultLoader**

## Constructors

### constructor

\+ **new VaultLoader**(`options`: [VaultLoaderOptions](../interfaces/vaultloaderoptions.md)): [VaultLoader](vaultloader.md)

_Overrides void_

_Defined in [packages/vault/src/loader.ts:23](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/vault/src/loader.ts#L23)_

#### Parameters:

| Name      | Type                                                      |
| --------- | --------------------------------------------------------- |
| `options` | [VaultLoaderOptions](../interfaces/vaultloaderoptions.md) |

**Returns:** [VaultLoader](vaultloader.md)

## Properties

### client

• `Readonly` **client**: client

_Defined in [packages/vault/src/loader.ts:21](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/vault/src/loader.ts#L21)_

---

### maxRetries

• **maxRetries**: number

_Inherited from [ConsulLoader](consulloader.md).[maxRetries](consulloader.md#maxretries)_

_Defined in packages/core/dist/loaders/base.d.ts:11_

---

### name

• **name**: string = "vault"

_Overrides void_

_Defined in [packages/vault/src/loader.ts:23](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/vault/src/loader.ts#L23)_

---

### options

• `Readonly` **options**: [VaultLoaderOptions](../interfaces/vaultloaderoptions.md)

_Defined in [packages/vault/src/loader.ts:20](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/vault/src/loader.ts#L20)_

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

_Defined in [packages/vault/src/loader.ts:32](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/vault/src/loader.ts#L32)_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `store` | Store |

**Returns:** Promise&#60;void>

---

### postLoad

▸ `Private`**postLoad**(`store`: Store, `secret`: [Secret](../interfaces/secret.md), `key`: string, `value`: unknown): void

_Defined in [packages/vault/src/loader.ts:57](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/vault/src/loader.ts#L57)_

#### Parameters:

| Name     | Type                              |
| -------- | --------------------------------- |
| `store`  | Store                             |
| `secret` | [Secret](../interfaces/secret.md) |
| `key`    | string                            |
| `value`  | unknown                           |

**Returns:** void

---

### processSecrets

▸ **processSecrets**(`store`: Store): Promise&#60;void>

_Defined in [packages/vault/src/loader.ts:40](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/vault/src/loader.ts#L40)_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `store` | Store |

**Returns:** Promise&#60;void>
