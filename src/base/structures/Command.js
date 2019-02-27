const path = require('path');
const fs = require('fs-nextra');

class Command {
    constructor(client, info) {
        Object.defineProperty(this, 'client', { value: client });

        this.name = info.name;
    }
}

module.exports = Command;