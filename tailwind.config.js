const fs = require('fs');

function findAllRsExtensions(dir) {
  const extensions = [];
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = `${dir}/${file}`;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      extensions.push(...findAllRsExtensions(filePath));
    } else if (file.endsWith('.rs')) {
      extensions.push(filePath);
    }
  });
  return extensions;
}

module.exports = {
  content: findAllRsExtensions("./src"),
  theme: {
    container: {
      center: true,
    }
  },
  plugins: [],
}
