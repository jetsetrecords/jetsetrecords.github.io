$(`table`).hide();

$(`button[id^='toggle-button-']`).click(function() {
    let id = this.id.replace('toggle-button-','');
    $(`#data-${id}`).toggle();
})