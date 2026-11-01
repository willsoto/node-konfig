# @willsoto/node-konfig-core

## 7.0.0

### Major Changes

- efea247: Require Node.js 24 or newer and ship major upgrades of runtime dependencies.

  - All packages now declare `engines.node: ">=24"`.
  - `@willsoto/node-konfig-yaml-parser`: `js-yaml` 4 → 5. Parsing behavior may differ for some documents.
  - `@willsoto/node-konfig-toml-parser`: `toml` 3 → 5. Parsing behavior may differ for some documents.
  - `@willsoto/node-konfig-core`: `cockatiel` 3 → 4. Custom loaders that interact with the `retryPolicy` inherited from `Loader` see cockatiel 4 types.
  - `@willsoto/node-konfig-vault`: `node-vault` 0.12 → 0.13.

## 6.0.0

### Major Changes

- 9c45717: Upgrade dependencies with breaking changes

  ### Breaking Changes
  - **Consul loader**: Remove deprecated Consol dep and just make simple HTTP call. Options have changed.
  - **Flag loader**: Upgraded `meow` to v14. The `alias` option on flags has been renamed to `shortFlag`
  - **Etcd loader**: Removed the deprecated `@willsoto/node-konfig-etcd` package
  - **Lockstep versioning**: All publishable packages are now in a fixed version group and will be released together

## 5.0.0

### Major Changes

- 63584e9: All packages are now ESM only.

## 4.1.0

### Minor Changes

- b12245a: Convert to PNPM
