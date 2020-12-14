---
id: "tomlparser"
title: "Class: TOMLParser"
sidebar_label: "TOMLParser"
---

## Hierarchy

- **TOMLParser**

## Implements

- [Parser](../interfaces/parser.md)

## Properties

### name

• **name**: string = "toml"

_Implementation of [Parser](../interfaces/parser.md).[name](../interfaces/parser.md#name)_

_Defined in [packages/core/src/parsers/toml.ts:5](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/parsers/toml.ts#L5)_

## Methods

### parse

▸ **parse**(`contents`: string): Record&#60;string, unknown>

_Implementation of [Parser](../interfaces/parser.md)_

_Defined in [packages/core/src/parsers/toml.ts:7](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/parsers/toml.ts#L7)_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `contents` | string |

**Returns:** Record&#60;string, unknown>
