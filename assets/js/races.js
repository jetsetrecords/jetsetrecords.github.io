// Race Mode Records

let currentRecords = {};

currentRecords['second'] = [];
currentRecords['stadium'] = [];
currentRecords['highway'] = [];
currentRecords['chuo'] = [];
currentRecords['dogenzaka'] = [];
currentRecords['kibogaoka'] = [];

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