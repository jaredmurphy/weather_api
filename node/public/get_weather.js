
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
    // below sets up data object
    var dataContainer = document.getElementById('dataLists');
    var cityWeatherList = document.createElement("ul");
    dataContainer.insertBefore(cityWeatherList, dataContainer.firstChild)
    // below adds data to dom 
    for (key in data) {
      var weatherDataPoint = document.createElement("li");
      weatherDataPoint.textContent = key + ": " + data[key];
      weatherDataPoint.id = key;
      cityWeatherList.appendChild(weatherDataPoint);
    }
    
  } // ends add to dom function
  

  var apiCall = function(city) {
    var link = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=45683852bbe910d7d9147f78f770c0b7";
    // calling fetch data function
    fetchWeather(link, function(data) {
      var weatherData = {};
      weatherData.city = data.name
      weatherData.humidity = data.main.humidity;
      weatherData.temp = data.main.temp;
      weatherData.description = data.weather[0].description;
      weatherData.wind = data.wind.speed;
      addToDom(weatherData)

    }) // ends feetchWeather function
  } // ends apiCall function

  var input = document.getElementById('city');
  var submitButton = document.getElementById('submit');

  submitButton.onclick = function() {
    apiCall(input.value);
    input.value = "";
  }; // ends submit button function
}); // ends document dom loaded function




