
document.addEventListener("DOMContentLoaded", function() {

  // function to call api data
  function fetchWeather(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          var data = JSON.parse(httpRequest.responseText);
          if (callback) {
            callback(data);
          }
        }
      }
    }; // ends httpRequest.onreadystate
    httpRequest.open("GET", path);
    httpRequest.send();
  } // ends fetchWeather function

  var addToDom = function(data) {
    var city = document.createElement("p");
    city.textContent= data.name;
    city.id = "city";
    document.body.appendChild(city);
    // below sets up data object
    var weatherData = {};
    weatherData.humidity = data.main.humidity;
    weatherData.temp = data.main.temp;
    weatherData.rain = data.rain['1h'];
    weatherData.description = data.description.description;
    weatherData.wind = data.wind.speed;
    console.log(weatherData);

    var cityWeatherList = document.createElement("ul");

    for (key in weatherData) {
      console.log(key + " " + weatherData[key])
    }
    
  }
  

  var apiCall = function(city) {
    var link = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=45683852bbe910d7d9147f78f770c0b7";
    // calling fetch data function
    fetchWeather(link, function(data) {
      addToDom(data)
      //console.log(data);
    }) // ends apiCall function
  } 

  var input = document.getElementById('city');
  var submitButton = document.getElementById('submit');

  submitButton.onclick = function() {
    apiCall(input.value);

  };



  


});




