const { SolisClient } = require('../src/index');

const cli = new SolisClient({ disableEveryone: true });
cli.register();
console.log(cli.commands);