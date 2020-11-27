var cont = 0

function mini(){
    cont++

    if( (cont%2) == 0 ){
        $("#chatbot").animate({
            bottom:"-54vh"
        })
        $('#img').animate({
            opacity:"1"
        })
        $('btn').animate({
            opacity:'0'
        })
    }

    else{
        $("#chatbot").animate({
            bottom:"5vh"
        })
        $('#img').animate({
            opacity:"0"
        })
        $('btn').animate({
            opacity:'1'
        })
    }
}

function refreshIframe() {
    var ifr = document.getElementById('iframe');
    ifr.src = ifr.src;
}