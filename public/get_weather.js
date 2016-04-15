
document.addEventListener("DOMContentLoaded", function() {
  
  console.log('get_weather.js loaded');
  var input = document.getElementById('city');
  var submitButton = document.getElementById('submit');
  submitButton.onclick = function() {
    console.log('button was clicked');
    console.log('city: ' + input.value);
    
  var test = document.createElement("p");
  test.textContent= input.value;
  test.id = "test";
  document.body.appendChild(test);
  };


  


});




