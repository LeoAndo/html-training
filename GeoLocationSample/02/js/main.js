var resultText;
var latitude;
var longitude;
window.addEventListener("load", init, false);
function init() {
    console.log("loaded!");
    resultText = document.getElementById("resultText");
    if (isGeoLocationSupported()) {
        resultText.innerHTML = "Geolocation is supported by this browser.";
    } else {
        resultText.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function openGoogleMap() {
    if (latitude == undefined || longitude == undefined) {
        alert("Please get the location first.");
    } else {
        var url = "https://www.google.com/maps/place/" + latitude + "," + longitude;
        window.open(url, '_blank');
    }
}

// get Current Location.
function getCurrentLocation() {
    getCurrentPosition();
}

// check geo location is already supported.
function isGeoLocationSupported() {
    console.log("isGeoLocationSupported!");
    if (navigator.geolocation) {
        console.log("Geolocation is available!");
        return true;
    } else {
        console.log("Geolocation is NOT available!");
        return false;
    }
}

// get Current Location.
function getCurrentPosition() {
    console.log("getCurrentLocation!");
    if (this.isGeoLocationSupported()) {
        var options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, this.options);
    }
}

function onSuccess(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + " Longitude: " + longitude);
}

function onError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}