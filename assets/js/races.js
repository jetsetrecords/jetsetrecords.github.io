// Race Mode Records

let currentRecords = {};

currentRecords[`second`] = [
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `Veloci`,
        time: `03:27:943`,
        date: `June 3, 2022`
    },
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `Latelaturi`,
        time: `03:28:589`,
        date: `May 24, 2022`
    },
    {
        char: { id: `jazz`, name: `Jazz` },
        name: `Sharkbite`,
        time: `03:31:156`,
        date: `April 21, 2021`
    },
    {
        char: { id: `boombot`, name: `Boom Bot` },
        name: `JimmyJ`,
        time: `03:33:546`,
        date: `August 26, 2021`
    },
];
currentRecords[`stadium`] = [
    {
        char: { id: `immortal`, name: `Immortal` },
        name: `Latelaturi`,
        time: `02:18:936`,
        date: `June 6, 2022`
    },
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `Veloci`,
        time: `02:19:788`,
        date: `May 20, 2022`
    },
    {
        char: { id: `immortal`, name: `Immortal` },
        name: `MaZaOsMe`,
        time: `02:20:867`,
        date: `July 28, 2022`
    },
];
currentRecords[`highway`] = [
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `Veloci`,
        time: `02:13:771`,
        date: `May 20, 2022`
    },
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `Latelaturi`,
        time: `02:14:941`,
        date: `May 24, 2022`
    },
    {
        char: { id: `unknown`, name: `Unknown` },
        name: `Sharkbite`,
        time: `02:16:734`,
        date: `March 28, 2021`
    },
];
currentRecords[`chuo`] = [
    {
        char: { id: `goldenrhino`, name: `Golden Rhino` },
        name: `Veloci`,
        time: `03:52:531`,
        date: `May 20, 2022`
    },
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `Latelaturi`,
        time: `03:53:975`,
        date: `May 21, 2022`
    },
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `'p`,
        time: `03:54:586`,
        date: `May 20, 2022`
    },
    {
        char: { id: `loveshocker`, name: `Love Shocker` },
        name: `Buggy`,
        time: `03:57:478`,
        date: `May 15, 2022`
    },
    {
        char: { id: `jazz`, name: `Jazz` },
        name: `Sharkbite`,
        time: `03:57:864`,
        date: `March 15, 2021`
    }
];
currentRecords[`dogenzaka`] = [
    {
        char: { id: `coin`, name: `Coin` },
        name: `Veloci`,
        time: `03:26:839`,
        date: `July 7, 2022`
    },
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `Latelaturi`,
        time: `03:27:777`,
        date: `July 5, 2022`
    },
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `TacoLover`,
        time: `03:28:985`,
        date: `October 4, 2021`
    },  
];
currentRecords[`kibogaoka`] = [
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `Latelaturi`,
        time: `04:07:729`,
        date: `July 5, 2021`
    },
    {
        char: { id: `goldenrhino`, name: `Golden Rhino` },
        name: `Veloci`,
        time: `04:12:695`,
        date: `July 20, 2022`
    },
    {
        char: { id: `unknown`, name: `Unknown` },
        name: `Buggy`,
        time: `04:16:626`,
        date: `June 7, 2022`
    },
    {
        char: { id: `jacket`, name: `Jacket` },
        name: `Sharkbite`,
        time: `04:20:410`,
        date: `March 29, 2022`
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
            $(`#${keyId}-${l}-time`).text(data[l].time);
            $(`#${keyId}-${l}-date`).text(data[l].date);
            $(`#${keyId}-${l}-char-name`).text(data[l].char.name);
            $(`#${keyId}-${l}-char-icon`).removeClass(`icon-unknown`);
            $(`#${keyId}-${l}-char-icon`).addClass(`icon-${data[l].char.id}`);
        }
    }
})();