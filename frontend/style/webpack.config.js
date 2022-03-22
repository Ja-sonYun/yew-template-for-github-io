const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require('fs');
const projectRoot = path.resolve(__dirname, "./");
const entryMap = [];

fs.readdirSync(projectRoot + "/css")
    .filter(file => {
        return file.match(/.*\.scss$/);
    })
    .forEach(f => {
        entryMap.push("./css/" + f)
    });

module.exports = {
  mode: "development",
  entry: entryMap,
  output: {
    path: projectRoot + "/dist",
    filename: "style.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
