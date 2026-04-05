# @node-konfig/internal

## 0.1.1

### Patch Changes

- 9c45717: Upgrade dependencies with breaking changes

  ### Breaking Changes
  - **Consul loader**: Remove deprecated Consol dep and just make simple HTTP call. Options have changed.
  - **Flag loader**: Upgraded `meow` to v14. The `alias` option on flags has been renamed to `shortFlag`
  - **Etcd loader**: Removed the deprecated `@willsoto/node-konfig-etcd` package
  - **Lockstep versioning**: All publishable packages are now in a fixed version group and will be released together
