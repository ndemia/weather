const key = process.env.API_KEY;

let findCityName = (latitude, longitude) => {
  fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${key}`)
    .then((response) => response.json())
    .then((data) => console.log(JSON.stringify(data)))
}

let getLocationCoordinates = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

function getCity () {
  getLocationCoordinates()
    .then((response) => {
      let coordinates = response.coords;
      return coordinates;
    })
    .then((coordinates) => {
      let { latitude, longitude } = coordinates;
      findCityName(latitude, longitude);
    })
    .catch((error) => {console.log(error.message)})
}

getCity();