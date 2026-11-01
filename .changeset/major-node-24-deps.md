---
"@willsoto/node-konfig-core": major
---

Require Node.js 24 or newer and ship major upgrades of runtime dependencies.

- All packages now declare `engines.node: ">=24"`.
- `@willsoto/node-konfig-yaml-parser`: `js-yaml` 4 → 5. Parsing behavior may differ for some documents.
- `@willsoto/node-konfig-toml-parser`: `toml` 3 → 5. Parsing behavior may differ for some documents.
- `@willsoto/node-konfig-core`: `cockatiel` 3 → 4. Custom loaders that interact with the `retryPolicy` inherited from `Loader` see cockatiel 4 types.
- `@willsoto/node-konfig-vault`: `node-vault` 0.12 → 0.13.
