
var randomLetter = function () 
{
    let isCapital = Math.floor(Math.random() * (1 + 1))
    if (isCapital == 0)
        return String.fromCharCode(96 + Math.floor(Math.random() * (26 - 0 + 1)) + 0)
    else if (isCapital == 1)
        return (String.fromCharCode(96 + Math.floor(Math.random() * (26 - 0 + 1) + 0))).toUpperCase()
}
var randomNumber = function ()
{

    return Math.floor(Math.random() * (9 + 1)) + ''

}
var randomSymbol = function (noPeriod = false)
{
    let symbolSelection = Math.floor(Math.random() * (4 - 1 + 1)) + 1
    switch (symbolSelection)
    {
        case 1:
            let character = String.fromCharCode(Math.floor(Math.random() * (47 + 1)))
            if (character == 46 && noPeriod)
                character++
            return character
        case 2:
            return String.fromCharCode(Math.floor(Math.random() * (64 - 58 + 1)) + 58)
        case 3:
            return String.fromCharCode(Math.floor(Math.random() * (96 - 91 + 1)) + 91)
        case 4:
            return String.fromCharCode(Math.floor(Math.random() * (255 - 123 + 1)) + 123)
    }
}
module.exports = {
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
    randomLetters: function (length)
    {
        let name = ''

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
    randomLetters_Symbols: function (minLength, maxLength, noPeriod = false)
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
    randomLetters_Numbers_Symbols: function (minLength, maxLength, noPeriod = false)
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

        let newDay = Math.floor(Math.random() * (maxDay - 1 + 1)) + 1
        if (newDay < 10)
            newDay = '0' + newDay
        else
            newDay = '' + newDay

        let newMonth = Math.floor(Math.random() * (maxMonth - 1 + 1)) + 1
        if (newMonth < 10)
            newMonth = '0' + newMonth
        else
            newMonth = '' + newMonth

        newYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear

        return newMonth + newDay + newYear
    }, //a random date between 1900 and 2100
    randomDate: function (minYear, notPastToday = false)
    {
        let maxDay = 31
        let maxMonth = 12
        let minYear = minYear
        let today = new Date()
        maxYear = today.getFullYear()

        if (notPastToday)
        {
            maxMonth = today.getMonth() + 1
            maxDay = today.getDate()
        }

        let newDay = Math.floor(Math.random() * (maxDay - 1 + 1)) + 1
        if (newDay < 10)
            newDay = '0' + newDay
        else
            newDay = '' + newDay

        let newMonth = Math.floor(Math.random() * (maxMonth - 1 + 1)) + 1
        if (newMonth < 10)
            newMonth = '0' + newMonth
        else
            newMonth = '' + newMonth

        newYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear

        return newMonth + newDay + newYear
    }, //this only includes days before or on this year, even if notPastToday is false
    randomDate: function (minYear, maxYear, notPastToday = false)
    {
        let maxDay = 31
        let maxMonth = 12
        let minYear = minYear
        let maxYear = maxYear

        if (notPastToday)
        {
            let today = new Date()
            maxMonth = today.getMonth() + 1
            maxDay = today.getDate()
        }

        let newDay = Math.floor(Math.random() * (maxDay - 1 + 1)) + 1
        if (newDay < 10)
            newDay = '0' + newDay
        else
            newDay = '' + newDay

        let newMonth = Math.floor(Math.random() * (maxMonth - 1 + 1)) + 1
        if (newMonth < 10)
            newMonth = '0' + newMonth
        else
            newMonth = '' + newMonth

        newYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear

        return newMonth + newDay + newYear
    } //notPastToday ignores the current year, using the maxYear provided instead
}