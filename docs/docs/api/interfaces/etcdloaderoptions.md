---
id: "etcdloaderoptions"
title: "Interface: EtcdLoaderOptions"
sidebar_label: "EtcdLoaderOptions"
---

## Hierarchy

- LoaderOptions

  ↳ **EtcdLoaderOptions**

## Properties

### etcd3Options

• `Optional` **etcd3Options**: IOptions

_Defined in [packages/etcd/src/loader.ts:17](https://github.com/willsoto/node-konfig/blob/b999a55/packages/etcd/src/loader.ts#L17)_

---

### keys

• **keys**: [Key](key.md)[]

_Defined in [packages/etcd/src/loader.ts:16](https://github.com/willsoto/node-konfig/blob/b999a55/packages/etcd/src/loader.ts#L16)_

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
