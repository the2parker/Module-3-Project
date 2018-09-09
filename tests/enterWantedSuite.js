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

        return info.header + '.' + info.mke + '.' + info.oai + '.' + info.name + '.' + info.sex + '.' + info.race + '.' + info.height + '.' + info.weight + '.' + info.hair + '.' + info.offense + '.' + info.dow + '.' + info.driversLicense + '.' + info.dlState + '.' + info.dlYear + '.' + info.licensePlate + '.' + info.lpState + '.' + info.lpYear
}

//This is for the test suite https://dmutah.atlassian.net/browse/Q7P-54
module.exports = {
    before: browser =>
    {
        wantedPage = browser.page.enterWanted()
        wantedPage.navigate()
            .waitForElementVisible('@versionNumber', 5000)
    },
    beforeEach: browser =>
    {

    },
    after: browser =>
    {

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-55
    // This test almost works except for the date is reversed in the output compared to what you put in the input.
    'Valid Entries': browser =>
    {
        let obj = {
            header: randomizer.randomLetters_Numbers_Symbols(9, 19, true),
            mke: randomizer.randomLetters_Symbols(2, 4, true),
            oai: randomizer.randomLetters_Numbers(9, 9),
            name: randomizer.randomLetters_Numbers_Symbols(3, 30, true),
            sex: /*randomizer.randomSex()*/'M',
            race: /*randomizer.randomRace()*/'B',
            height: randomizer.randomInt(1, 9) + '0' + randomizer.randomInt(0, 9),
            weight: randomizer.randomInt(111, 999),
            hair: randomizer.randomLetters(3, 10),
            offense: randomizer.randomLetters_Numbers_Symbols(5, 15, true),
            dow: randomizer.randomDate(true),
            driversLicense: randomizer.randomLetters_Numbers_Symbols(1, 20, true),
            dlState: 'UT', //I've already randomized enough here.
            dlYear: randomizer.randomDate(),
            licensePlate: randomizer.randomLetters_Numbers(5, 8),
            lpState: 'UT',
            lpYear: randomizer.randomDate()
        }
        let results = enterInformation(wantedPage, obj)
        wantedPage
            .click('@saveBtn')
            .expect.element('@queryBody').text.to.equal(results)

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