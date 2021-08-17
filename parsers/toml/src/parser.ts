import { Parser } from "@willsoto/node-konfig-core";
import * as toml from "toml";

export class TOMLParser implements Parser {
  name = "toml";

  parse(contents: string): Record<string, unknown> {
    return toml.parse(contents) as Record<string, unknown>;
  }
}
