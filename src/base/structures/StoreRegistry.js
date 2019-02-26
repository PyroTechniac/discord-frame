const BaseStore = require('./core/BaseStore');

class StoreRegistry extends BaseStore {
    constructor(client) {
        super(client);
    }
}

module.exports = StoreRegistry;