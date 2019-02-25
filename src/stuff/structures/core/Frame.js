const { mergeDefaults } = require('../../util/Util');
const { join } = require('path');

/**
 * The base class for everything in Solis
 */
class Frame {
    /**
     * @typedef {Object} FrameOptions
     * @property {string} [name=theFileName] Name of the event
     * @property {Boolean} [enabled=true] Whether the event is enabled or not
     */

    /**
     * Initializes a new Frame
     * @param {SolisClient} client The client that initialized this frame
     * @param {Store} cache The cache this piece is for
     * @param {string[]} file The path from the Frame's folder to the extendable file
     * @param {string} directory The base directory to the frames' folder
     * @param {FrameOptions} [options={}] The options for this frame
     */
    constructor(client, cache, file, directory, options = {}) {

        /**
         * The client that initialized this Frame
         * @type {SolisClient}
         */
        this.client = client;

        /**
         * The file where this piece resides
         * @type {string[]}
         */
        this.file = file;

        /**
         * The name of the Frame
         * @type {string}
         */
        this.name = options.name || file[file.length - 1].slice(0, -3);

        /**
         * Whether this Frame is enabled
         * @type {Boolean}
         */
        this.enabled = options.enabled || true;

        /**
         * The Cache for this Frame
         * @type {Cache}
         */
        this.cache = cache;

        /**
         * The base directory for this Frame
         * @type {string}
         */
        this.directory = directory;
    }

    /**
     * The type of Frame
     * @type {string}
     * @readonly
     */
    get type() {
        return this.cache.name.slice(0, -1);
    }
}

module.exports = Frame;