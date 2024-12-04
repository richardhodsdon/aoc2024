import Direction from '../../types/Direction';
import linesToArray from '../../utils/linesToArray';

const foundFromPoint = (
  x: number,
  y: number,
  wordSearch: string[][]
): number => {
  const XMAS = ['X', 'M', 'A', 'S'];
  const directions: Direction[] = [
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ];
  let counter: number = 0;

  // Return if we aren't starting with X
  if (wordSearch[x][y] !== XMAS[0]) {
    return counter;
  }

  directions.forEach((direction) => {
    // console.log(`*****direction: ${direction.x}, ${direction.y}`);

    for (let i = 1; i < XMAS.length; i++) {
      try {
        if (wordSearch[x + i * direction.x][y + i * direction.y] !== XMAS[i]) {
          return;
        }
      } catch (_) {
        return;
      }
    }
    // console.log(`--------start: ${x}, ${y}`);
    // console.log(`direction: ${direction.x}, ${direction.y}`);
    counter++;
    // console.log(`found: ${counter}`);
  });

  return counter;
};

const first = (input: string) => {
  const wordSearch: string[][] = [];
  const lines = linesToArray(input);
  let counter: number = 0;
  lines.forEach((line) => {
    wordSearch.push(line.split(''));
  });

  for (let i = 0; i < wordSearch.length; i++) {
    for (let j = 0; j < wordSearch[i].length; j++) {
      counter += foundFromPoint(i, j, wordSearch);
    }
  }

  return counter;
};

const expectedFirstSolution = 2297;

const foundFromPoint2 = (
  x: number,
  y: number,
  wordSearch: string[][]
): number => {
  try {
    const xmasCheck =
      wordSearch[x - 1][y - 1] +
      wordSearch[x][y] +
      wordSearch[x + 1][y + 1] +
      wordSearch[x - 1][y + 1] +
      wordSearch[x][y] +
      wordSearch[x + 1][y - 1];
    const xs: string[] = ['MASMAS', 'SAMSAM', 'SAMMAS', 'MASSAM'];
    if (xs.includes(xmasCheck)) {
      return 1;
    }
    return 0;
  } catch (_) {
    return 0;
  }
};

const second = (input: string) => {
  const wordSearch: string[][] = [];
  const lines = linesToArray(input);
  let counter: number = 0;
  lines.forEach((line) => {
    wordSearch.push(line.split(''));
  });

  for (let i = 0; i < wordSearch.length; i++) {
    for (let j = 0; j < wordSearch[i].length; j++) {
      counter += foundFromPoint2(i, j, wordSearch);
    }
  }

  return counter;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
