function calculateVelocityBySpeadOfLight(percent) {
  if (percent <= 0) return undefined;

  const speadOfLight = 300;
  return (percent / 100) * speadOfLight;
}

function injectorEnergyByDamage(percent) {
  return 100 - percent;
}

module.exports = { calculateVelocityBySpeadOfLight, injectorEnergyByDamage };
