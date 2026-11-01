import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: ["core", "loaders/*", "parsers/*"],
    coverage: {
      provider: "v8",
      include: ["core/src/**/*.ts", "loaders/*/src/**/*.ts", "parsers/*/src/**/*.ts"],
      thresholds: {
        lines: 100,
        functions: 100,
        statements: 100,
        "core/src/**": {
          lines: 90,
          functions: 90,
          statements: 90,
        },
      },
    },
  },
});
