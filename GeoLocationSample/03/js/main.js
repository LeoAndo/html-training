var id, target, options;

window.onload = function () {
    console.log("loaded!");
    startWatchPosition();
}

function startWatchPosition() {
    if (isGeoLocationSupported()) {
        target = { latitude: 35.68109674390465, longitude: 139.7659553549681 }; // 目的地: 東京駅付近
        options = { enableHighAccuracy: false, timeout: 10000, maximumAge: 0 };
        // 現在地の監視を開始する
        id = navigator.geolocation.watchPosition(success, error, options);
    }
}

function success(pos) {
    console.log("success");
    var latitude = pos.coords.latitude;
    var longitude = pos.coords.longitude;
    setResultText("latitude: " + latitude + " longitude: " + longitude);
    if (target.latitude === latitude && target.longitude === longitude) {
        setResultText('Congratulations, you reached the target');
        navigator.geolocation.clearWatch(id); // 監視を終了する
    }
}

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
}

// check geo location is already supported.
function isGeoLocationSupported() {
    if (navigator.geolocation) {
        /* geolocation is available */
        setResultText("Geolocation is supported by this browser.");
        return true;
    } else {
        /* geolocation IS NOT available */
        setResultText("Geolocation is NOT supported by this browser.");
        return false;
    }
}

function setResultText(text) {
    document.getElementById("resultText").innerHTML = text;
}