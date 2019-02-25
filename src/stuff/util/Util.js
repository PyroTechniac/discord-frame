const { promisify } = require('util');
const { exec } = require('child_process');
const { CustomError } = require('advancedjs');

/**
 * A Utility class for use within Frame
 */
class Util {
    constructor() {
        throw new CustomError(`The class ${this.constructor.name} cannot be initialized`, 'ClassError');
    }

    /**
     * Checks whether the provided input is a function
     * @param {Function} input The function to check
     * @returns {Boolean} Whether the provided input was a function
     */
    static isFunction(input) {
        return typeof input === 'function';
    }

    /**
     * Checks whether the provided input is a class
     * @param {Function} input The class to check
     * @returns {Boolean} Whether the provided input was a class
     */
    static isClass(input) {
        return typeof input === 'function' &&
            typeof input.prototype === 'object' &&
            input.toString().substring(0, 5) === 'class';
    }

    /**
     * Checks whether the provided input is an object
     * @param {Object} input The object to check
     * @returns {Boolean} Whether the provided input was an object
     */
    static isObject(input) {
        return input && input.constructor === Object;
    }

    /**
     * Checks whether the provided input is a number
     * @param {Number} input The number to check
     * @returns {Boolean} Whether the provided input was a number
     */
    static isNumber(input) {
        return typeof input === 'number' && !isNaN(input) && Number.isFinite(input);
    }

    /**
     * Checks whether the provided input is a primitive type
     * @param {*} input The input to check
     * @returns {Boolean} Whether the provided input was a primitive type
     */
    static isPrimitive(input) {
        return Util.PRIMITIVE_TYPES.includes(typeof input);
    }

    /**
     * Checks whether the provided input is a promise
     * @param {Promise} input The promise to check
     * @returns {Boolean} Whether the provided input was a promise
     */
    static isThenable(input) {
        if (!input) return false;
        return (input instanceof Promise) ||
            (input !== Promise.prototype && Util.isFunction(input.then) && Util.isFunction(input.catch));
    }

    /**
     * Deeply clones a value
     * @param {*} input The object to clone
     * @returns {*} The cloned output
     */
    static deepClone(input) {
        if (input === null || Util.isPrimitive(input)) return input;
        if (Array.isArray(input)) {
            const out = [];
            for (const value of input) out.push(Util.deepClone(value));
            return out;
        }
        if (Util.isObject(input)) {
            const out = {};
            for (const [key, value] of Object.entries(input)) out[key] = Util.deepClone(value);
            return out;
        }
        if (input instanceof Map) {
            const out = new input.constructor();
            for (const [key, value] of input.entries()) out.set(key, Util.deepClone(value));
            return out;
        }
        return input;
    }


    static mergeDefaults(def, obj) {
        if (!obj) return Util.deepClone(def);
        for (const key in def) {
            if (typeof obj[key] === 'undefined') obj[key] = Util.deepClone(def[key]);
            else if (Util.isObject(obj[key])) obj[key] = Util.mergeDefaults(def[key], obj[key]);
        }
        return obj;
    }
}

Util.PRIMITIVE_TYPES = ['string', 'bigint', 'number', 'boolean'];

module.exports = Util;