const { join, extname, relative, sep } = require('path');
const fs = require('fs-nextra');
const { isClass } = require('../../util/Util');
const { Collection } = require('discord.js');

/**
 * The common base for all Caches
 * @extends external:Collection
 */
class Cache extends Collection {
    constructor(client, name, holds) {
        super();

        /**
         * The {@link SolisClient} that initialized this Cache
         * @name Cache#client
         * @type {SolisClient}
         * @readonly
         */
        Object.defineProperty(this, 'client', { value: client });

        /**
         * The name of what this holds
         * @name Cache#name
         * @type {string}
         * @readonly
         */
        Object.defineProperty(this, 'name', { value: name });

        /**
         * The type of structure this store holds
         * @name Cache#holds
         * @type {Frame}
         * @readonly
         */
        Object.defineProperty(this, 'holds', { value: holds });

        /**
         * The base directories of the Frame's this store holds
         * @name Cache#baseDirectories
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
     * @returns {Cache}
     * @protected
     */
    registerBaseDirectory(directory) {
        this.baseDirectories.add(directory + this.name);
        return this;
    }
}

/**
 * @external Collection
 * @see {@link https://discord.js.org/#/docs/main/master/class/Collection}
 */

module.exports = Cache;