const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Node Konfig",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description,

  base: "/node-konfig/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "willsoto/node-konfig",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!",
    lastUpdated: true,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Loaders",
        link: "/loaders/",
      },
      {
        text: "Parsers",
        link: "/parsers/",
      },
      {
        text: "GitHub",
        link: "https://github.com/willsoto/node-konfig",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "usage", "getting-values", "groups"],
        },
      ],
      "/loaders/": [
        {
          title: "Loaders",
          collapsable: false,
          children: [
            "",
            "consul",
            "env",
            "etcd",
            "file",
            "flag",
            "http",
            "value",
            "vault",
          ],
        },
      ],
      "/parsers/": [
        {
          title: "Parsers",
          collapsable: false,
          children: [""],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
