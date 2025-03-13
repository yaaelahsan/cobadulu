function extractHostname(url) {
    let hostname;
    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];

    return hostname;
}

function backHistory() {
    const currentHost = window.location.hostname;
    const refererHost = extractHostname(document.referrer);

    if (currentHost != refererHost) {
        return window.location = window.location.origin;
    }
    return history.back();
}