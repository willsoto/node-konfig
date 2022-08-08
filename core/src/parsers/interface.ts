export interface Parser {
  name: string;
  parse(contents: string): Record<string, unknown>;
}
