module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/@typescript-eslint",
  ],
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
