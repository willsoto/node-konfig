import { Parser } from "./interface";

export class JSONParser implements Parser {
  name = "json";

  parse(contents: string): Record<string, unknown> {
    return JSON.parse(contents) as Record<string, unknown>;
  }
}
