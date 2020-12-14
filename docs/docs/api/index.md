---
id: "index"
title: "@willsoto/node-konfig-consul"
slug: "/api"
sidebar_label: "Globals"
---

## Index

### Classes

- [ConsulLoader](classes/consulloader.md)
- [EnvLoader](classes/envloader.md)
- [EtcdLoader](classes/etcdloader.md)
- [FileLoader](classes/fileloader.md)
- [FlagLoader](classes/flagloader.md)
- [HttpLoader](classes/httploader.md)
- [JSONParser](classes/jsonparser.md)
- [KeyNotFoundError](classes/keynotfounderror.md)
- [Loader](classes/loader.md)
- [NoValueForKeyError](classes/novalueforkeyerror.md)
- [Store](classes/store.md)
- [TOMLParser](classes/tomlparser.md)
- [ValueLoader](classes/valueloader.md)
- [VaultLoader](classes/vaultloader.md)
- [YAMLParser](classes/yamlparser.md)

### Interfaces

- [ConsulLoaderOptions](interfaces/consulloaderoptions.md)
- [EnvLoaderOptions](interfaces/envloaderoptions.md)
- [EnvVar](interfaces/envvar.md)
- [EtcdLoaderOptions](interfaces/etcdloaderoptions.md)
- [File](interfaces/file.md)
- [FileLoaderOptions](interfaces/fileloaderoptions.md)
- [FlagLoaderOptions](interfaces/flagloaderoptions.md)
- [HttpLoaderOptions](interfaces/httploaderoptions.md)
- [Key](interfaces/key.md)
- [LoaderOptions](interfaces/loaderoptions.md)
- [Parser](interfaces/parser.md)
- [Secret](interfaces/secret.md)
- [Source](interfaces/source.md)
- [StoreOptions](interfaces/storeoptions.md)
- [ValueLoaderOptions](interfaces/valueloaderoptions.md)
- [VaultLoaderOptions](interfaces/vaultloaderoptions.md)

### Type aliases

- [Config](index.md#config)
- [GetResponse](index.md#getresponse)

## Type aliases

### Config

Ƭ **Config**: Record&#60;string, unknown>

_Defined in [packages/core/src/store.ts:9](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/store.ts#L9)_

---

### GetResponse

Ƭ **GetResponse**: { CreateIndex: number ; Flags: number ; Key: string ; LockIndex: number ; ModifyIndex: number ; Value: string }

_Defined in [packages/consul/src/loader.ts:18](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/consul/src/loader.ts#L18)_

#### Type declaration:

| Name          | Type   |
| ------------- | ------ |
| `CreateIndex` | number |
| `Flags`       | number |
| `Key`         | string |
| `LockIndex`   | number |
| `ModifyIndex` | number |
| `Value`       | string |
