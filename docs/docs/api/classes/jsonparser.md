---
id: "jsonparser"
title: "Class: JSONParser"
sidebar_label: "JSONParser"
---

## Hierarchy

- **JSONParser**

## Implements

- [Parser](../interfaces/parser.md)

## Properties

### name

• **name**: string = "json"

_Implementation of [Parser](../interfaces/parser.md).[name](../interfaces/parser.md#name)_

_Defined in [packages/core/src/parsers/json.ts:4](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/parsers/json.ts#L4)_

## Methods

### parse

▸ **parse**(`contents`: string): Record&#60;string, unknown>

_Implementation of [Parser](../interfaces/parser.md)_

_Defined in [packages/core/src/parsers/json.ts:6](https://github.com/willsoto/node-konfig/blob/b999a55/packages/core/src/parsers/json.ts#L6)_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `contents` | string |

**Returns:** Record&#60;string, unknown>
