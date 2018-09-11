//If you're seeing this, I am still working on finishing all of the automation.
//It's been taking me longer than I thought it would to complete the automation,
//I had everything else finished but am still working on this.
//Randomizing everything might have been a bit much....

var randomizer = require('../globalMethods/randomizer');

var data = require('../testData/enterData')

var wantedPage

var functions = require('../testFunctions/enterFunctions.js')

//This is for the test suite https://dmutah.atlassian.net/browse/Q7P-54
module.exports = {
    before: browser =>
    {
        wantedPage = browser.page.enterWanted()
        wantedPage.navigate()
    },
    beforeEach: browser =>
    {
        wantedPage
            .api.refresh()
        wantedPage.waitForElementVisible('@versionNumber', 5000)
    },
    after: browser =>
    {
        browser.end()
    }, //This tests https://dmutah.atlassian.net/browse/Q7P-55
    //This test almost works except for the date is reversed in the output compared to what you put in the input.
    'Valid Entries': browser =>
    {
        let results = functions.enterInformation(wantedPage, data.randomValidData)
        wantedPage
            .click('@saveBtn')
            .api.pause(10000)
            .expect.element('@queryBody').text.to.equal('a').before(10000)

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-64
    'Invalid Character Entries': browser =>
    {

        let results = functions.enterInformation(wantedPage, data.randomInvalidCharacterData)
        wantedPage
            .click('@saveBtn')

        //same as the error checking below

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-57
    'Invalid Length Entries': browser =>
    {
        //One above the max
        functions.enterInformation(wantedPage, data.randomInvalidLengthData[0])
        wantedPage
            .click('@saveBtn')
        browser.pause(3000)
        browser.elements('css selector', '.errorMessage', results =>
        {
            //browser.verify
            wantedPage
                .clearValue('@header')
                .setValue('@header', results.value.length)
                .api.pause(100)
            wantedPage.verify.valueContains('@header', '15')

            results.value.forEach(result =>
            {
                browser.elementIdText(result.ELEMENT, function (element)
                {
                    wantedPage
                        .clearValue('@header')
                        .setValue('@header', element.value)
                        .api.pause(100)

                    wantedPage.verify.valueContains('@header', 'field should be')
                    wantedPage.verify.valueContains('@header', 'long')

                })
                //browser.verify.containsText(result.elementIdElement, 'long')
            })
        })

        browser.refresh()
        wantedPage.waitForElementVisible('@versionNumber', 5000)
        // One Below the min

        functions.enterInformation(wantedPage, data.randomInvalidLengthData[1])
        wantedPage
            .click('@saveBtn')

        //Still haven't figured it out.

    }, //This tests https://dmutah.atlassian.net/browse/Q7P-56
    'Optional Entries': browser =>
    {
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
        let results = functions.enterInformation(wantedPage, obj)
        wantedPage
            .click('@saveBtn')
            // .api.pause(10000)
            .expect.element('@queryBody').text.to.equal(results).before(10000)
    },
}