const path = require("path");
const { defineConfig } = require("vite");
const typescript = require("@rollup/plugin-typescript");

module.exports = defineConfig({
  server: {
    fs: {
      allow: [".."],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      fileName: (format) => `index.${format}.js`,
      name: "@yuigoto/vite-library-template",
    },
    rollupOptions: {
      plugins: [
        typescript({
          sourceMap: true,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "lib"),
    },
  },
});
