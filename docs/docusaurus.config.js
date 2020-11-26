module.exports = {
  title: "Node Konfig",
  tagline: "Configuration library for Node.js",
  url: "https://willsoto.github.io",
  baseUrl: "/node-konfig/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "willsoto", // Usually your GitHub org/user name.
  projectName: "node-konfig", // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "Node Konfig",
      items: [
        {
          to: "/",
          activeBasePath: "/",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/willsoto/node-konfig",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/willsoto/node-konfig/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
