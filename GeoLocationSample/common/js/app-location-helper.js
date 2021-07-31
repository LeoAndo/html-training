
class AppLocationHelper {
    constructor() {
        console.log("AppLocationHelper Constructor!");
    }

    options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };
    // check geo location is already supported.
    isGeoLocationSupported() {
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
    getCurrentPosition() {
        console.log("getCurrentLocation!");
        if (this.isGeoLocationSupported()) {
            console.log(this.options);
            navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, this.options);
        }
    }

    onSuccess(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + " Longitude: " + longitude);
        return [latitude, longitude];
    }

    onError(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        // return `ERROR(${err.code}): ${err.message}`;
        return err.message;
    }
}