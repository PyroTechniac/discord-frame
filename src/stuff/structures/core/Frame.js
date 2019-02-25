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
     * @param {Store} box The box this piece is for
     * @param {string[]} file The path from the Frame's folder to the extendable file
     * @param {string} directory The base directory to the frames' folder
     * @param {FrameOptions} [options={}] The options for this frame
     */
    constructor(client, box, file, directory, options = {}) {

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
         * The box for this Frame
         * @type {Box}
         */
        this.box = box;

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
        return this.box.name.slice(0, -1);
    }

    /**
     * The absolute path to the frame
     */
    get path() {
        return join(this.directory, ...this.file);
    }

    /**
     * Reloads the Frame
     * @returns {Frame} The newly loaded Frame
     */
    async reload() {
        const frame = this.box.load(this.directory, this.file);
        await frame.init();
        if (this.client.listenerCount('frameReloaded')) this.client.emit('frameReloaded', frame);
        return frame;
    }

    /**
     * Unloads the frame
     * @returns {void}
     */
    unload() {
        if (this.client.listenerCount('frameUnloaded')) this.client.emit('frameUnloaded', this);
        return this.box.delete(this);
    }

    /**
     * Disables a Frame
     * @returns {Frame} The Frame that was disabled
     * @chainable
     */
    disable() {
        if (this.client.listenerCount('frameDisabled')) this.client.emit('frameDisabled', this);
        this.enabled = false;
        return this;
    }

    /**
     * Enables a frame
     * @returns {Frame} The frame that was enabled
     * @chainable
     */
    enable() {
        if (this.client.listenerCount('frameEnabled')) this.client.emit('frameEnabled', this);
        this.enabled = true;
        return this;
    }

    /**
     * The init method that can be overwritten in other Frames
     * @returns {*}
     * @abstract
     */
    async init() {
        // Optional method defined in child classes
    }

    /**
     * Defines the `toString()` behavior for Frames
     * @returns {string} The Frame's name
     */
    toString() {
        return this.name;
    }

    /**
     * Defines behavior for the JSON.stringify method
     * @returns {Object}
     */
    toJSON() {
        return {
            directory: this.directory,
            file: this.file,
            path: this.path,
            name: this.name,
            type: this.type,
            enabled: this.enabled
        };
    }
}

module.exports = Frame;