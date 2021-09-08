document.addEventListener('DOMContentLoaded', () => {

  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
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


});