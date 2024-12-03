const first = (input: string) => {
  const mulSearchString = /mul\((\d{1,3}),(\d{1,3})\)/;
  const searcher = new RegExp(mulSearchString, 'g');
  const matches = input.matchAll(searcher);
  let sum: number = 0;

  for (const match of matches) {
    sum += parseInt(match[1]) * parseInt(match[2]);
  }
  return sum;
};

const expectedFirstSolution = 165225049;

const second = (input: string) => {
  const mulSearchString = /mul\((\d{1,3}),(\d{1,3})\)/;
  const doSearchString = /do\(\)/;
  const dontSearchString = /don't\(\)/;

  const matches = input.matchAll(new RegExp(mulSearchString, 'g'));
  const doMatches = getIndexMatches(
    input.matchAll(new RegExp(doSearchString, 'g'))
  );
  const dontMatches = getIndexMatches(
    input.matchAll(new RegExp(dontSearchString, 'g'))
  );
  let sum: number = 0;

  // console.log(doMatches);
  // console.log(dontMatches);

  for (const match of matches) {
    if (canDo(match.index, doMatches, dontMatches)) {
      sum += parseInt(match[1]) * parseInt(match[2]);
    }
  }
  return sum;
};

// Grab the last do and dont indexes before the current index, closest to the current index is the state
const canDo = (
  currIndex: number,
  doIndexes: number[],
  dontIndexes: number[]
) => {
  const lastDo = doIndexes.filter((index) => index < currIndex).pop();
  const lastDont = dontIndexes.filter((index) => index < currIndex).pop();

  return lastDo >= lastDont;
};

const getIndexMatches = (
  matches: RegExpStringIterator<RegExpExecArray>
): number[] => {
  const indexes: number[] = [];
  for (const match of matches) {
    indexes.push(match.index);
  }
  return indexes;
};

const expectedSecondSolution = 108830766;

export { first, expectedFirstSolution, second, expectedSecondSolution };
