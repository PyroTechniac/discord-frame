const Discord = require('discord.js');
const { CustomError } = require('advancedjs');
const path = require('path');
const StoreRegistry = require('./structures/StoreRegistry');

class SolisClient extends Discord.Client {
    constructor(options = {}) {
        super(options);

        this.baseDirectory = path.dirname(require.main.filename);

        this.stores = new StoreRegistry(this);
    }
}

module.exports = SolisClient;