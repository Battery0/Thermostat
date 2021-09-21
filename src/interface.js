document.addEventListener('DOMContentLoaded', () => {

  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.usage;
  }

  const thermostat = new Thermostat
  updateTemperature();

  document.querySelector('#increase').addEventListener('click', () => {
    thermostat.increase();
    updateTemperature();
  });

  document.querySelector('#decrease').addEventListener('click', () => {
    thermostat.decrease();
    updateTemperature();
  });

  document.querySelector('#reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector('#psm-off').addEventListener('click', () => {
    thermostat.powerSaveOff();
    document.querySelector('#power-saving-status').innerText = 'off'
    //updateTemperature();
  })

  document.querySelector('#psm-on').addEventListener('click', () => {
    thermostat.powerSaveOn();
    document.querySelector('#power-saving-status').innerText = 'on'
    //updateTemperature();
  })

  document.getElementById('city-select').addEventListener('submit', () => {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
    document.getElementById('city-name').innerText = 'in ' + city + ' is: '

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        document.getElementById('current-temp').innerText = data.main.temp;
        document.getElementById('humidity').innerText = data.main.humidity;
        document.getElementById('main-descrip').innerText = data.weather[0].description;
      })
      .catch(() => {
        document.getElementById('error').innerText = 'The location you typed does not exist. Please try again.'
      })
    });



});