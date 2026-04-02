---
"@willsoto/node-konfig-consul": major
"@willsoto/node-konfig-vault": major
"@willsoto/node-konfig-file": major
"@willsoto/node-konfig-flag": major
"@willsoto/node-konfig-http": major
"@willsoto/node-konfig-toml-parser": major
"@willsoto/node-konfig-yaml-parser": major
"@willsoto/node-konfig-core": major
"@node-konfig/internal": patch
---

Upgrade dependencies with breaking changes

### Breaking Changes

- **Consul loader**: Remove deprecated Consol dep and just make simple HTTP call. Options have changed.
- **Flag loader**: Upgraded `meow` to v14. The `alias` option on flags has been renamed to `shortFlag`
- **Etcd loader**: Removed the deprecated `@willsoto/node-konfig-etcd` package
- **Lockstep versioning**: All publishable packages are now in a fixed version group and will be released together
