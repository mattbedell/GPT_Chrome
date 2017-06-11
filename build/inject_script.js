window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
window.gptslots = [];
googletag.cmd.push(function () {
    console.log('---->>>> INIT... QUEUE POSITION', googletag.cmd.j);
    window._defineSlot = window.googletag.defineSlot;
    window.googletag.defineSlot = (...args) => {
        console.log(' --->>> slot defined')
        let slot = window._defineSlot(...args);
        configSlotInfo(slot);
        return slot;
    };
});

function configSlotInfo(slot) {
    let path = slot.getAdUnitPath();
    let name = path.split('/')[path.split('/').length - 1];
    let divId = slot.getSlotElementId();
    window.gptslots.push({
        path,
        name,
        divId,
        divExists: document.querySelector(`#${divId}`) ? true : false,
        targeting: getTargeting(slot),
    });
};

function getTargeting(slot) {
    return slot.getTargetingKeys().map(key => {
        return {
            key,
            val: slot.getTargeting(key),
        };
    })
};


addEventListener('REQUEST_DOM_SLOTS', () => {
    dispatchEvent(new CustomEvent('RECIEVE_DOM_SLOTS', {detail: window.gptslots}));
})













// let slotshape = {
//     adUnit: 'Leaderboard_1',
//     adUnitPath: '123455/Leaderboard_1',
//     div: 'ad-div-leaderboard',
//     divExists: true,
//     targeting: [
//         {
//             key: `${key}`,
//             val: `${val}`,
//         },
//     ]
// }