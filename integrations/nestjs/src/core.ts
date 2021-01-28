import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
import { Store, StoreOptions } from "@willsoto/node-konfig-core";
import {
  NodeKonfigAsyncOptions,
  NodeKonfigModuleOptions,
  NodeKonfigOptionsFactory,
} from "./interfaces";

@Global()
@Module({})
export class NodeKonfigModule {
  public static register(options: NodeKonfigModuleOptions = {}): DynamicModule {
    return {
      module: NodeKonfigModule,
      providers: [
        {
          provide: options.name ?? Store,
          async useFactory() {
            const store = new Store(options.storeOptions);
            await store.init();

            return store;
          },
        },
      ],
    };
  }

  public static registerAsync(options: NodeKonfigAsyncOptions): DynamicModule {
    const asyncProviders = this.createAsyncProviders(options);

    return {
      module: NodeKonfigModule,
      imports: options.imports,
      providers: [...asyncProviders],
    };
  }

  private static createAsyncProviders(
    options: NodeKonfigAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    } else if (!options.useClass) {
      throw new Error(
        "Invalid configuration. Must provide useClass or useExisting",
      );
    }

    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: NodeKonfigAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: options.name ?? Store,
        async useFactory(...args: unknown[]) {
          const opts = await options.useFactory!(...args);

          const store = new Store(opts);
          await store.init();

          return store;
        },
        inject: options.inject || [],
      };
    }

    const inject = options.useClass || options.useExisting;

    return {
      provide: options.name ?? Store,
      async useFactory(
        optionsFactory: NodeKonfigOptionsFactory,
      ): Promise<StoreOptions> {
        const opts = await optionsFactory.createNodeKonfigOptions();

        const store = new Store(opts);
        await store.init();

        return store;
      },
      inject: inject ? [inject] : [],
    };
  }
}
