const { SolisClient } = require('../src/index');

const cli = new SolisClient({ disableEveryone: true });
console.log(cli.commands);
process.exit();