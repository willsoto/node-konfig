---
id: "yamlparser"
title: "Class: YAMLParser"
sidebar_label: "YAMLParser"
---

## Hierarchy

- **YAMLParser**

## Implements

- [Parser](../interfaces/parser.md)

## Constructors

### constructor

\+ **new YAMLParser**(`yamlLoadOptions?`: LoadOptions): [YAMLParser](yamlparser.md)

_Defined in [packages/core/src/parsers/yaml.ts:7](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/parsers/yaml.ts#L7)_

#### Parameters:

| Name              | Type        | Default value |
| ----------------- | ----------- | ------------- |
| `yamlLoadOptions` | LoadOptions | {}            |

**Returns:** [YAMLParser](yamlparser.md)

## Properties

### name

• **name**: string = "yaml"

_Implementation of [Parser](../interfaces/parser.md).[name](../interfaces/parser.md#name)_

_Defined in [packages/core/src/parsers/yaml.ts:7](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/parsers/yaml.ts#L7)_

---

### yamlLoadOptions

• `Readonly` **yamlLoadOptions**: LoadOptions

_Defined in [packages/core/src/parsers/yaml.ts:5](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/parsers/yaml.ts#L5)_

## Methods

### parse

▸ **parse**(`contents`: string): Record&#60;string, unknown>

_Implementation of [Parser](../interfaces/parser.md)_

_Defined in [packages/core/src/parsers/yaml.ts:13](https://github.com/willsoto/node-konfig/blob/9b8a7e5/packages/core/src/parsers/yaml.ts#L13)_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `contents` | string |

**Returns:** Record&#60;string, unknown>
