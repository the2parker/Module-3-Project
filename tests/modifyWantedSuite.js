//If you're seeing this, I am still working on finishing all of the automation.
//(see enter wanted suite)

var randomizer = require('../globalMethods/randomizer')

var modifyPage

var enterInformation = function (pageObject, info = { warrantID, header, mke, oai, name, sex, race, height, weight, hair, offense, dow, driversLicense, dlState, dlYear, licensePlate, lpState, lpYear }) 
{
    pageObject
        .setValue('@warrantID', info.warrantID)
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

    return info.warrantID + '.' + info.header + '.' + info.mke + '.' + info.oai + '.' + info.name + '.' + info.sex + '.' + info.race + '.' + info.height + '.' + info.weight + '.' + info.hair + '.' + info.offense + '.' + info.dow + '.' + info.driversLicense + '.' + info.dlState + '.' + info.dlYear + '.' + info.licensePlate + '.' + info.lpState + '.' + info.lpYear
}

//This is for the test suite https://dmutah.atlassian.net/browse/Q7P-58
module.exports = {
    before: browser =>
    {
        modifyPage = browser.page.modifyWanted()
    },
    beforeEach: browser =>
    {
        modifyPage
            .navigate()
            .waitForElementVisible('@versionNumber', 5000)
    },
    after: browser =>
    {
        browser.end()
    }, //This tests https://dmutah.atlassian.net/browse/Q7P-59
    'Valid Entries': browser =>
    {
        let obj = {
            warrantID: randomizer.randomNumbers(10, 10),
            header: randomizer.randomLetters_Numbers_Symbols(9, 19, true),
            mke: randomizer.randomLetters_Symbols(2, 4, true),
            oai: randomizer.randomLetters_Numbers(9, 9),
            name: randomizer.randomLetters_Numbers_Symbols(3, 30, true),
            sex: /*randomizer.randomSex()*/'F', //these don't work for some reason
            race: /*randomizer.randomRace()*/'H',
            height: randomizer.randomInt(1, 9) + '0' + randomizer.randomInt(0, 9),
            weight: randomizer.randomInt(3, 3),
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
        let results = enterInformation(modifyPage, obj)
        modifyPage
            .click('@saveBtn')
            // .api.pause(30000)
            .expect.element('@queryBody').text.to.equal(results).before(1000)
    }, //This tests https://dmutah.atlassian.net/browse/Q7P-62
    'Invalid Character Entries': browser =>
    {

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-63
    'Invalid Length Entries': browser =>
    {
        //One above the max
        let obj = {
            warrantID: randomizer.randomNumbers(11, 11),
            header: randomizer.randomLetters_Numbers_Symbols(20, 20, true),
            mke: randomizer.randomLetters_Symbols(5, 5, true),
            oai: randomizer.randomLetters_Numbers(10, 10),
            name: randomizer.randomLetters_Numbers_Symbols(31, 31, true),
            sex: /*randomizer.randomSex()*/'FF',
            race: /*randomizer.randomRace()*/'HH',
            height: randomizer.randomInt(1, 9) + '0' + randomizer.randomInt(0, 9) + '0',
            weight: randomizer.randomNumbers(1, 1) + randomizer.randomNumbers(1, 1) + randomizer.randomNumbers(1, 1) + '0',
            hair: randomizer.randomLetters(11, 11),
            offense: randomizer.randomLetters_Numbers_Symbols(16, 16, true),
            dow: randomizer.randomDate(true) + '0',
            driversLicense: randomizer.randomLetters_Numbers_Symbols(21, 21, true),
            dlState: 'UTA',
            dlYear: randomizer.randomDate() + '0',
            licensePlate: randomizer.randomLetters_Numbers(9, 9),
            lpState: 'UTS',
            lpYear: randomizer.randomDate() + '0'
        }
        enterInformation(modifyPage, obj)
        modifyPage
            .click('@saveBtn')

        //how am I going to check?
        //get an array of all the error messages and loop through all of them checking for the key words of the error?
        //(not sure how to do that in JavaScript...)

        modifyPage.navigate()
        // One Below the min
        obj = {
            warrantID: randomizer.randomNumbers(9, 9),
            header: randomizer.randomLetters_Numbers_Symbols(8, 8, true),
            mke: randomizer.randomLetters_Symbols(1, 1, true),
            oai: randomizer.randomLetters_Numbers(8, 8),
            name: randomizer.randomLetters_Numbers_Symbols(2, 2, true),
            sex: randomizer.randomSex(), //since it counts an empty field as missing and not incorrect length,
            race: randomizer.randomRace(), //I'm ignoring this
            height: randomizer.randomInt(1, 9) + '0',
            weight: randomizer.randomNumbers(1, 1) + randomizer.randomNumbers(1, 1),
            hair: randomizer.randomLetters(2, 2),
            offense: randomizer.randomLetters_Numbers_Symbols(4, 4, true),
            dow: randomizer.randomDate(true).substring(0, 6), // figure out how to trim the last letter
            driversLicense: randomizer.randomLetters_Numbers_Symbols(1, 20, true), //same as above
            dlState: 'U',
            dlYear: randomizer.randomDate().substring(0, 6),
            licensePlate: randomizer.randomLetters_Numbers(4, 4),
            lpState: 'U',
            lpYear: randomizer.randomDate().substring(0, 6)
        }
        enterInformation(modifyPage, obj)
        wantedPage
            .click('@saveBtn')

        //Still haven't figured it out.

    }
}