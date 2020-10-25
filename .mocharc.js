const path = require("path");

module.exports = {
  extension: ["ts"],
  file: path.join(__dirname, "ad-hocs", "mocha", "plugins.ts"),
  recursive: true,
  require: [
    "ts-node/register",
    "source-map-support/register",
    path.join(__dirname, "ad-hocs", "mocha", "hooks.ts"),
  ],
  sort: true,
};
