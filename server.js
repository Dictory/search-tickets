require('babel-core/register');
require('babel-polyfill');

const path = require('path');
const hook = require('css-modules-require-hook');

const projectDir = path.resolve(__dirname);

['.css', '.ttf', '.woff', '.woff2'].forEach((ext) => { require.extensions[ext] = () => {}; });
hook({
  generateScopedName: '[path]___[name]__[local]___[hash:base64:5]',
  rootDir: projectDir,
});
require('server.jsx');
