"use strict";


let apiKeys = {};

let weatherInfo = (searchZip) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: 'apiKeys.json'
    }).then((response) => {
        apiKeys = response;
        let thisThing = apiKeys.APPID;
        $.ajax({
          method: 'GET',
          url: `http://api.openweathermap.org/data/2.5/weather?zip=${searchZip}&APPID=${thisThing}`
        }).then((response2) => {
          resolve(response2);
          console.log(response2);
        }, (errorResponse2) => {
          reject(errorResponse2);
        });
    },(errorResponse) => {
      reject(errorResponse);
        });
    });
  };

weatherInfo(47712);




