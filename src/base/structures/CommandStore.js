const Store = require('./core/Store');
const fs = require('fs-nextra');
const path = require('path');
const Command = require('./Command');
class CommandStore extends Store {
    constructor(client) {
        super(client, 'commands');
    }
    register() {
        fs.ensureDir(path.join(this.client.baseDirectory, this.holds)).then(() => {
            fs.readdir(path.join(this.client.baseDirectory, this.holds)).then(files => {
                files.filter(file => file.endsWith('.js')).map(name => name.slice(0, -3)).forEach(command => {
                    const cmdInfo = require(path.join(this.client.baseDirectory, 'commands', command));
                    const cmd = new Command(this.client, cmdInfo);
                    this.set(cmd.name, cmd);
                });
                return this;
            });
        });
    }
}

module.exports = CommandStore;