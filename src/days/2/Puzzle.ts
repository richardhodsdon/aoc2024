import linesToArray from '../../utils/linesToArray';

const first = (input: string) => {
  const report: string[] = linesToArray(input);
  let counter = 0;
  report.forEach((levels) => {
    // console.log(levels);
    // console.log(isSafe(levels));
    if (isSafe(levels)) {
      counter++;
    }
  });

  return counter;
};

const isSafe = (levelsString: string): boolean => {
  const levels: number[] = levelsString
    .split(' ')
    .map((level) => parseInt(level));
  const levelsDiff: number[] = [];
  let isNegative: boolean;
  let isSafe: boolean = true;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];
    levelsDiff.push(diff);
    if (isNegative === undefined) {
      isNegative = diff < 0;
    }

    if (diff <= 0 && !isNegative) {
      return false;
    }
    if (diff >= 0 && isNegative) {
      return false;
    }
  }

  levelsDiff.forEach((diff) => {
    if (Math.abs(diff) > 3) {
      isSafe = false;
    }
  });

  return isSafe;
};

const expectedFirstSolution = 479;

const second = (input: string) => {
  const report: string[] = linesToArray(input);
  let counter = 0;
  report.forEach((levels) => {
    if (!isSafe(levels)) {
      // Check Problem Dampener
      if (!isSafePD(levels)) {
        return;
      }
    }
    counter++;
  });

  return counter;
};

const isSafePD = (levelsString: string): boolean => {
  const levels: number[] = levelsString
    .split(' ')
    .map((level) => parseInt(level));

  for (let i = 0; i < levels.length; i++) {
    const tempLevels = [...levels];
    tempLevels.splice(i, 1);
    // console.log(tempLevels);
    if (isSafe(tempLevels.join(' '))) {
      return true;
    }
  }

  return false;
};

const expectedSecondSolution = 531;

export { first, expectedFirstSolution, second, expectedSecondSolution };
