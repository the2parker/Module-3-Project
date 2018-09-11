var randomizer = require('../globalMethods/randomizer')

module.exports = {
    randomValidData: {
        header: randomizer.randomLetters_Numbers_Symbols(9, 19, true),
        mke: randomizer.randomLetters_Symbols(2, 4, true),
        oai: randomizer.randomLetters_Numbers(9, 9),
        name: randomizer.randomLetters_Numbers_Symbols(3, 30, true),
        sex: randomizer.randomSex(), //these don't work for some reason
        race: /*randomizer.randomRace()*/'I',
        height: randomizer.randomInt(1, 9) + '0' + randomizer.randomInt(0, 9),
        weight: randomizer.randomNumbers(3, 3),
        hair: randomizer.randomLetters(3, 10),
        offense: randomizer.randomLetters_Numbers_Symbols(5, 15, true),
        dow: randomizer.randomDate(true),
        driversLicense: randomizer.randomLetters_Numbers_Symbols(1, 20, true),
        dlState: 'UT', //I've already randomized enough here.
        dlYear: randomizer.randomDate(),
        licensePlate: randomizer.randomLetters_Numbers(5, 8),
        lpState: 'UT',
        lpYear: randomizer.randomDate()
    },
    randomInvalidLengthData: [{
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
    },
    
    {
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
    }],
    randomInvalidCharacterData: {
        header: randomizer.randomLetters_Numbers_Symbols(9, 19, true), //ignore this one
        mke: randomizer.randomNumbers(2, 4),
        oai: randomizer.randomSymbols(9, 9),
        name: randomizer.randomLetters_Numbers_Symbols(3, 30, true), //ignore this one
        sex: randomizer.randomNumbers_Symbols(1, 1), //these don't work for some reason
        race: randomizer.randomNumbers_Symbols(1, 1),
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
}