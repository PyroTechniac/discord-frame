const Store = require('./core/Store');
const fse = require('fs-nextra');
const fs = require('fs');
const path = require('path');
const Command = require('./Command');
class CommandStore extends Store {
    constructor(client) {
        super(client, 'commands');
    }
    register() {
        fse.ensureDir(path.join(this.client.baseDirectory, this.holds)).catch(err => { throw err; });
        const files = fs.readdirSync(path.join(this.client.baseDirectory, this.holds));
        files.filter(fileName => fileName.endsWith('.js')).map(name => name.slice(0, -3)).forEach(file => {
            const cmdInfo = require(path.join(this.client.baseDirectory, this.holds, file));
            const cmd = new Command(this.client, cmdInfo);
            this.set(cmd.name, cmd);
        });
        return this;
    }
    registerDefaults() {
        const files = fs.readdirSync(path.join(__filename, '..', '..', 'commands'));
        files.map(name => name.slice(0, -3)).forEach(file => {
            const cmdInfo = require(`../commands/${file}`);
            const cmd = new Command(this.client, cmdInfo);
            this.set(cmd.name, cmd);
        });
        return this;
    }
}

module.exports = CommandStore;