describe("Warp-Drive management software", () => {
  const energyRegulator = require("./warpDriveManagement");

  it("case 1 should return operation capacity Infinite", () => {
    expect(
      energyRegulator(
        {
          injectorDamageA: 0,
          injectorDamageB: 0,
          injectorDamageC: 0,
        },
        100
      )
    ).toEqual({
      energyBalanceRegulator: [
        { injectorDamageA: "100 mg/s" },
        { injectorDamageB: "100 mg/s" },
        { injectorDamageC: "100 mg/s" },
      ],
      operationCapacity: "Infinito",
    });
  });

  it("case 2 should return operation capacity Infinite", () => {
    expect(
      energyRegulator(
        {
          injectorDamageA: 0,
          injectorDamageB: 0,
          injectorDamageC: 0,
        },
        100
      )
    ).toEqual({
      energyBalanceRegulator: [
        { injectorDamageA: "100 mg/s" },
        { injectorDamageB: "100 mg/s" },
        { injectorDamageC: "100 mg/s" },
      ],
      operationCapacity: "Infinito",
    });
  });

  it("case 3 should return operation capacity Infinite", () => {
    expect(
      energyRegulator(
        {
          injectorDamageA: 0,
          injectorDamageB: 0,
          injectorDamageC: 0,
        },
        30
      )
    ).toEqual({
      energyBalanceRegulator: [
        { injectorDamageA: "30 mg/s" },
        { injectorDamageB: "30 mg/s" },
        { injectorDamageC: "30 mg/s" },
      ],
      operationCapacity: "Infinito",
    });
  });

  it("case 4 should return operation capacity 90 minutes", () => {
    expect(
      energyRegulator(
        {
          injectorDamageA: 20,
          injectorDamageB: 10,
          injectorDamageC: 0,
        },
        100
      )
    ).toEqual({
      energyBalanceRegulator: [
        { injectorDamageA: "90 mg/s" },
        { injectorDamageB: "100 mg/s" },
        { injectorDamageC: "110 mg/s" },
      ],
      operationCapacity: "90 minutos",
    });
  });

  it("case 5 should return operation capacity 80 minutes", () => {
    expect(
      energyRegulator(
        {
          injectorDamageA: 0,
          injectorDamageB: 0,
          injectorDamageC: 100,
        },
        80
      )
    ).toEqual({
      energyBalanceRegulator: [
        { injectorDamageA: "120 mg/s" },
        { injectorDamageB: "120 mg/s" },
        { injectorDamageC: "0 mg/s" },
      ],
      operationCapacity: "80 minutos",
    });
  });

  it("case 6 should return operation capacity 50 minutes", () => {
    expect(
      energyRegulator(
        {
          injectorDamageA: 0,
          injectorDamageB: 0,
          injectorDamageC: 0,
        },
        150
      )
    ).toEqual({
      energyBalanceRegulator: [
        { injectorDamageA: "150 mg/s" },
        { injectorDamageB: "150 mg/s" },
        { injectorDamageC: "150 mg/s" },
      ],
      operationCapacity: "50 minutos",
    });
  });

  it("case 7 should return operation capacity 50 minutes", () => {
    expect(
      energyRegulator(
        {
          injectorDamageA: 0,
          injectorDamageB: 0,
          injectorDamageC: 30,
        },
        140
      )
    ).toEqual({
      energyBalanceRegulator: [
        { injectorDamageA: "150 mg/s" },
        { injectorDamageB: "150 mg/s" },
        { injectorDamageC: "120 mg/s" },
      ],
      operationCapacity: "50 minutos",
    });
  });

  it("should return case 8 Unable to comply", () => {
    expect(
      energyRegulator(
        {
          injectorDamageA: 20,
          injectorDamageB: 50,
          injectorDamageC: 40,
        },
        170
      )
    ).toEqual({ msg: "Unable to comply", operationCapacity: `0 mg/s` });
  });
});
