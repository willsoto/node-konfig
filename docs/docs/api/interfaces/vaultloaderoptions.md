---
id: "vaultloaderoptions"
title: "Interface: VaultLoaderOptions"
sidebar_label: "VaultLoaderOptions"
---

## Hierarchy

- LoaderOptions

  ↳ **VaultLoaderOptions**

## Properties

### maxRetries

• `Optional` **maxRetries**: undefined \| number

_Inherited from [ConsulLoaderOptions](consulloaderoptions.md).[maxRetries](consulloaderoptions.md#maxretries)_

_Defined in packages/core/dist/loaders/base.d.ts:5_

---

### retryDelay

• `Optional` **retryDelay**: undefined \| number

_Inherited from [ConsulLoaderOptions](consulloaderoptions.md).[retryDelay](consulloaderoptions.md#retrydelay)_

_Defined in packages/core/dist/loaders/base.d.ts:6_

---

### secrets

• **secrets**: [Secret](secret.md)[]

_Defined in [packages/vault/src/loader.ts:15](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/vault/src/loader.ts#L15)_

---

### stopOnFailure

• `Optional` **stopOnFailure**: undefined \| false \| true

_Inherited from [ConsulLoaderOptions](consulloaderoptions.md).[stopOnFailure](consulloaderoptions.md#stoponfailure)_

_Defined in packages/core/dist/loaders/base.d.ts:4_

---

### vaultOptions

• `Optional` **vaultOptions**: VaultOptions

_Defined in [packages/vault/src/loader.ts:16](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/vault/src/loader.ts#L16)_
