---
id: "store"
title: "Class: Store<TConfig>"
sidebar_label: "Store"
---

Holds the configuration object.

## Type parameters

| Name      | Type                         | Default                      |
| --------- | ---------------------------- | ---------------------------- |
| `TConfig` | [Config](../index.md#config) | Record\&#60;string, unknown> |

## Hierarchy

- **Store**

## Constructors

### constructor

\+ **new Store**(`options?`: [StoreOptions](../interfaces/storeoptions.md)): [Store](store.md)

_Defined in [packages/core/src/store.ts:26](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L26)_

#### Parameters:

| Name      | Type                                          | Default value |
| --------- | --------------------------------------------- | ------------- |
| `options` | [StoreOptions](../interfaces/storeoptions.md) | {}            |

**Returns:** [Store](store.md)

## Properties

### #groups

• `Private` **#groups**: [Store](store.md)[] = []

_Defined in [packages/core/src/store.ts:15](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L15)_

---

### config

• `Private` **config**: TConfig = {} as TConfig

_Defined in [packages/core/src/store.ts:25](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L25)_

---

### loaders

• `Private` **loaders**: [Loader](loader.md)[] = []

_Defined in [packages/core/src/store.ts:26](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L26)_

---

### options

• `Readonly` **options**: Required&#60;[StoreOptions](../interfaces/storeoptions.md)>

_Defined in [packages/core/src/store.ts:17](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L17)_

## Accessors

### name

• get **name**(): string

_Defined in [packages/core/src/store.ts:149](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L149)_

**Returns:** string

## Methods

### assign

▸ **assign**(`config`: TConfig): this

_Defined in [packages/core/src/store.ts:89](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L89)_

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `config` | TConfig |

**Returns:** this

---

### get

▸ **get**&#60;T>(`accessor`: string): T

_Defined in [packages/core/src/store.ts:35](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L35)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `accessor` | string |

**Returns:** T

---

### getOrThrow

▸ **getOrThrow**&#60;T>(`accessor`: string): T

_Defined in [packages/core/src/store.ts:62](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L62)_

If the given accessor is not present on the store or the returned value is `null`,
an error will be thrown.

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `accessor` | string |

**Returns:** T

---

### group

▸ **group**(`name`: string): [Store](store.md)

_Defined in [packages/core/src/store.ts:132](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L132)_

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| `name` | string |

**Returns:** [Store](store.md)

---

### has

▸ **has**(`accessor`: string): boolean

_Defined in [packages/core/src/store.ts:79](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L79)_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `accessor` | string |

**Returns:** boolean

---

### init

▸ **init**(): Promise&#60;void>

_Defined in [packages/core/src/store.ts:103](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L103)_

**Returns:** Promise&#60;void>

---

### registerLoader

▸ **registerLoader**(`loader`: [Loader](loader.md)): this

_Defined in [packages/core/src/store.ts:83](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L83)_

#### Parameters:

| Name     | Type                |
| -------- | ------------------- |
| `loader` | [Loader](loader.md) |

**Returns:** this

---

### set

▸ **set**(`accessor`: string, `value`: unknown): TConfig

_Defined in [packages/core/src/store.ts:71](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L71)_

#### Parameters:

| Name       | Type    |
| ---------- | ------- |
| `accessor` | string  |
| `value`    | unknown |

**Returns:** TConfig

---

### toJSON

▸ **toJSON**(): Record&#60;string, unknown>

_Defined in [packages/core/src/store.ts:114](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/store.ts#L114)_

**Returns:** Record&#60;string, unknown>
