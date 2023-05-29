if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

// if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
//     location.href = 'https://' + location.hostname + location.pathname + location.search;
// }
