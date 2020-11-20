---
id: overview
title: Overview
---

A loader defines how values get added to the store. Values can be loaded synchronously or asynchronously into the store.

## Shared options

All loader implementation share these options although some loaders may not implement them if they don't make sense for that loader.

| Name            | Description                                                                                                                        | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `stopOnFailure` | Whether or not the loader should stop immediately if an error is encountered. This will cause subsequent loaders not be processed. | `true`  |
| `maxRetries`    | The number of times a loader should attempt to load values before giving up.                                                       | `0`     |
| `retryDelay`    | The amount of time to wait between retry attempts.                                                                                 | `0`     |

## Core loaders

The following loaders are included by default in `node-konfig-core`:

- [`FileLoader`](file.md)
- [`EnvLoader`](env.md)
- [`FlagLoader`](flag.md)
- [`ValueLoader`](value.md)
