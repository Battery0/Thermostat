class Thermostat {

  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MIN_TEMPERATURE = 10;
    this.MAX_POWER_SAVE_TEMPERATURE = 25;
    this.MAX_TEMPERATURE = 32
    this.LOW_USAGE_TEMPERATURE_THRESHOLD = 18;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
    this.usage = 'medium-usage';
  }

  increase() {
    let maxTemp = this._setMaxTemp();
    if (this.temperature < maxTemp) this.temperature++;
    this._updateUsage();
  }

  decrease() {
    if (this.temperature > this.MIN_TEMPERATURE) this.temperature--;
    this._updateUsage();
  }

  powerSaveOff() {
    this.powerSavingMode = false;
  }
  
  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  _setMaxTemp() {
    if (this.powerSavingMode === true) {
      return this.MAX_POWER_SAVE_TEMPERATURE;
    } else if (this.powerSavingMode === false) {
      return this.MAX_TEMPERATURE;
    }
  }

  _updateUsage() {
    if (this.temperature < this.LOW_USAGE_TEMPERATURE_THRESHOLD) {
      this.usage = 'low-usage';
    } else if (this.temperature <= this.MAX_POWER_SAVE_TEMPERATURE) {
      this.usage = 'medium-usage';
    } else {
      this.usage = 'high-usage';
    }
  }
}
