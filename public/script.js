// window.addEventListener("scroll", function() {
//   const scrollPos = window.scrollY;
//   if (scrollPos > 10) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

// const express = require("express");
// require("dotenv").config();
// // const apiKey = process.env.SECRET;

//?!     ===========================
//!                 Time
//?!     ===========================
const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//?!     ===========================
//!              copy link
//?!     ===========================
// const $temp = $("<input>");
// const $url = $(location).attr('href');



//?!     ===========================
//!              GeoLocation
//?!     ===========================



// const x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(showPosition);
//   } else {
//     x.innerText = "Geolocation is not supported by this browser.";
//   }
// }
// function showPosition(position) {
//   x.innerText = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;

// }

//?     ===========================
//!         Get Weather Info
//?     ===========================

let globalTemp;

// const ApiKey = process.env.MY_API_KEY;

let weather = {
  apiKey: "7a9e0d0b445ca1be17f7e626ad349281",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey +
        "&units=imperial"
    )
      .then((response) => {
        if (!response.ok) {
          console.log("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  //?     ===========================
  //!     Display Weather & Date Info
  //?     ===========================

  displayWeather: function(data) {
    const dateTime = date + " " + time;
    console.log(today);
    console.log(date);
    console.log(time);
    console.log(dateTime);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(data.main);
    globalTemp = data.main.temp;
    console.log(globalTemp);
    if (globalTemp > 50) {
      document.querySelector(".boxed").style.backgroundColor = "red";
    } else {
      document.querySelector(".boxed").style.backgroundColor = "blue";
    }
    document.querySelector(".city").innerText =
      "In  " + name + "\n\nOn  " + date + " / At  " + time;
    // document.querySelector(".icon").src =
    //   "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    let tempVal = (document.querySelector(".temp").innerText = temp + "°F");
    // console.log(tempVal);
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
    document.querySelector(".weather").classList.remove("loading");
    // document.body.style.backgroundImage =
    //   "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
weather.fetchWeather("san francisco");
document.querySelector(".search").addEventListener("click", function() {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

//?     ===========================
//!          unit conversion
//?     ===========================

function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerText =
    (valNum - 273.15) * 1.8 + 32;
  console.log(valNum);
}

//?      ===========================
//!            style change
//?      ===========================

const changeBackground = document.getElementById("weatherUI");

console.log(weather.displayWeather.globalTemp);

// function switchColor(tempVal) {
//   const tempColor = document.getElementsByClassName("temp");
//   //<!--!  NEEDS DYNAMIC VARIABLE USING CONDITIONS
//   // console.log(temp);
// let degree = tempColor[0].innerText;
// let temp = parseFloat(tempVal);
const climateColorCold = "blue";
const climateColorWarm = "light-orange";
const climateColorHot = "red";
//   // console.log(degree);
//   //<!-- if(tempColor.value ) -->

if (globalTemp > 50 && globalTemp < 78) {
  changeBackground.style.backgroundColor = climateColorWarm;
} else {
  console.log("shit!!");
}

//   console.log("Log Background Change functionality");

//?      ===========================
//!           This attaches the
//!         click event listener
//!             to the button
//?      ===========================
