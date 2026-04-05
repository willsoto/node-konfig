# @willsoto/node-konfig-yaml-parser

## 6.0.0

### Major Changes

- 9c45717: Upgrade dependencies with breaking changes

  ### Breaking Changes
  - **Consul loader**: Remove deprecated Consol dep and just make simple HTTP call. Options have changed.
  - **Flag loader**: Upgraded `meow` to v14. The `alias` option on flags has been renamed to `shortFlag`
  - **Etcd loader**: Removed the deprecated `@willsoto/node-konfig-etcd` package
  - **Lockstep versioning**: All publishable packages are now in a fixed version group and will be released together

### Patch Changes

- Updated dependencies [9c45717]
  - @willsoto/node-konfig-core@6.0.0

## 3.0.0

### Major Changes

- 63584e9: All packages are now ESM only.

### Patch Changes

- Updated dependencies [63584e9]
  - @willsoto/node-konfig-core@5.0.0

## 2.0.0

### Minor Changes

- b12245a: Convert to PNPM

### Patch Changes

- Updated dependencies [b12245a]
  - @willsoto/node-konfig-core@4.1.0
