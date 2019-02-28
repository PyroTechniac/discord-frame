const path = require('path');
const fs = require('fs-nextra');

class Command {
    constructor(client, info) {
        Object.defineProperty(this, 'client', { value: client });

        this.name = info.name.toLowerCase();

        this.execute = info.execute || this.default;
        Object.values(info).forEach(val => {
            if (typeof val === 'function') {
                if (val.name !== 'execute') {
                    this[val.name] = val;
                }
            }
        });
    }
    default() {
        // throw new Error('Test');
        console.log('Test');
    }
}

module.exports = Command;