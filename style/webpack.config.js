const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require('fs');
const projectRoot = path.resolve(__dirname, "./");
const tailwind_dist = "./dist/tailwind.css"

function findAllCssExtensions(dir) {
  const extensions = [];
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = `${dir}/${file}`;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      extensions.push(...findAllCssExtensions(filePath));
    } else if (file.endsWith('.css') || file.endsWith('.scss')) {
      extensions.push(filePath);
    }
  });
  return extensions;
}

try {
  if (fs.existsSync(tailwind_dist)) {
    const entryMap = ["./dist/tailwind.css"].concat(findAllCssExtensions(projectRoot));  // run tailwind builder before this

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
