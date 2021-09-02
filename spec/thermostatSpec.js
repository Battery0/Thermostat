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
});