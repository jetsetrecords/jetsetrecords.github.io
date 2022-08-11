// Jet Graffiti Records

let currentRecords = {};

currentRecords['shibuya'] = [
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '01:06:547',
        date: 'June 1, 2022'
    },
    {
        char: { id: 'unknown', name: 'Unknown' },
        name: 'Dwagen',
        time: '01:10:830',
        date: 'Unknown'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:43:822',
        date: 'August 9, 2022'
    }
];
currentRecords['99th'] = [
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '02:22:412',
        date: 'August 9, 2022'
    },
    {
        char: { id: 'unknown', name: 'Unknown' },
        name: 'Felzo',
        time: '02:24:428',
        date: 'Unknown'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '04:12:910',
        date: 'August 9, 2022'
    }
];
currentRecords['highway'] = [
    {
        char: { id: 'unknown', name: 'Unknown' },
        name: 'Latelaturi',
        time: '00:59:914',
        date: 'July 12, 2022'
    },
    {
        char: { id: 'immortal', name: 'Immortal' },
        name: 'DabsR',
        time: '01:03:245',
        date: 'February 18, 2021'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:18:697',
        date: 'August 9, 2022'
    }
];
currentRecords['chuo'] = [
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '01:59:698',
        date: 'July 14, 2022'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '02:32:900',
        date: 'August 9, 2022'
    }
];
currentRecords['dogenzaka'] = [
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '01:29:651',
        date: 'June 1, 2022'
    },
    {
        char: { id: 'clutch', name: 'Clutch' },
        name: 'DabsR',
        time: '01:33:456',
        date: 'February 19, 2021'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:56:401',
        date: 'August 9, 2022'
    }
];
currentRecords['frz'] = [
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '01:27:023',
        date: 'June 1, 2022'
    },
    {
        char: { id: 'jazz', name: 'Jazz' },
        name: 'Veloci',
        time: '01:28:226',
        date: 'July 10, 2021'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '02:30:942',
        date: 'August 9, 2022'
    }
];
currentRecords['rdh'] = [
    {
        char: { id: 'immortal', name: 'Immortal' },
        name: 'mute',
        time: '01:30:381',
        date: 'June 1, 2022'
    },
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '01:31:766',
        date: 'June 1, 2022'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '02:32:508',
        date: 'August 9, 2022'
    }
];
currentRecords['shinjuku'] = [
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '01:26:926',
        date: 'June 1, 2022'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:52:426',
        date: 'August 9, 2022'
    }
];
currentRecords['bantam'] = [
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '01:13:408',
        date: 'June 1, 2022'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '01:31:345',
        date: 'August 9, 2022'
    }
];
currentRecords['kibogaoka'] = [
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '01:58:508',
        date: 'June 1, 2022'
    },
    {
        char: { id: 'beat', name: 'Beat' },
        name: 'Chroma9',
        time: '02:24:197',
        date: 'August 9, 2022'
    }
];
currentRecords['hikage'] = [
    {
        char: { id: 'jacket', name: 'Jacket' },
        name: 'Latelaturi',
        time: '02:09:897',
        date: 'June 1, 2022'
    },
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