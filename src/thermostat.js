class Thermostat {
/*
  static get DEFAULT() {
    return 20;
  }
*/

  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.usage = 'medium-usage';
  }

  increase() {
    let maxTemp = this._setMaxTemp();
    if (this.temperature < maxTemp) this.temperature++;
    this._updateUsage();
  }

  decrease() {
    if (this.temperature > 10) this.temperature--;
    this._updateUsage();
  }

  powerSaveOff() {
    this.powerSavingMode = false;
  }
  
  reset() {
    this.temperature = 20;
  }

  _setMaxTemp() {
    if (this.powerSavingMode === true) {
      return 25;
    } else if (this.powerSavingMode === false) {
      return 32;
    }
  }

  _updateUsage() {
    if (this.temperature < 18) {
      this.usage = 'low-usage';
    } else if (this.temperature <= 25) {
      this.usage = 'medium-usage';
    } else {
      this.usage = 'high-usage';
    }
  }
}
