const { Collection } = require('discord.js');
const { CustomError } = require('advancedjs');

class BaseStore extends Collection {
    constructor(client) {
        super();

        Object.defineProperty(this, 'client', { value: client });
    }
}

module.exports = BaseStore;