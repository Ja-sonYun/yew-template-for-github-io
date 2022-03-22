const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require('fs');
const projectRoot = path.resolve(__dirname, "./");
const tailwind_dist = "./dist/tailwind.css"

try {
  if (fs.existsSync(tailwind_dist)) {
    const entryMap = ["./dist/tailwind.css"];  // run tailwind builder before this

    fs.readdirSync(projectRoot + "/css")
        .filter(file => {
            return file.match(/.*\.(scss|css)$/);
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
            test: /\.(scss|css)$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
    };
  }
} catch(err) {
  console.error("'./dist/tailwind.css' not found. run tailwind first.");
}
