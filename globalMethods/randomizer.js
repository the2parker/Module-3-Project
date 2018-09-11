
var randomLetter = function () 
{
    let isCapital = Math.floor(Math.random() * (1 + 1))
    if (isCapital == 0)
        return String.fromCharCode(97 + Math.floor(Math.random() * (25 - 0 + 1)) + 0)
    else if (isCapital == 1)
        return (String.fromCharCode(97 + Math.floor(Math.random() * (25 - 0 + 1) + 0))).toUpperCase()
}
var randomNumber = function ()
{

    return Math.floor(Math.random() * (9 + 1)) + ''

}
var randomSymbol = function (noPeriod = true)
{
    let symbolSelection = Math.floor(Math.random() * (4 - 1 + 1)) + 1
    switch (symbolSelection)
    {
        case 1:
            let character = String.fromCharCode(Math.floor(Math.random() * (47 - 32 + 1)) + 32)
            if (character == '.' && noPeriod)
            {
                character = String.fromCharCode(character.charCodeAt(0) + 1)
            }
            return character
        case 2:
            return String.fromCharCode(Math.floor(Math.random() * (64 - 58 + 1)) + 58)
        case 3:
            return String.fromCharCode(Math.floor(Math.random() * (96 - 91 + 1)) + 91)
        case 4:
            return String.fromCharCode(Math.floor(Math.random() * (126 - 123 + 1)) + 123)
    }
}

var randomInt = function (min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = {
    randomInt: randomInt,

    randomSex: function ()
    {
        switch (randomInt(1, 3))
        {
            case 1:
                return 'F'
            case 2:
                return 'M'
            case 3:
                return 'U'
        }
        console.log('error')
        return ''
    },
    randomRace: function ()
    {
        switch (randomInt(1, 6))
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
        console.log('race error')
        return ''
    },
    randomLetters: function (minLength, maxLength)
    {
        let name = ''
        let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

        for (let i = 0; i < length; i++)
        {
            name += randomLetter()
        }

        return name
    },
    randomNumbers: function (minLength, maxLength)
    {
        let number = ''
        let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

        for (let i = 0; i < length; i++)
        {
            number += randomNumber()
        }

        return number
    },
    randomSymbols: function (minLength, maxLength, noPeriod)
    {
        let characters = ''
        let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

        for (let i = 0; i < length; i++)
        {
            characters += randomSymbol(noPeriod)
        }

        return characters
    },
    randomLetters_Numbers: function (minLength, maxLength)
    {
        let characters = ''
        let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

        for (let i = 0; i < length; i++)
        {
            let determiner = Math.floor(Math.random() * (1 + 1))
            if (determiner == 1)
                characters += randomNumber()
            else if (determiner == 0)
                characters += randomLetter()
        }

        return characters
    },
    randomLetters_Symbols: function (minLength, maxLength, noPeriod = true)
    {
        let characters = ''
        let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

        for (let i = 0; i < length; i++)
        {
            let determiner = Math.floor(Math.random() * (1 + 1))
            if (determiner == 1)
                characters += randomSymbol(noPeriod)
            else if (determiner == 0)
                characters += randomLetter()
        }

        return characters
    },
    randomNumbers_Symbols: function (minLength, maxLength, noPeriod = true)
    {
        let characters = ''
        let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

        for (let i = 0; i < length; i++)
        {
            let determiner = Math.floor(Math.random() * (1 + 1))
            if (determiner == 1)
                characters += randomSymbol(noPeriod)
            else if (determiner == 0)
                characters += randomNumber()
        }

        return characters
    },
    randomLetters_Numbers_Symbols: function (minLength, maxLength, noPeriod = true)
    {
        let characters = ''
        let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

        for (let i = 0; i < length; i++)
        {
            let determiner = Math.floor(Math.random() * (2 + 1))
            if (determiner == 1)
                characters += randomNumber()
            else if (determiner == 0)
                characters += randomLetter()
            else if (determiner == 2)
                characters += randomSymbol(noPeriod)
        }

        return characters
    },
    randomDate: function (notPastToday = false)
    {
        let maxDay = 31
        let maxMonth = 12
        let minYear = 1900
        let maxYear = 2100

        if (notPastToday)
        {
            let today = new Date()
            maxMonth = today.getMonth() + 1
            maxDay = today.getDate()
            maxYear = today.getFullYear()
        }

        let newYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear
        let newMonth = 0
        let newDay = 0

        if (newYear == maxYear)
            newMonth = Math.floor(Math.random() * (maxMonth - 1 + 1)) + 1
        else
            newMonth = Math.floor(Math.random() * (12 - 1 + 1)) + 1

        if (newMonth == maxMonth)
            newDay = Math.floor(Math.random() * (maxDay - 1 + 1)) + 1
        else
            newDay = Math.floor(Math.random() * (31 - 1 + 1)) + 1

        if (newDay < 10)
            newDay = '0' + newDay
        else
            newDay = '' + newDay


        if (newMonth < 10)
            newMonth = '0' + newMonth
        else
            newMonth = '' + newMonth

        return newMonth + '-' + newDay + '-' + newYear
    }, //a random date between 1900 and 2100
    randomFutureDate: function (maxYear = 2100)
    {
        let today = new Date()
        let minDay = 1
        let maxDay = 31
        let minMonth = 1
        let maxMonth = 12
        let minYear = today.getFullYear()



        let newYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear

        if (newYear == minYear)
        {
            minMonth = today.getMonth() + 1
            minDay = today.getDate()
        }

        let newMonth = Math.floor(Math.random() * (maxMonth - minMonth + 1)) + minMonth
        let newDay = Math.floor(Math.random() * (maxDay - minDay + 1)) + minDay

        if (newDay < 10)
            newDay = '0' + newDay
        else
            newDay = '' + newDay

        if (newMonth < 10)
            newMonth = '0' + newMonth
        else
            newMonth = '' + newMonth

        return newMonth + '-' + newDay + '-' + newYear
    }
}