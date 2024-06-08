const path = require('path');
const template = require('./template.cjs');

module.exports = {
  icon: true,
  typescript: true,
  jsxRuntime: 'automatic',
  svgProps: {
    width: '24px',
    height: '24px',
  },
  replaceAttrValues: {
    primaryColor: '{primaryColor}',
    secondaryColor: '{secondaryColor}',
    strokeWidth: '{props.strokeWidth ?? 1.2}',
    stroke: '{props.stroke}',
  },
  outDir: 'lib',
  dimensions: false,
  template,
  indexTemplate: filePaths => {
    const exportEntries = filePaths.map(({ path: filePath }) => {
      const basename = path.basename(filePath, path.extname(filePath));

      return `export { ${basename} } from './${basename}'`;
    });
    return exportEntries.join('\n');
  },
};
