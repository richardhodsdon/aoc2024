import { East, North, South, West } from '../../types/CardinalPoints';
import Direction from '../../types/Direction';
import Point from '../../types/Point';
import inputToStringGrid from '../../utils/inputToStringGrid';

const startChar: string = '^';
const obstacleChar: string = '#';
const emptyChar: string = '.';

const findStart = (grid: string[][]): Point => {
  let start: Point = { x: 0, y: 0 };
  grid.forEach((row, y) => {
    row.forEach((col, x) => {
      if (col == startChar) {
        start = { x, y };
        return;
      }
    });
  });

  return start;
};

const first = (input: string) => {
  const grid: string[][] = inputToStringGrid(input);
  const start: Point = findStart(grid);

  let current: Point = start;
  let currentDirection: Direction = North;
  const directions: Direction[] = [North, East, South, West];
  const pathesTraveled: Point[] = [start];

  try {
    while (true) {
      if (
        grid[current.y + currentDirection.y][current.x + currentDirection.x] !=
        obstacleChar
      ) {
        current = {
          x: current.x + currentDirection.x,
          y: current.y + currentDirection.y,
        };
        pathesTraveled.push(current);
      } else {
        currentDirection =
          directions[(directions.indexOf(currentDirection) + 1) % 4];
      }
      // console.log(`current point`, current);
      // console.log(`current direction`, currentDirection);
      // console.log(`pathCounter`, pathesTraveled.length);
    }
  } catch (_) {
    // Out of bounds on grid
  }

  return countUniqueObjects(pathesTraveled);
};

const countUniqueObjects = (array: Point[]): number => {
  const uniqueObjects: Set<string> = new Set();
  array.forEach((item) => {
    uniqueObjects.add(JSON.stringify(item));
  });
  return uniqueObjects.size;
};

const expectedFirstSolution = 5095;

const second = (input: string) => {
  const grid: string[][] = inputToStringGrid(input);
  let foundLoops: number = 0;

  const start = performance.now();

  grid.forEach((row, y) => {
    row.forEach((col, x) => {
      if (grid[y][x] == emptyChar) {
        grid[y][x] = obstacleChar;
        if (runToEnd(grid)) {
          foundLoops++;
          // console.log(grid);
        }
        grid[y][x] = emptyChar;
      }
    });
  });

  // const result = runToEnd(input);

  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  return foundLoops;
};

const runToEnd = (grid: string[][]) => {
  // const grid: string[][] = inputToStringGrid(input);
  const start: Point = findStart(grid);
  const maxY = grid.length - 1;
  const maxX = grid[0].length - 1;

  let current: Point = start;
  let currentDirection: Direction = North;
  const directions: Direction[] = [North, East, South, West];
  const pathesTraveled: Point[] = [start];

  try {
    while (true) {
      if (
        current.y > maxY ||
        current.x > maxX ||
        current.y < 0 ||
        current.x < 0
      ) {
        throw new Error('Out of bounds');
      }

      if (
        grid[current.y + currentDirection.y][current.x + currentDirection.x] !=
        obstacleChar
      ) {
        current = {
          x: current.x + currentDirection.x,
          y: current.y + currentDirection.y,
        };
        pathesTraveled.push(current);
      } else {
        currentDirection =
          directions[(directions.indexOf(currentDirection) + 1) % 4];
      }

      // console.log(`current pathesTraveled`, pathesTraveled.length);

      if (pathesTraveled.length > 6000) {
        // console.log('Too many pathes');
        return true;
      }
    }
  } catch (_) {
    // Out of bounds on grid
    // console.log(_);
  }

  return false;
};

const expectedSecondSolution = 1933;

export { first, expectedFirstSolution, second, expectedSecondSolution };
