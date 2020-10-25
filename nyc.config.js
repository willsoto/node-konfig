module.exports = {
  all: true,
  branches: 90,
  "check-coverage": true,
  extends: "@istanbuljs/nyc-config-typescript",
  functions: 90,
  lines: 90,
  reporter: ["text-summary", "html"],
  statements: 90,
  watermarks: {
    lines: [80, 90],
    functions: [80, 90],
    branches: [80, 90],
    statements: [80, 90],
  },
};
