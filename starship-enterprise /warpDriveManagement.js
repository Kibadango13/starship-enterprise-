const managementUtil = require("../utils/management.utils");

module.exports = (damagedInjectors, speedOfLight) => {
  const { calculateVelocityBySpeadOfLight } = managementUtil;

  const desiredShipVolacity = calculateVelocityBySpeadOfLight(speedOfLight);

  const injectors = transformDamageToEnergy(damagedInjectors);

  const totalInjectorEnergy = calculateSum(injectors, "energy");
  const totalActiveInjectors = calculateSum(injectors, "active");

  const remainingEnergy = desiredShipVolacity - totalInjectorEnergy;
  const energyPerInjector = remainingEnergy / totalActiveInjectors;

  const flowRate = calculateEnergyPerInjectors(injectors, energyPerInjector);

  if (flowRate.find((injector) => injector.maxCapacity === true)) {
    return { msg: "Unable to comply", operationCapacity: `0 mg/s` };
  }

  return {
    energyBalanceRegulator: tranformToResult(flowRate),
    operationCapacity: calculateTime(totalActiveInjectors, remainingEnergy),
  };
};

///Functions
function transformDamageToEnergy(injectors) {
  const { injectorEnergyByDamage } = managementUtil;
  return Object.entries(injectors).map(([key, value]) => {
    const energy = injectorEnergyByDamage(value);
    return {
      name: key,
      damage: value,
      energy: injectorEnergyByDamage(value),
      active: isInjectorActive(energy),
    };
  });
}

function calculateEnergyPerInjectors(injectors, energyPerInjector) {
  return injectors.map((injector) => {
    const { energy, active } = injector;
    const addEnergy = active == 1 ? energy + energyPerInjector : energy;

    return {
      ...injector,
      energy: active == 1 ? energy + energyPerInjector : energy,
      maxCapacity: isInjectorMaxCapacity(addEnergy, energy),
    };
  });
}

function calculateSum(injectorsSummary, param) {
  return injectorsSummary.reduce((prev, current) => prev + current[param], 0);
}

function isInjectorActive(injector) {
  if (injector === 0) return 0;
  return 1;
}

function isInjectorMaxCapacity(flowRateInjector, injectorEnergyA) {
  if (flowRateInjector > injectorEnergyA + 99) {
    return true;
  }
  return false;
}

function calculateTime(totalValidInjectors, remainingEnergy) {
  const result = remainingEnergy / totalValidInjectors;

  if (result <= 0) {
    return "Infinito";
  }

  return `${100 - result} minutos`;
}

function tranformToResult(flowRate) {
  return flowRate.map((injector) => {
    return {
      [injector.name]: `${injector.energy} mg/s`,
    };
  });
}
