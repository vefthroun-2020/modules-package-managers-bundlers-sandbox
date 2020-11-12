// import { a, b, c } from "./testModule.js";
// import * as myModule from "./testModule.js";
// myModule.a();
// myModule.b();
// myModule.c();

const { Loader } = require("google-maps");

const loader = new Loader("AIzaSyC_WZc62BcPTG57XH_odHjprE9LzQrW9j0");

loader.load().then(function (google) {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});
