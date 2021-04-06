import { RootHookObject } from "mocha";
import * as sinon from "sinon";

export const mochaHooks: () => RootHookObject = () => {
  return {
    afterEach() {
      // https://sinonjs.org/releases/v9.1.0/general-setup/
      sinon.restore();
    },
  };
};
