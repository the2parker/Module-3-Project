//If you're seeing this, I am still working on finishing all of the automation.
//It's been taking me longer than I thought it would to complete the automation, I had everything else finished but am still working on this.

var randomizer = require('../globalMethods/randomizer')

var wantedPage

var enterInformation = function (pageObject, info = { header, mke, oai, name, sex, race, height, weight, hair, offense, dow, driversLicense, dlState, dlYear, licensePlate, lpState, lpYear }) 
{
    pageObject
        .setValue('@header', info.header)
        .setValue('@mke', info.mke)
        .setValue('@oai', info.oai)
        .setValue('@name', info.name)
        .setValue('@sex', info.sex)
        .setValue('@race', info.race)
        .setValue('@height', info.height)
        .setValue('@weight', info.weight)
        .setValue('@hair', info.hair)
        .setValue('@offense', info.offense)
        .setValue('@dow', info.dow)
        .setValue('@driversLicense', info.driversLicense)
        .setValue('@dlState', info.dlState)
        .setValue('@dlYear', info.dlYear)
        .setValue('@licensePlate', info.licensePlate)
        .setValue('@lpState', info.lpState)
        .setValue('@lpYear', info.lpYear)
}

//This is for the test suite https://dmutah.atlassian.net/browse/Q7P-54
module.exports = {
    before: browser =>
    {
        wantedPage = browser.page.enterWanted()
    },
    beforeEach: browser =>
    {

    },
    after: browser =>
    {

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-55
    'Valid Entries': browser =>
    {
        let obj = {
            header: randomizer.randomLetters_Numbers_Symbols(9, 19, true),
            mke: randomizer.randomLetters_Symbols(2, 4, true),
            oai: randomizer.randomLetters_Numbers(9, 9),
            name: randomizer.randomLetters_Numbers_Symbols(3, 30, true),
            sex: function ()
            {
                switch (randomizer.randomInt(1, 3))
                {
                    case 1:
                        return 'F'
                    case 2:
                        return 'M'
                    case 3:
                        return 'U'
                }
            },
            race: function ()
            {
                switch (randomizer.randomInt(1, 6))
                {
                    case 1:
                        return 'A'
                    case 2:
                        return 'B'
                    case 3:
                        return 'H'
                    case 4:
                        return 'I'
                    case 5:
                        return 'W'
                    case 6:
                        return 'U'
                }
            },
            height: 

        }
        enterInformation(wantedPage, {
            header: randomizer.randomLetter_Number_Symbol(),

        })
    }, //This tests https://dmutah.atlassian.net/browse/Q7P-64
    'Invalid Character Entries': browser =>
    {

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-57
    'Invalid Length Entries': browser =>
    {

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-56
    'Optional Entries': browser =>
    {

    },
}