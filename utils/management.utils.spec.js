const managementUtil = require("../utils/management.utils");

describe("management utils ", () => {
  it("should return the desired speed of the ship in base of the speed of light (mg/s)", () => {
    const { calculateVelocityBySpeadOfLight } = managementUtil;
    expect(calculateVelocityBySpeadOfLight(100)).toBe(300);
    expect(calculateVelocityBySpeadOfLight(30)).toBe(90);
    expect(calculateVelocityBySpeadOfLight(50)).toBe(150);
  });

  it("should return injector energy capacity taking into account damage", () => {
    const { injectorEnergyByDamage } = managementUtil;
    expect(injectorEnergyByDamage(0)).toBe(100);
    expect(injectorEnergyByDamage(20)).toBe(80);
    expect(injectorEnergyByDamage(50)).toBe(50);
  });
});
