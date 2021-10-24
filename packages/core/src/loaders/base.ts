import { Policy, RetryPolicy } from "cockatiel";
import { Store } from "../store";

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
    return Policy.handleAll()
      .retry()
      .attempts(this.maxRetries)
      .delay(this.retryDelay);
  }

  abstract load(store: Store): void | Promise<void>;
}
