import { Injectable } from "@nestjs/common";
import { Store } from "@willsoto/node-konfig-core";

@Injectable()
export class AppService {
  constructor(private store: Store) {}

  getHello(): Record<string, unknown> {
    return this.store.toJSON();
  }
}
