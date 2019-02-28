module.exports = {
    name: 'test',
    say: (message) => {
        console.log(message);
    },
    execute: (message) => {
        console.log(this.name);
        console.log(message);
    }
};