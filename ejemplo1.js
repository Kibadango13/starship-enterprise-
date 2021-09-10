module.exports = (text, subText) => {
  const indexMatches = findIndexesOfSubText(text, subText);
  const maximumDistance = findMaximumDistance(text, subText, indexMatches);
  return maximumDistance;
};

const findIndexesOfSubText = (text, subText) => {
  const indexMatches = [];
  const subTextLength = subText.length;
  let match;
  let i = 0;

  while ((match = text.indexOf(subText, i)) > -1) {
    indexMatches.push(match);
    i = match + subTextLength;
  }

  return indexMatches;
};

const findMaximumDistance = (text, subText, indexMatches) => {
  let max = -1;
  indexMatches.forEach((countLeftSide) => {
    const textTotalLength = text.length;
    const countRightSide = textTotalLength - (countLeftSide + subText.length);

    if (countLeftSide > countRightSide && max < countLeftSide) {
      max = countLeftSide;
    }

    if (max < countRightSide) {
      max = countRightSide;
    }
  });

  return max;
};
