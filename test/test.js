const { SolisClient } = require('../src/index');

const cli = new SolisClient({ disableEveryone: true });
cli.register().registerDefaults();
console.log(cli.commands);
process.exit();