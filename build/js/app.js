(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function City(city) {
  this.name = city['name'];
  this.temperature = city['main']['temp'];
  this.humidity = city['main']['humidity'];
}

exports.cityModule = City

},{}],2:[function(require,module,exports){
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

},{"./../js/city.js":1}]},{},[2]);
