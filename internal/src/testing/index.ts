import path from "node:path";
import { fileURLToPath } from "node:url";

// https://github.com/nodejs/help/issues/2907#issuecomment-757446568
export function filename(meta: ImportMeta) {
  return fileURLToPath(meta.url);
}

// https://github.com/nodejs/help/issues/2907#issuecomment-757446568
export function dirname(meta: ImportMeta) {
  return path.dirname(filename(meta));
}
