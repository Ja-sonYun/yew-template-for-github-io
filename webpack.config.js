const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');
const projectRoot = __dirname;
const cssSourceRoot = projectRoot + "/css"

function findAllCssExtensions(dir) {
  const extensions = [];
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = `${dir}/${file}`;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      extensions.push(...findAllCssExtensions(filePath));
    } else if ((file.endsWith('.css') || file.endsWith('.scss')) && !file.endsWith("tailwind_base.css")) {
      extensions.push(filePath);
    }
  });
  return extensions;
}

const entryMap = findAllCssExtensions(cssSourceRoot);  // run tailwind builder before this

module.exports = {
  mode: "development",
  entry: entryMap,
  output: {
    path: projectRoot + "/dist/css",
    filename: "style.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
