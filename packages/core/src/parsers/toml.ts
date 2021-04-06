import * as toml from "toml";
import { Parser } from "./interface";

export class TOMLParser implements Parser {
  name = "toml";

  parse(contents: string): Record<string, unknown> {
    return toml.parse(contents) as Record<string, unknown>;
  }
}
