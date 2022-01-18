const fs = require('fs'), path = require('path');
const react = require("@vitejs/plugin-react");
const { defineConfig } = require("vite");
const rimraf = require('rimraf');

const cache = path.resolve("node_modules/.vite");
if(fs.existsSync(cache)) {
    rimraf.sync(cache);
}

module.exports = defineConfig({
    root: "src", 
    plugins: [react()],
    preserveSymlinks: true,
    optimizeDeps: {
        include: ['@reactsmile/icons'],
    },
    build: {
        commonjsOptions: { exclude: ['@reactsmile/icons'], include: [] },
    },
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['../..']
      }
    }
});