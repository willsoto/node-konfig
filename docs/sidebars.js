module.exports = {
  docs: {
    "Getting started": [
      "getting-started/installation",
      "getting-started/usage",
    ],
    Loaders: [
      "loaders/overview",
      "loaders/file",
      "loaders/env",
      "loaders/flag",
      "loaders/value",
      "loaders/http",
      "loaders/vault",
      "loaders/consul",
      "loaders/etcd",
    ],
    Parsers: ["parsers/overview"],
    API: require("./typedoc-sidebar"),
  },
};
