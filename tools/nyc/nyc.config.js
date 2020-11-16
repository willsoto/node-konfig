module.exports = {
  all: true,
  branches: 90,
  "check-coverage": true,
  extends: "@istanbuljs/nyc-config-typescript",
  functions: 90,
  lines: 90,
  reporter: ["text-summary", "html"],
  statements: 90,
};
