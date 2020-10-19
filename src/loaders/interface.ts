import { Store } from "../store";

export interface Loader {
  name: string;
  load(store: Store): Promise<void>;
}
