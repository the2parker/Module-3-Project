//If you're seeing this, I am still working on finishing all of the automation.
//(see enter wanted suite)
var randomizer = require('../globalMethods/randomizer')

var cancelPage

//This is for the test suite https://dmutah.atlassian.net/browse/Q7P-65
module.exports = {
    before: browser =>
    {
        cancelPage = browser.page.cancelWanted()
    },
    beforeEach: browser =>
    {
        cancelPage
            .navigate()
            .waitForElementVisible('@versionNumber', 5000)
    },
    after: browser =>
    {
        browser.end()
    }, //This tests https://dmutah.atlassian.net/browse/Q7P-65
    'Valid Entries': browser =>
    {

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-68
    'Invalid Character Entries': browser =>
    {

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-66
    'Invalid Length Entries': browser =>
    {

    }

}