module.exports = {
    enterInformation: function (pageObject, info = { header, mke, oai, name, sex, race, height, weight, hair, offense, dow, driversLicense, dlState, dlYear, licensePlate, lpState, lpYear }) 
    {
        pageObject
            .setValue('@header', info.header)
            .setValue('@mke', info.mke)
            .setValue('@oai', info.oai)
            .setValue('@name', info.name)
            .click('select[name="sexInput"] option[value = "' + info.sex + '"]')
            .click('select[name="racInput"] option[value = "' + info.race + '"]')
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

        let temp = info.dlYear
        let month = temp.slice(0, 2)
        let day = temp.slice(3, 5)
        let year = temp.slice(6, 10)
        info.dlYear = year + '-' + month + '-' + day

        temp = info.dow
        month = temp.slice(0, 2)
        day = temp.slice(3, 5)
        year = temp.slice(6, 10)
        info.dow = year + '-' + month + '-' + day

        temp = info.lpYear
        month = temp.slice(0, 2)
        day = temp.slice(3, 5)
        year = temp.slice(6, 10)
        info.lpYear = year + '-' + month + '-' + day

        if (info.driversLicense == ' \uE003')
            return info.header + '.' + info.mke + '.' + info.oai + '.' + info.name + '.' + info.sex + '.' + info.race + '.' + info.height + '.' + info.weight + '.' + info.hair + '.' + info.offense + '.' + info.dow + '.' + '.' + '.' + '.' + '.' + '.'
        else
            return info.header + '.' + info.mke + '.' + info.oai + '.' + info.name + '.' + info.sex + '.' + info.race + '.' + info.height + '.' + info.weight + '.' + info.hair + '.' + info.offense + '.' + info.dow + '.' + info.driversLicense + '.' + info.dlState + '.' + info.dlYear + '.' + info.licensePlate + '.' + info.lpState + '.' + info.lpYear
    }
}