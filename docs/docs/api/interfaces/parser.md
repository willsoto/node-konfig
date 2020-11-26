---
id: "parser"
title: "Interface: Parser"
sidebar_label: "Parser"
---

## Hierarchy

- **Parser**

## Implemented by

- [JSONParser](../classes/jsonparser.md)
- [TOMLParser](../classes/tomlparser.md)
- [YAMLParser](../classes/yamlparser.md)

## Properties

### name

• **name**: string

_Defined in [packages/core/src/parsers/interface.ts:2](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/parsers/interface.ts#L2)_

## Methods

### parse

▸ **parse**(`contents`: string): Record&#60;string, unknown>

_Defined in [packages/core/src/parsers/interface.ts:3](https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/parsers/interface.ts#L3)_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `contents` | string |

**Returns:** Record&#60;string, unknown>
