const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

jsdoc2md.render({ files: './src/stuff/**' }).then(data => fs.writeFileSync('./docs/docs.md', data));