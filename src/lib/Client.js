const { Client } = require('discord.js');

class SolisClient extends Client {
    constructor(options = {}) {
        super({});

        this.prefix = options.prefix || '!';
    }
}

module.exports = SolisClient;