import linesToArray from '../../utils/linesToArray';

type Operator = '+' | '*' | '||';

const first = (input: string) => {
  const rows = linesToArray(input);
  let possibleTrue = 0;
  rows.forEach((row) => {
    const [targetSide, numSide] = row.split(': ');
    const nums = numSide.split(' ').map(Number);
    const target = Number(targetSide);
    if (testRow(nums, target, ['+', '*'])) {
      possibleTrue += target;
    }
  });

  return possibleTrue;
};

function calculate(a: number, b: number, op: Operator) {
  if (op === '+') {
    return a + b;
  }

  if (op === '*') {
    return a * b;
  }

  return +`${a}${b}`;
}

function testRow(nums: number[], target: number, ops: Operator[]): boolean {
  const vals: Set<number> = new Set();

  function backtrack(current: number, index: number) {
    if (index === nums.length) {
      vals.add(current);

      return;
    }

    for (const op of ops) {
      backtrack(calculate(current, nums[index], op), index + 1);
    }
  }

  backtrack(nums[0], 1);

  return vals.has(target);
}

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  const rows = linesToArray(input);
  let possibleTrue = 0;
  rows.forEach((row) => {
    const [targetSide, numSide] = row.split(': ');
    const nums = numSide.split(' ').map(Number);
    const target = Number(targetSide);
    if (testRow(nums, target, ['+', '*', '||'])) {
      possibleTrue += target;
    }
  });

  return possibleTrue;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
