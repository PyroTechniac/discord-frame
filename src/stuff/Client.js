const Discord = require('discord.js');
const { Permissions, Permissions: { FLAGS } } = Discord;

/**
 * The base Client of Solis
 * @extends external:Client
 */
class SolisClient extends Discord.Client {
    constructor(options = {}) {
        super(options);

        /**
         * The base permissions that the {@link Client#invite} asks for, defaults to [VIEW_CHANNELS, SEND_MESSAGES]
         * @type {Permissions}
         */
        this.basePermissions = new Permissions(3072);

        /**
         * The apps info from the discord api
         * @type {external:ClientApplication}
         */
        this.application = null;
    }


    get invite() {
        const permissions = new Permissions(this.basePermissions);
        return `https://discordapp.com/oauth2/authorize?client_id=${this.application.id}&permissions=${permissions}&scope=bot`;
    }

    /**
     * The OAuth Application, obtained from Discord
     * When ran, updates {@link Client#application}
     * @returns {external:ClientApplication}
     */
    async fetchApplication() {
        this.application = await super.fetchApplication();
        return this.application;
    }
}

/**
 * @external Client
 * @see {@link https://discord.js.org/#/docs/main/master/class/Client}
 */

module.exports = SolisClient;