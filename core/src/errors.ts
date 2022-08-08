export class KeyNotFoundError extends Error {
  constructor(key: string) {
    super(`Key not found: ${key}`);
  }
}

export class NoValueForKeyError extends Error {
  constructor(key: string) {
    super(`No value found for key: ${key}`);
  }
}

export class ValueNotFoundError extends Error {
  constructor() {
    super("Value not found");
  }
}
