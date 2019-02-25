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
}

module.exports = Util;