module.exports = {
  trailingComma: "all",
  arrowParens: "always",
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-packagejson"),
  ],
};
