var video;

window.addEventListener("load", init, false);

function init() {
    console.log("window.onload");
    video = document.getElementById("video");
}

function $(id) {
    return document.getElementById(id);
}

function play() {
    video.play();
}

function pause() {
    video.pause();
}
function restart() {
    video.currentTime = 0;
    video.play();
}