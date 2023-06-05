
let bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"
 getLocation=() =>{
   
    navigator.geolocation.getCurrentPosition(
        (position) => {
            bdcApi = bdcApi
                + "?latitude=" + position.coords.latitude
                + "&longitude=" + position.coords.longitude
                + "&localityLanguage=en";
            getApi(bdcApi);
        },
        (err) => { getApi(bdcApi); },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
}

 const getApi=(bdcApi) =>{
    const Http = new XMLHttpRequest();
    Http.open("GET", bdcApi);
    Http.send();
    Http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
           
        }
    };
}



console.log(navigator.geolocation)


// myGeolocator()
 
        let userLocation = navigator.geolocation;
       if(userLocation) {
          userLocation.getCurrentPosition(success);
       } else {
          "The geolocation API is not supported by your browser.";
       }
    
    function success(data) {
       let lat = data.coords.latitude;
       let long = data.coords.longitude;
      console.log(lat, long)
    }
