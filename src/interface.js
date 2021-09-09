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
    updateTemperature();
  })

  document.querySelector('#psm-on').addEventListener('click', () => {
    thermostat.powerSaveOn();
    document.querySelector('#power-saving-status').innerText = 'on'
    updateTemperature();
  })

});