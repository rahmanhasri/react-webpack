const path = require('path');

module.exports = {
  // put entry point to source/index.js instead of src/index.js
  entry: { index: path.resolve(__dirname, 'source', 'index.js') },
  // put the bundle output to build/ instead of dist/
  output: path.resolve(__dirname, 'build'),
};