require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [require.resolve("@node-konfig-tools/eslint")],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.lint.json",
  },
};
