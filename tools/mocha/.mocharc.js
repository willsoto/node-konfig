const path = require("path");

module.exports = {
  extension: ["ts"],
  recursive: true,
  require: [
    "ts-node/register",
    "source-map-support/register",
    path.join(__dirname, "src", "plugins.ts"),
    path.join(__dirname, "src", "hooks.ts"),
  ],
};
