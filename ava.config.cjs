module.exports = {
  extensions: {
    ts: "module",
  },
  files: ["test/**/*.spec.ts"],
  verbose: true,
  nodeArguments: ["--loader=ts-node/esm", "--no-warnings"],
  timeout: "10s",
};
