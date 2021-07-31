var resultText;

window.onload = function () {
    resultText = document.getElementById("resultText");
    isGeoLocationSupported();
}

// check geo location is already supported.
function isGeoLocationSupported() {
    if (navigator.geolocation) {
        /* geolocation is available */
        resultText.innerHTML = "Geolocation is supported by this browser.";
    } else {
        /* geolocation IS NOT available */
        resultText.innerHTML = "Geolocation is not supported by this browser.";
    }
}