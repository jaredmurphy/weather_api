
document.addEventListener("DOMContentLoaded", function() {

  // function to call api data
  function fetchWeather(path, callback) {
    console.log('fectch weather function started');
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
  

  var apiCall = function(city) {
    console.log('apiCall function started')
    var link = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=45683852bbe910d7d9147f78f770c0b7";
    // calling fetch data function
    fetchWeather(link, function(data) {
      console.log(data);
    }) // ends apiCall function
  } 


  

  console.log('get_weather.js loaded');
  var input = document.getElementById('city');
  var submitButton = document.getElementById('submit');

  submitButton.onclick = function() {
    console.log('button was clicked: ' + input.value);

    apiCall(input.value);

    
  //var test = document.createElement("p");
  //test.textContent= input.value;
  //test.id = "test";
  //document.body.appendChild(test);
  };



  


});




