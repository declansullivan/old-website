audio = new Audio("./assests/starwars.mp3");
var buttonholder;
var button;
var crawl;
var info;

window.onload = function () {
    buttonholder = this.document.getElementById('begin');
    button = this.document.getElementById('start');
    crawl = this.document.getElementById('crawl');
    info = this.document.getElementById('info');

    button.onclick = function() {
        button.style.display = "none";
        buttonholder.style.display = "none";
        crawl.style.display = "inline";
        sleep(0).then(() => {
            audio.play();
            sleep(30000).then(() => {
                fade();
            });
        });
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function fade(){
    try {
        audio.volume -= 0.1;
        setTimeout(fade, 400);
        // setTimeout(fade, 00);
    } catch (e) {
        audio.pause();
        crawl.style.display = "none";
        info.style.display = "inline";
        document.body.style.background = "white";
    }
}