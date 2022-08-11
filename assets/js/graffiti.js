// Jet Graffiti Records

let currentRecords = {};

currentRecords['shibuya'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:43:822',
        date: 'August 9, 2022'
    }
];
currentRecords['99th'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '04:12:910',
        date: 'August 9, 2022'
    }
];
currentRecords['highway'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:18:697',
        date: 'August 9, 2022'
    }
];
currentRecords['chuo'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '02:32:900',
        date: 'August 9, 2022'
    }
];
currentRecords['dogenzaka'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:56:401',
        date: 'August 9, 2022'
    }
];
currentRecords['frz'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '02:30:942',
        date: 'August 9, 2022'
    }
];
currentRecords['rdh'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:29:129',
        date: 'August 9, 2022'
    }
];
currentRecords['shinjuku'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:52:426',
        date: 'August 9, 2022'
    }
];
currentRecords['bantam'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:31:345',
        date: 'August 9, 2022'
    }
];
currentRecords['kibogaoka'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '02:24:197',
        date: 'August 9, 2022'
    }
];
currentRecords['hikage'] = [
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '03:34:220',
        date: 'August 9, 2022'
    }
];

// Compiling Records to Page
(function() {
    let recordKeys = Object.keys(currentRecords);
    for(let i = 0; i < recordKeys.length; i++) {
        let keyId = recordKeys[i];
        let data = currentRecords[keyId];
        for(let l = 0; l < data.length; l++) {
            $(`#${keyId}-${l}-name`).text(data[l].name);
            $(`#${keyId}-${l}-time`).text(data[l].time);
            $(`#${keyId}-${l}-date`).text(data[l].date);
            $(`#${keyId}-${l}-char-name`).text(data[l].char.name);
            $(`#${keyId}-${l}-char-icon`).removeClass(`icon-unknown`);
            $(`#${keyId}-${l}-char-icon`).addClass(`icon-${data[l].char.id}`);
        }
    }
})();