const path = require("path");

const packagesRoot = path.resolve(__dirname, "..", "packages");
const packages = ["consul", "core", "etcd", "http", "vault"];

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
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
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
          type: "doc",
          position: "left",
          label: "API",
          activeBasePath: "/api",
          docId: "api/index",
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
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        inputFiles: packages.map((package) => {
          return path.join(packagesRoot, package, "src");
        }),

        // TypeDoc options (see typedoc --help)
        mode: "file",
        readme: "none",

        // tsconfig options
        esModuleInterop: true,
        module: "commonjs",
        skipLibCheck: true,
        strict: true,
        target: "es2018",
      },
    ],
  ],
};
