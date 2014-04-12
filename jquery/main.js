var winHeight;

function windowHeight(){
    if ($(window).height()>400){
        winHeight = ($(window).height()) - 120;
    } else{
        winHeight = 400;
    }

    return winHeight;
}
