module.exports = {
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "always",
  semi: true,
  plugins: [
    require.resolve("prettier-plugin-packagejson"),
    require.resolve("prettier-plugin-organize-imports"),
  ],
};
