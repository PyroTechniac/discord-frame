const Frame = require('./Frame');

/**
 * The common class for any Frame with an alias
 * @extends {Frame}
 */
class AliasFrame extends Frame {
    constructor(client, cache, file, directory, options = {}) {
        super(client, cache, file, directory, options);

        /**
         * The aliases for this Frame
         * @type {string[]}
         */
        this.aliases = options.aliases;
    }


    toJSON() {
        const obj = super.toJSON();
        obj.aliases = this.aliases.slice(0);
        return obj;
    }
}

module.exports = AliasFrame;