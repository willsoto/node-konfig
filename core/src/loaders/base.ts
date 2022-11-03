import { ConstantBackoff, handleAll, retry, RetryPolicy } from "cockatiel";
import { Store } from "../store.js";

export interface LoaderOptions {
  stopOnFailure?: boolean;
  maxRetries?: number;
  retryDelay?: number;
}

export abstract class Loader {
  name = "base";
  stopOnFailure: boolean;
  maxRetries: number;
  retryDelay: number;

  constructor(options: LoaderOptions) {
    this.stopOnFailure = options.stopOnFailure ?? true;
    this.maxRetries = options.maxRetries ?? 0;
    this.retryDelay = options.retryDelay ?? 0;
  }

  protected get retryPolicy(): RetryPolicy {
    return retry(handleAll, {
      maxAttempts: this.maxRetries,
      backoff: new ConstantBackoff(this.retryDelay),
    });
  }

  abstract load(store: Store): void | Promise<void>;
}
