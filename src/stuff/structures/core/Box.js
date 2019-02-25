const { join, extname, relative, sep } = require('path');
const fs = require('fs-nextra');
const { isClass } = require('../../util/Util');
const { Collection } = require('discord.js');
const { CustomError } = require('advancedjs');

/**
 * The common base for all Boxes
 * @extends external:Collection
 */
class Box extends Collection {
    constructor(client, name, holds) {
        super();

        /**
         * The {@link SolisClient} that initialized this Box
         * @name Box#client
         * @type {SolisClient}
         * @readonly
         */
        Object.defineProperty(this, 'client', { value: client });

        /**
         * The name of what this holds
         * @name Box#name
         * @type {string}
         * @readonly
         */
        Object.defineProperty(this, 'name', { value: name });

        /**
         * The type of structure this store holds
         * @name Box#holds
         * @type {Frame}
         * @readonly
         */
        Object.defineProperty(this, 'holds', { value: holds });

        /**
         * The base directories of the Frame's this store holds
         * @name Box#baseDirectories
         * @type {Set<string>}
         * @readonly
         */
        Object.defineProperty(this, 'baseDirectories', { value: new Set() });
    }

    /**
     * The directory of local Frames relative to where you can run Framing from
     * @type {string}
     * @readonly
     */
    get userDirectory() {
        return join(this.client.userBaseDirectory, this.name);
    }

    /**
     * Registers a base directory to check for frames
     * @param {string} directory The directory to check for base frames
     * @returns {Box}
     * @protected
     */
    registerBaseDirectory(directory) {
        this.baseDirectories.add(directory + this.name);
        return this;
    }

    /**
     * Initializes every frame in this Box
     * @returns {Promise<Array<*>>}
     */
    init() {
        return Promise.all(this.map(frame => frame.enabled ? frame.init() : frame.unload()));
    }

    /**
     * Loads a Frame so it can be used
     * @param {string} directory The directory of the frame
     * @param {string[]} file A string or array of strings where the file is located
     * @returns {?Frame}
     */
    load(directory, file) {
        const loc = join(directory, file);
        let frame = null;
        try {
            const Frame = (req => req.default || req)(require(loc));
            if (!isClass(Frame)) throw new CustomError('The exported structure is not a class', 'ClassError');
            frame = this.set(new Frame(this.client, this, file, directory));
        } catch (error) {
            this.client.emit('fail', `Failed to load file ${loc}, Error:\n${error.stack || error}`);
        }
        delete require.cache[loc];
        module.children.pop();
        return frame;
    }

    /**
     * Loads everything, both custom Frames and built in ones
     * @returns {number} The number of frames loaded
     */
    async loadAll() {
        this.clear();
        if (!this.client.options.disabledBasePieces.includes(this.name)) {
            for (const directory of this.baseDirectories) await Box.walk(this, directory);
        }
        await Box.walk(this);
        return this.size;
    }

    /**
     * Walks through to enable all the Frames, both user defined and built in
     * @param {Box} box The box that's being loaded
     * @param {string} [directory=box.userDirectory] The directory to walk into
     * @returns {Array<Frame>}
     * @private
     */
    static async walk(box, directory = box.userDirectory) {
        const files = await fs.scan(directory, { filter: (stats, path) => stats.isFile() && extname(path) === 'js' })
            .catch(() => { if (box.client.options.createFrameFolders) fs.ensureDir(directory).catch(err => box.client.emit('error', err)); });
        if (!files) return true;

        return Promise.all([...files.keys()].map(file => box.load(directory, relative(directory, file).split(sep))));
    }

    /**
     * Sets up a Frame in the Box
     * @param {Frame} frame The frame to be set up
     * @returns {?Frame}
     */
    set(frame) {
        if (!(frame instanceof this.holds)) return this.client.emit('error', `Only ${this} may be stored in this class`);
        const existing = this.get(frame.name);
        if (existing) this.delete(existing);
        else if (this.client.listenerCount('frameLoaded')) this.client.emit('frameLoaded', frame);
        super.set(frame.name, frame);
        return frame;
    }

    /**
     * Deletes a frame from the store
     * @param {Frame|string} name A frame object or name representing a frame
     * @returns {Boolean} Whether or not something was deleted
     */
    delete(name) {
        const frame = this.resolve(name);
        if (!frame) return false;
        super.delete(frame.name);
        return true;
    }

    /**
     * Resolves a name into a Frame instance
     * @param {Frame|string} name The Frame object or a string representing the Frame's name
     * @returns {Frame}
     */
    resolve(name) {
        if (name instanceof this.holds) return name;
        return this.get(name);
    }
}

/**
 * @external Collection
 * @see {@link https://discord.js.org/#/docs/main/master/class/Collection}
 */

module.exports = Box;