---
id: "store"
title: "Class: Store<TConfig>"
sidebar_label: "Store"
---

Holds the configuration object.

**`example`**

```
const store = new Store();
```

## Type parameters

| Name      | Type                         | Default                      |
| --------- | ---------------------------- | ---------------------------- |
| `TConfig` | [Config](../index.md#config) | Record\&#60;string, unknown> |

## Hierarchy

- **Store**

## Constructors

### constructor

\+ **new Store**(`options?`: [StoreOptions](../interfaces/storeoptions.md)): [Store](store.md)

_Defined in [packages/core/src/store.ts:43](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L43)_

#### Parameters:

| Name      | Type                                          | Default value |
| --------- | --------------------------------------------- | ------------- |
| `options` | [StoreOptions](../interfaces/storeoptions.md) | {}            |

**Returns:** [Store](store.md)

## Properties

### #groups

• `Private` **#groups**: [Store](store.md)[] = []

_Defined in [packages/core/src/store.ts:27](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L27)_

Keeps track of all the groups associated with this Store instance.

**`internal`**

---

### #loaders

• `Private` **#loaders**: [Loader](loader.md)[] = []

_Defined in [packages/core/src/store.ts:33](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L33)_

Keeps track of all the loaders associated with this Store instance.

**`internal`**

---

### config

• `Private` **config**: TConfig = {} as TConfig

_Defined in [packages/core/src/store.ts:43](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L43)_

---

### options

• `Readonly` **options**: Required&#60;[StoreOptions](../interfaces/storeoptions.md)>

_Defined in [packages/core/src/store.ts:35](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L35)_

## Accessors

### name

• get **name**(): string

_Defined in [packages/core/src/store.ts:250](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L250)_

**`internal`**

**Returns:** string

## Methods

### assign

▸ **assign**(`config`: TConfig): this

_Defined in [packages/core/src/store.ts:155](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L155)_

Given a config, will recursively merge all of its properties onto this instance's config.
If a Group (ie `Store`) is encountered, it will correctly merge those properties onto that Group.

#### Parameters:

| Name     | Type    | Description                                     |
| -------- | ------- | ----------------------------------------------- |
| `config` | TConfig | The config to merge with this instance's config |

**Returns:** this

---

### get

▸ **get**&#60;T>(`accessor`: string): T

_Defined in [packages/core/src/store.ts:67](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L67)_

The primary way to retrieve values from the [Store](store.md).
Can traverse through `Group` as well.

**`example`**

```
const store = new Store();

const value = store.get("path.to.my.thing");
```

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name       | Type   | Description                                     |
| ---------- | ------ | ----------------------------------------------- |
| `accessor` | string | the path to the desired value within the store. |

**Returns:** T

---

### getOrThrow

▸ **getOrThrow**&#60;T>(`accessor`: string): T

_Defined in [packages/core/src/store.ts:96](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L96)_

If the given accessor is not present on the store or the returned value is `null`,
an error will be thrown.

[Store.get](store.md#get)

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

_Defined in [packages/core/src/store.ts:230](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L230)_

Get or set a sub-`Store` (group). Once a group has been created, you can register loaders
specfic to that group. Calling `Store#init` on the parent `Store` will also initialize all the groups
registered to that `Store` instance.

**`example`**

```
const store = new Store();

store.registerLoader(new Loader());

const group = store.group("myGroup");

group.registerLoader(new Loader());

await store.init();
```

#### Parameters:

| Name   | Type   | Description                                                                       |
| ------ | ------ | --------------------------------------------------------------------------------- |
| `name` | string | The name of the group. This name is also how you access the group after creation. |

**Returns:** [Store](store.md)

---

### has

▸ **has**(`accessor`: string): boolean

_Defined in [packages/core/src/store.ts:129](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L129)_

Check if a particular accessor exists in the config.

#### Parameters:

| Name       | Type   | Description                                     |
| ---------- | ------ | ----------------------------------------------- |
| `accessor` | string | the path to the desired value within the store. |

**Returns:** boolean

---

### init

▸ **init**(): Promise&#60;void>

_Defined in [packages/core/src/store.ts:174](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L174)_

Used to initialize the `Store` and process all registered `Loaders` and groups within.

**Returns:** Promise&#60;void>

---

### registerLoader

▸ **registerLoader**(`loader`: [Loader](loader.md)): this

_Defined in [packages/core/src/store.ts:141](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L141)_

Register a `Loader` to this `Store`. Use [Store.init](store.md#init) to initialize all of the Store's
registered loaders.

#### Parameters:

| Name     | Type                | Description           |
| -------- | ------------------- | --------------------- |
| `loader` | [Loader](loader.md) | Any `Loader` subclass |

**Returns:** this

---

### set

▸ **set**(`accessor`: string, `value`: unknown): TConfig

_Defined in [packages/core/src/store.ts:114](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L114)_

Manually set a value to the `Store`.
In most circumstances, you should not need to use this directly.

#### Parameters:

| Name       | Type    | Description                                     |
| ---------- | ------- | ----------------------------------------------- |
| `accessor` | string  | the path to the desired value within the store. |
| `value`    | unknown | the value to set at `accessor`                  |

**Returns:** TConfig

---

### toJSON

▸ **toJSON**(): Record&#60;string, unknown>

_Defined in [packages/core/src/store.ts:190](https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/store.ts#L190)_

Serialize the Store's configuration object. This will traverse all groups as well.

**Returns:** Record&#60;string, unknown>
