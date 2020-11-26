---
id: "consulloaderoptions"
title: "Interface: ConsulLoaderOptions"
sidebar_label: "ConsulLoaderOptions"
---

## Hierarchy

- LoaderOptions

  ↳ **ConsulLoaderOptions**

## Properties

### consulOptions

• `Optional` **consulOptions**: consul.ConsulOptions

_Defined in [packages/consul/src/loader.ts:29](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/consul/src/loader.ts#L29)_

---

### keys

• **keys**: [Key](key.md)[]

_Defined in [packages/consul/src/loader.ts:28](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/consul/src/loader.ts#L28)_

---

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

### stopOnFailure

• `Optional` **stopOnFailure**: undefined \| false \| true

_Inherited from [ConsulLoaderOptions](consulloaderoptions.md).[stopOnFailure](consulloaderoptions.md#stoponfailure)_

_Defined in packages/core/dist/loaders/base.d.ts:4_
