document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(showPosition, showError);

    function showPosition(position) {
        const locationDiv = document.getElementById('location');
        locationDiv.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
    }

    function showError(error) {
        const locationDiv = document.getElementById('location');
        switch (error.code) {
            case error.PERMISSION_DENIED:
                locationDiv.innerHTML = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                locationDiv.innerHTML = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                locationDiv.innerHTML = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                locationDiv.innerHTML = "An unknown error occurred.";
                break;
        }
    }
});