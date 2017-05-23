var City = require('./../js/city.js').cityModule;
var apiKey = "a81945fd122310b99fab507675f2d4ca"

$(document).ready(function(){
  var city = null;

  $('h4#currentTempC').hide();
  $('h4#currentTempF').hide();

  $('#weather-form').submit(function(e) {
    e.preventDefault()
    var city = $('#cityname').val();
    $("#cityname").val("");
    $('#citytext').text("You have chosen " + city + ".")
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a81945fd122310b99fab507675f2d4ca', function(response){

      city = new City(response);
      $('#humidity').text(city.humidity);
      var celTemp = city.temperature - 273.15;
      var farTemp = (city.temperature * (9/5)) - 459.67;
      console.log(celTemp);
      $('#currentTempK').text("Kelvin: " + city.temperature);
      $('#currentTempC').text("Celsius: " + Math.round(celTemp));
      $('#currentTempF').text("Farenheit: " + Math.round(farTemp));
    });
  });

  $('#showCel').click(function() {
    $('#currentTempC').show(1000);
  });

  $('#showFar').click(function() {
    $('#currentTempF').show(1000);
  });

});
