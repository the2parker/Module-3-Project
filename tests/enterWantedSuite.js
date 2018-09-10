//If you're seeing this, I am still working on finishing all of the automation.
//It's been taking me longer than I thought it would to complete the automation,
//I had everything else finished but am still working on this.
//Randomizing everything might have been a bit much....

var randomizer = require('../globalMethods/randomizer');

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

    if (info.driversLicense == ' \uE003')
        return info.header + '.' + info.mke + '.' + info.oai + '.' + info.name + '.' + info.sex + '.' + info.race + '.' + info.height + '.' + info.weight + '.' + info.hair + '.' + info.offense + '.' + info.dow + '.' + '.' + '.' + '.' + '.' + '.'
    else
        return info.header + '.' + info.mke + '.' + info.oai + '.' + info.name + '.' + info.sex + '.' + info.race + '.' + info.height + '.' + info.weight + '.' + info.hair + '.' + info.offense + '.' + info.dow + '.' + info.driversLicense + '.' + info.dlState + '.' + info.dlYear + '.' + info.licensePlate + '.' + info.lpState + '.' + info.lpYear
}

//This is for the test suite https://dmutah.atlassian.net/browse/Q7P-54
module.exports = {
    before: browser =>
    {
        wantedPage = browser.page.enterWanted()
    },
    beforeEach: browser =>
    {
        wantedPage
            .navigate()
            .waitForElementVisible('@versionNumber', 5000)
    },
    after: browser =>
    {
        browser.end()
    }, //This tests https://dmutah.atlassian.net/browse/Q7P-55
    // This test almost works except for the date is reversed in the output compared to what you put in the input.
    'Valid Entries': browser =>
    {
        // let hello = randomizer.randomSex()
        let obj = {
            header: randomizer.randomLetters_Numbers_Symbols(9, 19, true),
            mke: randomizer.randomLetters_Symbols(2, 4, true),
            oai: randomizer.randomLetters_Numbers(9, 9),
            name: randomizer.randomLetters_Numbers_Symbols(3, 30, true),
            sex: /*randomizer.randomSex()*/'F', //these don't work for some reason
            race: /*randomizer.randomRace()*/'H',
            height: randomizer.randomInt(1, 9) + '0' + randomizer.randomInt(0, 9),
            weight: randomizer.randomNumbers(1, 1) + randomizer.randomNumbers(1, 1) + randomizer.randomNumbers(1, 1),
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
            // .api.pause(10000)
            .expect.element('@queryBody').text.to.equal(results).before(1000)

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-64
    'Invalid Character Entries': browser =>
    {
        let obj = {
            header: randomizer.randomLetters_Numbers_Symbols(9, 19, true), //ignore this one
            mke: randomizer.randomNumbers(2, 4),
            oai: randomizer.randomSymbols(9, 9),
            name: randomizer.randomLetters_Numbers_Symbols(3, 30, true), //ignore this one
            sex: /*randomizer.randomSex()*/'@1', //these don't work for some reason
            race: /*randomizer.randomRace()*/'#3',
            height: randomizer.randomLetters_Symbols(1, 3, true),
            weight: randomizer.randomLetters_Symbols(1, 3, true),
            hair: randomizer.randomNumbers_Symbols(3, 10, true),
            offense: randomizer.randomLetters_Numbers_Symbols(5, 15, true), //ignore this one
            dow: randomizer.randomLetters_Symbols(8, 8, true),
            driversLicense: randomizer.randomLetters_Numbers_Symbols(1, 20, true), // ignore this one
            dlState: randomizer.randomNumbers_Symbols(2, 2, true), //I've already randomized enough here.
            dlYear: randomizer.randomLetters_Symbols(8, 8),
            licensePlate: randomizer.randomSymbols(5, 8),
            lpState: randomizer.randomNumbers_Symbols(2, 2, true),
            lpYear: randomizer.randomLetters_Symbols(8, 8)
        }
        let results = enterInformation(wantedPage, obj)
        wantedPage
            .click('@saveBtn')

            //same as the error checking below

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-57
    'Invalid Length Entries': browser =>
    {
        //One above the max
        let obj = {
            header: randomizer.randomLetters_Numbers_Symbols(20, 20, true),
            mke: randomizer.randomLetters_Symbols(5, 5, true),
            oai: randomizer.randomLetters_Numbers(10, 10),
            name: randomizer.randomLetters_Numbers_Symbols(31, 31, true),
            sex: /*randomizer.randomSex()*/'FF', //these don't work for some reason
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
        enterInformation(wantedPage, obj)
        wantedPage
            .click('@saveBtn')

            //how am I going to check?
            //get an array of all the error messages and loop through all of them checking for the key words of the error?
            //(not sure how to do that in JavaScript...)

        wantedPage.navigate()
        // One Below the min
        let obj = {
            header: randomizer.randomLetters_Numbers_Symbols(8, 8, true),
            mke: randomizer.randomLetters_Symbols(1, 1, true),
            oai: randomizer.randomLetters_Numbers(8, 8),
            name: randomizer.randomLetters_Numbers_Symbols(2, 2, true),
            sex: /*randomizer.randomSex()*/'H', //since it counts an empty field as missing and not incorrect length,
            race: /*randomizer.randomRace()*/'F', //I'm ignoring this
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
        enterInformation(wantedPage, obj)
        wantedPage
            .click('@saveBtn')

        //Still haven't figured it out.

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-56
    'Optional Entries': browser =>
    {
        // let hello = randomizer.randomSex()
        let obj = {
            header: randomizer.randomLetters_Numbers_Symbols(9, 19, true),
            mke: randomizer.randomLetters_Symbols(2, 4, true),
            oai: randomizer.randomLetters_Numbers(9, 9),
            name: randomizer.randomLetters_Numbers_Symbols(3, 30, true),
            sex: /*randomizer.randomSex()*/'F', //these don't work for some reason
            race: /*randomizer.randomRace()*/'H',
            height: randomizer.randomInt(1, 9) + '0' + randomizer.randomInt(0, 9),
            weight: randomizer.randomNumbers(1, 1) + randomizer.randomNumbers(1, 1) + randomizer.randomNumbers(1, 1),
            hair: randomizer.randomLetters(3, 10),
            offense: randomizer.randomLetters_Numbers_Symbols(5, 15, true),
            dow: randomizer.randomDate(true),
            driversLicense: ' \uE003',
            dlState: ' \uE003', //I've already randomized enough here.
            dlYear: ' \uE003',
            licensePlate: ' \uE003',
            lpState: ' \uE003',
            lpYear: ' \uE003'
        }
        let results = enterInformation(wantedPage, obj)
        wantedPage
            .click('@saveBtn')
            // .api.pause(10000)
            .expect.element('@queryBody').text.to.equal(results).before(10000)
    },
}