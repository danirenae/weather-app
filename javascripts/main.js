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
      console.log(errorResponse);
      reject(errorResponse);
        });
    });
  };

$(document).ready(function(){
  $('#weather-lookup').on("click", ()=>{
    let searchy = $("#zip-search").val();
    console.log("button works", searchy);
    weatherInfo(searchy).then((dataFromAPI)=>{
    // $('#weather-lookup').button('reset');
      let output = $("#output").append(
        `<div>
        <h2> ${dataFromAPI.name}</h2>
        <h2> ${dataFromAPI.main.humidity}</h2>
        </div>`
        );
    });
    });
  });

weatherInfo();




