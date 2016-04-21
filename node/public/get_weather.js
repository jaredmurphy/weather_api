
document.addEventListener("DOMContentLoaded", function() {

  // function to call api data
  function fetchData(path, callback) {
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
  } // ends fetchData function

  var addToDom = function(data) {
    // below sets up data object
    var dataContainer = document.getElementById('dataLists');
    var cityWeatherList = document.createElement("ul");
    cityWeatherList.classList.add("callout");
    cityWeatherList.classList.add("secondary");
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
    fetchData(link, function(data) {
      var weatherData = {};
      weatherData.city = data.name
      weatherData.humidity = data.main.humidity;
      weatherData.temp = data.main.temp;
      weatherData.description = data.weather[0].description;
      weatherData.wind = data.wind.speed;
      addToDom(weatherData)

    }) // ends feetchWeather function
  } // ends apiCall function


  var dataBaseCall = function() {
    //http://localhost:3000/api/v1/cities
    var link = "http://localhost:3000/api/v1/cities.json"
    fetchData(link, function(data) {
      data.forEach(function(city) {
        relevantData = {}
        relevantData.name = city.name
        relevantData.humidity = city.humidity
        relevantData.temp = city.temp
        relevantData.description = city.description
        relevantData.wind = city.wind
        console.log(city);
        addToDom(relevantData);
      });
    })
  };
   //     var weatherData = {};

  var input = document.getElementById('city');
  var submitButton = document.getElementById('submit');

  
  
  dataBaseCall();
  submitButton.onclick = function() {
    apiCall(input.value);
    input.value = "";
  }; // ends submit button function
}); // ends document dom loaded function




