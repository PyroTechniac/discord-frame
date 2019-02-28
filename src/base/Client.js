const Discord = require('discord.js');
const { CustomError } = require('advancedjs');
const path = require('path');
const CommandStore = require('./structures/CommandStore');
class SolisClient extends Discord.Client {
    constructor(options = {}) {
        super(options);

        this.prefix = options.prefix || '/';

        this.baseDirectory = path.dirname(require.main.filename);

        this.stores = new Discord.Collection();

        this.commands = new CommandStore(this);
    }
}

module.exports = SolisClient;