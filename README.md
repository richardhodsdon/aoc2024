# 🎄 AdventOfCode 🎄

This my TypeScript 2024 Advent of Code attempt.

built with ❤️ and:

- [typescript](https://www.typescriptlang.org/) 👨‍💻
- [vitest](https://vitest.dev/) 🧪
- [bun](https://bun.sh/) 🧅

## 👷‍♂️ Project structure

the project has the following structure:

```
src
- days: contains the solutions for the puzzles
- scripts: utility scripts for development lifecycle
- types: types and interfaces
- utils: utility scripts used for development and problem solving (i.e read an input file)
```

## 🚀 Getting started

This readme assumes you are using [npm](https://npmjs.io/) as package manager, but any other package manager will do.

The runtime used for this project is bun [bun](https://bun.sh/), check the docs for installing it.

install all required dependencies with `npm i`

## 🎄 Adding a new puzzle

when the new AoC puzzle is available run `npm run init-day {day}`

replace `{day}` with the number of the advent day, i.e. `npm run init-day 2`.

This command will create a new directory in the `days` folder with the following content

- `Puzzle.ts`: the boilerplate module with the placeholder methods for solving both daily puzzles
- `index.txt`: the input file where to add the puzzle input
- `test-1.txt`: The example input in the puzzle for part 1
- `test-2.txt`: The example input in the puzzle for part 2

The structure of the boilerplate module is the following:

```typescript
const first = (input: string) => {
  console.log(input);
  return 'solution 1';
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  console.log(input);
  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
```

## 🔧 Development

When your solution is ready, or when you want to start developing incrementally (watch mode) run `npm run dev {day}` where {day} is the day you are working on, i.e. `npm run dev 1` will run the puzzle class for day 1.

You can use the smaller test input by calling `npm run dev {day} t`. This will use the test-1.txt and test-2.txt files for the input to each part of the puzzle.

## 🧪 Testing

You can run test for all puzzles agains their expected output with `npm t` this will test all the solutions in the `days` folder

## 🛫 Contributing

Every contribution is welcome. Just fork this repo and open a MR with your changes, and don't forget to add your name to the contributors section of this README.

## 👨👩 Contributors

[Francesco Maida](https://edge33.github.io)
