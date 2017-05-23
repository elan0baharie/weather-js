function City(city) {
  this.name = city['name'];
  this.temperature = city['main']['temp'];
  this.humidity = city['main']['humidity'];
}

exports.cityModule = City
