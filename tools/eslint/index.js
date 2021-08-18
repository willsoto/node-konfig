module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/member-ordering": "error",
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["*.spec.ts"],
      env: {
        mocha: true,
      },
      extends: ["plugin:mocha/all"],
      rules: {
        "mocha/no-synchronous-tests": "off",
      },
    },
  ],
};
