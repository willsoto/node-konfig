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
    contributors: false,
    editLinkText: "Help us improve this page!",
    lastUpdated: true,
    navbar: [
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
          isGroup: true,
          children: [
            "/guide/README.md",
            "/guide/usage.md",
            "/guide/getting-values.md",
            "/guide/groups.md",
          ],
        },
      ],
      "/loaders/": [
        {
          title: "Loaders",
          isGroup: true,
          children: [
            "/loaders/README.md",
            "/loaders/consul.md",
            "/loaders/env.md",
            "/loaders/etcd.md",
            "/loaders/file.md",
            "/loaders/flag.md",
            "/loaders/http.md",
            "/loaders/value.md",
            "/loaders/vault.md",
          ],
        },
      ],
      "/parsers/": [
        {
          title: "Parsers",
          isGroup: true,
          children: ["/parsers/README.md"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
