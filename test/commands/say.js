module.exports = {
    name: 'Say',
    execute: function(message) {
        console.log(this.client);
    },
    test: () => {
        console.log('Execute');
    }
};