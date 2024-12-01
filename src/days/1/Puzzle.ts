import linesToArray from '../../utils/linesToArray';

const first = (input: string) => {
  const first: Array<number> = [];
  const sec: Array<number> = [];
  let sum: number = 0;

  const lines = linesToArray(input);

  lines.forEach((line) => {
    const row = line.split(' ');
    first.push(parseInt(row[0]));
    sec.push(parseInt(row[row.length - 1]));
  });

  first.sort();
  sec.sort();

  for (let i = 0; i < first.length; i++) {
    sum += Math.abs(first[i] - sec[i]);
  }

  return sum;
};

const expectedFirstSolution = 1603498;

const second = (input: string) => {
  const first: Array<number> = [];
  const sec: Array<number> = [];
  let similarityScore: number = 0;

  const lines = linesToArray(input);

  lines.forEach((line) => {
    const row = line.split(' ');
    first.push(parseInt(row[0]));
    sec.push(parseInt(row[row.length - 1]));
  });

  first.forEach((firNum) => {
    let counter = 0;
    sec.forEach((secNum) => {
      if (firNum === secNum) {
        counter++;
      }
    });
    similarityScore += firNum * counter;
  });

  return similarityScore;
};

const expectedSecondSolution = 25574739;

export { first, expectedFirstSolution, second, expectedSecondSolution };
