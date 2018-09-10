//If you're seeing this, I am still working on finishing all of the automation.
//(see enter wanted suite)
var randomizer = require('../globalMethods/randomizer')

var cancelPage

var enterInformation = function (pageObject, info = { warrantID, reason, date }) 
{
    pageObject
        .setValue('@header', info.warrantID)
        .setValue('@mke', info.reason)
        .setValue('@oai', info.date)

    return info.warrantID + '.' + info.reason + '.' + info.date
}

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
        let obj = {
            warrantID: randomizer.randomNumbers(10, 10),
            reason: randomizer.randomLetters_Numbers_Symbols(10, 150),
            date: randomizer.randomFutureDate()
        }
        let results = enterInformation(cancelPage, obj)
        cancelPage
            .click('@saveBtn')
            // .api.pause(10000)
            .expect.element('@queryBody').text.to.equal(results).before(1000)
    }, //This tests https://dmutah.atlassian.net/browse/Q7P-68
    'Invalid Character Entries': browser =>
    {
        let obj = {
            warrantID: randomizer.randomLetters_Symbols(10, 10),
            reason: randomizer.randomLetters_Numbers_Symbols(10, 150), //Doesn't matter
            date: randomizer.randomLetters_Symbols(8, 8)
        }
        let results = enterInformation(cancelPage, obj)
        cancelPage
            .click('@saveBtn')
            // .api.pause(10000)

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-66
    'Invalid Length Entries': browser =>
    {
        // max + 1
        let obj = {
            warrantID: randomizer.randomNumbers(11, 11),
            reason: randomizer.randomLetters_Numbers_Symbols(151, 151),
            date: randomizer.randomFutureDate() + '1'
        }
        let results = enterInformation(cancelPage, obj)
        cancelPage
            .click('@saveBtn')
            // .api.pause(10000)

        cancelPage.navigate()
        // min - 1
        let obj = {
            warrantID: randomizer.randomNumbers(9, 9),
            reason: randomizer.randomLetters_Numbers_Symbols(9, 9),
            date: randomizer.randomFutureDate().substring(0, 6)
        }
        let results = enterInformation(cancelPage, obj)
        wantedPage
            .click('@saveBtn')
            // .api.pause(10000)
    }

}