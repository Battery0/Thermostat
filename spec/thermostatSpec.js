describe('Thermostat', () => {

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.temperature).toBe(20);
  });

  it('should allow you to increase the temp with up function', () => {
    thermostat.increase();
    expect(thermostat.temperature).toBe(21);
  });

  it('should allow you to decrease the temp with down function', () => {
    thermostat.decrease();
    expect(thermostat.temperature).toBe(19);
  });

  it('cannot go below 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.decrease();
    }
    expect(thermostat.temperature).toBe(10);
  })

  it('has power saving mode on by default', () => {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('power saving mode can be turned off', () => {
    thermostat.powerSaveOff();
    expect(thermostat.powerSavingMode).toBe(false)
  });

  it('max temperature is 25 degrees if power saving mode is on', () => {
    for (let i = 20; i < 26; i++) {
      thermostat.increase();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it('max temperature is 32 degrees if power saving mode is off', () => {
    thermostat.powerSaveOff();
    for (let i = 20; i < 33; i++) {
      thermostat.increase();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  it('can have temperature reset to 20 degrees', () => { 
    for (let i = 0; i < 3; i++) {
      thermostat.increase();
    }
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('can return the current energy usage', () => {
    expect(thermostat.usage).toEqual('medium-usage');
  });

  it('can return a low energy if below 18 degrees', () => {
    for (let i = 0; i < 5; i++) {
      thermostat.decrease();
    }
    expect(thermostat.usage).toEqual('low-usage');
  });
});