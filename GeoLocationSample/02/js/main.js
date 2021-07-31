var resultText;
var appLocationHelper;

window.addEventListener("load", init, false);
function init() {
    console.log("loaded!");
    resultText = document.getElementById("resultText");
    appLocationHelper = new AppLocationHelper();
    if (appLocationHelper.isGeoLocationSupported()) {
        resultText.innerHTML = "Geolocation is supported by this browser.";
    } else {
        resultText.innerHTML = "Geolocation is not supported by this browser.";
    }
}
// get Current Location.
function getCurrentLocation() {
    appLocationHelper.getCurrentPosition();
}