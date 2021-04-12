import * as Konfig from "@willsoto/node-konfig-core";

export const store = new Konfig.Store({
  loaders: [
    new Konfig.ValueLoader({
      values: {
        name: "express-development",
        database: {
          host: "localhosts",
          port: 5432,
          database: "development",
          password: "development",
        },
      },
    }),
  ],
});
