---
"@willsoto/node-konfig-core": major
---

`Store#assign` now recursively merges plain objects instead of replacing them per top-level key. This affects every loader that writes through `assign`, notably `FileLoader`: a later file only needs to contain the nested properties it changes. Scalars, arrays and class instances are still replaced. If you relied on a later object replacing an earlier one wholesale, that no longer happens.

`Store#get` and `Store#getOrThrow` no longer return an intermediate scalar when the path continues past it: `get("port.host")` is now `undefined` (and `getOrThrow` throws `NoValueForKeyError`) when `port` is not an object.
