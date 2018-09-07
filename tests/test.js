

var randomizer = require('../globalMethods/randomizer')

module.exports = {
    before: browser =>
    {
        browser.url('localhost:3000')

    },
    'THIS IS A TEST': browser =>
    {
        randomizer.randomLetters(1)
    },
    after: browser =>
    {
        browser.end()
    }
}