import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Node Konfig",
  description: "Docs for node-konfig",
  base: "/node-konfig/",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    editLink: {
      pattern: "https://github.com/willsoto/node-konfig/edit/main/docs/:path",
    },
    sidebar: [
      {
        text: "Guide",
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: "Installation",
            link: "/guide/installation",
          },
          {
            text: "Usage",
            link: "/guide/usage",
          },
          {
            text: "Getting values",
            link: "/guide/getting-values",
          },
          {
            text: "Groups",
            link: "/guide/groups",
          },
          {
            text: "Property Autocomplete",
            link: "/guide/property-autocomplete",
          },
          {
            text: "Environment Loaders",
            link: "/guide/environment-loaders",
          },
        ],
      },
      {
        text: "Loaders",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "Overview",
            link: "/loaders/overview",
          },
          {
            text: "Consul",
            link: "/loaders/consul",
          },
          {
            text: "Env",
            link: "/loaders/env",
          },
          {
            text: "Etcd",
            link: "/loaders/etcd",
          },
          {
            text: "File",
            link: "/loaders/file",
          },
          {
            text: "Flag",
            link: "/loaders/flag",
          },
          {
            text: "HTTP",
            link: "/loaders/http",
          },
          {
            text: "Value",
            link: "/loaders/value",
          },
          {
            text: "Vault",
            link: "/loaders/vault",
          },
        ],
      },
      {
        text: "Parsers",
        collapsed: true,
        collapsible: true,
        items: [
          {
            text: "Overview",
            link: "/parsers/overview",
          },
          {
            text: "TOML",
            link: "/parsers/toml",
          },
          {
            text: "YAML",
            link: "/parsers/yaml",
          },
        ],
      },
      {
        text: "Integrations",
        collapsed: true,
        collapsible: true,
        items: [
          {
            text: "Examples",
            link: "/integrations",
          },
        ],
      },
    ],
  },
});
