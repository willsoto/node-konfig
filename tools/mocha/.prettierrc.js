module.exports = {
  ...require("../../.prettierrc.js"),
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-packagejson"),
  ],
};
