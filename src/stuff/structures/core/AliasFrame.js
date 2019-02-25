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
}