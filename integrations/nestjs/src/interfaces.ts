import { Type } from "@nestjs/common";
import { ModuleMetadata } from "@nestjs/common/interfaces";
import { StoreOptions } from "@willsoto/node-konfig-core";

export interface NodeKonfigModuleOptions {
  name?: string;
  storeOptions?: StoreOptions;
}

type FactoryReturn = Promise<StoreOptions> | StoreOptions;

/**
 * @internal
 */
export interface NodeKonfigOptionsFactory {
  createNodeKonfigOptions(): FactoryReturn;
}

/**
 * Options for configuring a dynamic provider
 *
 * @public
 */
export interface NodeKonfigAsyncOptions
  extends Pick<ModuleMetadata, "imports"> {
  /**
   * The name to use when registering the Store
   */
  name?: string;
  useExisting?: Type<NodeKonfigOptionsFactory>;
  useClass?: Type<NodeKonfigOptionsFactory>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inject?: any[];

  useFactory?(...args: unknown[]): FactoryReturn;
}
