import { Parser } from "@willsoto/node-konfig-core";
import * as yaml from "js-yaml";

export class YAMLParser implements Parser {
  readonly yamlLoadOptions: yaml.LoadOptions;

  name = "yaml";

  constructor(yamlLoadOptions: yaml.LoadOptions = {}) {
    this.yamlLoadOptions = yamlLoadOptions;
  }

  parse(contents: string): Record<string, unknown> {
    return yaml.load(contents, this.yamlLoadOptions) as Record<string, unknown>;
  }
}
