const { Collection } = require('discord.js');
class Store extends Collection {
    constructor(client, holds) {
        super();

        Object.defineProperty(this, 'client', { value: client });

        Object.defineProperty(this, 'holds', { value: holds });
    }

}

module.exports = Store;