import * as express from "express";
import { store } from "./config/store";

const app = express();

app.get("/config", (req, res) => {
  // Will be serialized as JSON
  res.send(store);
});

async function start() {
  await store.init();

  app.listen(3000);

  console.log("Application started on :3000");
}

void start();
