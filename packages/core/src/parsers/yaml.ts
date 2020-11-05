import yaml from "js-yaml";
import { Parser } from "./interface";

export class YAMLParser implements Parser {
  private yamlLoadOptions: yaml.LoadOptions;

  name = "yaml";

  constructor(yamlLoadOptions: yaml.LoadOptions = {}) {
    this.yamlLoadOptions = yamlLoadOptions;
  }

  parse(contents: string): Record<string, unknown> {
    return yaml.safeLoad(contents, this.yamlLoadOptions) as Record<
      string,
      unknown
    >;
  }
}
