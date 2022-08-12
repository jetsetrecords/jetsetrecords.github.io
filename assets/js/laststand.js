let currentRecords = {};

currentRecords[`shibuya`] = [
    {
        char: { id: `jazz`, name: `Jazz`},
        name: `Veloci`,
        wave: 98,
        date: `May 24, 2022`
    },
    {
        char: { id: `unknown`, name: `Unknown` },
        name: `Chanel Oberlin`,
        wave: 53,
        date: `Unknown`
    },
    {
        char: { id: `jazz`, name: `Jazz` },
        name: `Latelaturi`,
        wave: 53,
        date: `July 24, 2022`
    },
    {
        char: { id: `nt3k`, name: `NT-3000` },
        name: `YandereKxng`,
        wave: 22,
        date: `June 11, 2022`
    },
];
currentRecords['99th'] = [
    {
        char: { id: `nt3k`, name: `NT-3000` },
        name: `YandereKxng`,
        wave: 75,
        date: `June 30, 2022`
    },
    {
        char: { id: `pots`, name: `Pots` },
        name: `Veloci`,
        wave: 42,
        date: `June 7, 2022`
    },
    {
        char: { id: `clutch`, name: `Clutch` },
        name: `Latelaturi`,
        wave: 33,
        date: `July 6, 2022`
    },
];
currentRecords['chuo'] = [
    {
        char: { id: `clutch`, name: `Clutch` },
        name: `Latelaturi`,
        wave: 36,
        date: `July 28, 2022`
    },
    {
        char: { id: `nt3k`, name: `NT-3000` },
        name: `YandereKxng`,
        wave: 25,
        date: `May 27, 2022`
    },
];
currentRecords['shinjuku'] = [
    {
        char: { id: `jazz`, name: `Jazz` },
        name: `Latelaturi`,
        wave: 37,
        date: `July 27, 2022`
    },
    {
        char: { id: `nt3k`, name: `NT-3000` },
        name: `YandereKxng`,
        wave: 21,
        date: `May 25, 2022`
    },
];

// Compiling Records to Page
(function() {
    let recordKeys = Object.keys(currentRecords);
    for(let i = 0; i < recordKeys.length; i++) {
        let keyId = recordKeys[i];
        let data = currentRecords[keyId];
        for(let l = 0; l < data.length; l++) {
            $(`#${keyId}-${l}-name`).text(data[l].name);
            $(`#${keyId}-${l}-waves`).text(data[l].wave + ` waves`);
            $(`#${keyId}-${l}-date`).text(data[l].date);
            $(`#${keyId}-${l}-char-name`).text(data[l].char.name);
            $(`#${keyId}-${l}-char-icon`).removeClass(`icon-unknown`);
            $(`#${keyId}-${l}-char-icon`).addClass(`icon-${data[l].char.id}`);
        }
    }
})();