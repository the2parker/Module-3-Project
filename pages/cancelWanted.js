module.exports = {
    url: 'http://localhost:3000/#/cancel',
    elements: {
        saveBtn: '#saveBtn',
        clearBtn: '#clearBtn',
        queryTitle: 'span[name = "queryTitle"]',
        queryBody: 'span[name = "queryBody"]',
        warrantID: 'input[name = "widInput"]',
        reason: 'input[name = "resInput"]',
        date: 'input[name = "datInput"]',
        versionNumber: '#pageWrap > div:nth-child(2) > h6:nth-child(1)'
    }
}