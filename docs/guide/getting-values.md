# Getting values

```typescript
import Knex from "knex";
import { store } from "./store";

const database = store.get("database");

const knex = Knex(database);
```
