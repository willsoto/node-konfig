const path = require("path");

const rushPrettierNodeModulesPath = path.join(
  __dirname,
  "common",
  "autoinstallers",
  "rush-prettier",
  "node_modules",
);

module.exports = {
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "always",
  semi: true,
  plugins: [
    path.join(rushPrettierNodeModulesPath, "prettier-plugin-packagejson"),
    path.join(rushPrettierNodeModulesPath, "prettier-plugin-organize-imports"),
  ],
};
