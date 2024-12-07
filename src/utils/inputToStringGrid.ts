import linesToArray from './linesToArray';

export default (input: string): string[][] => {
  const grid: string[][] = [];
  const lines = linesToArray(input);
  lines.forEach((line) => {
    grid.push(line.split(''));
  });
  return grid;
};
