class Thermostat {
/*
  static get DEFAULT() {
    return 20;
  }
*/

  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  increase() {
    if (this.powerSavingMode === true && this.temperature < 25) {
      this.temperature++;
    } else if (this.powerSavingMode === false && this.temperature < 32) {
      this.temperature++;
    }
  }

  decrease() {
    if (this.temperature > 10) {
      this.temperature--;
    }
  }

  powerSaveOff() {
    this.powerSavingMode = false;
  }



}