module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    "tsdoc/syntax": "warn",
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
      extends: ["plugin:mocha/recommended"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-unused-expressions": "off",
        "no-magic-numbers": "off",
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};
