function shareTwitter(url, title){
    var _url = encodeURIComponent(url);
    var _txt = encodeURIComponent(title);
    var left   = (screen.width/2) - (500/2);
    var top   = (screen.height/2) - (500/2);

    window.open('https://twitter.com/intent/tweet?url=' + _url + '&text=' + _txt,'share','toolbar=0,status=0,width=500,height=500, top=' + top + ', left=' + left);
    return false;
}

function shareFacebook(url, title){
    var _url = encodeURIComponent(url);
    var _txt = encodeURIComponent(title);
    var left   = (screen.width/2) - (500/2);
    var top   = (screen.height/2) - (500/2);

    window.open('https://facebook.com/sharer.php?u=' + _url + '&t=' + _txt,'share','toolbar=0,status=0,width=500,height=500, top=' + top + ', left=' + left);
    return false;
}

function shareLinkedIn(url, title){
    var _url = encodeURIComponent(url);
    var _txt = encodeURIComponent(title);
    var left   = (screen.width/2) - (500/2);
    var top   = (screen.height/2) - (500/2);

    window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + _url + '&title=' + _txt,'share','toolbar=0,status=0,width=500,height=500, top=' + top + ', left=' + left);
    return false;
}

function shareWhatsapp(url, title){
    var _url = encodeURIComponent(url);
    var _txt = encodeURIComponent(title);

    window.location.assign('whatsapp://send?text=' + _url + ' - ' + _txt);
    return false;
}

function shareLine(url, title){
    var _url = encodeURIComponent(url);
    var _txt = encodeURIComponent(title);
    var _br = encodeURIComponent("\r\n");

    window.location.assign('line://msg/text/' + _url + _br + _br + _txt);
    return false;
}