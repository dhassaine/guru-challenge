# README #

Resource Guru tech challenge.

This repo has code for both the utility flatten function task and the Morse code challenge. I'm using webpack and babel so that I can use ES6 modules and flow for static typings.

Files that end in `spec.js` are the mocha unit tests.

## Task 1: Utility flatten function
The code is in `src/utils`.
Because I felt this function is likely to be a utility function and consumed in possibly unexepected ways, I went to the extra effort of adding flow typings for static type safety and also added some jsdoc.

## Task 2: Morse code
The code is in `src/morse`. The main program is `src/morse/index.js`; however its best to run the transpiled version rather than directly (see the instructions below).

I've made the assumption that the text to be translated is small so the text file and stdin stream read an entire line into memory before performing the morse translation. If business dictates that each line could potentially be very large, it won't take much effort to refactor the code into a stream based solution since the underlying morse translation functionality operates on individual characters.

# Prerequisites
Unix/linux or mac environment. The scripts will probably work on windows but I haven't tested it.

## node/npm
The project uses npm for package management and node for unit/integration testing and various scripting needs.

Please use [Node version Manager](https://github.com/creationix/nvm) to locally install the correct version of node for this repo.

After you have installed nvm, issue this command (it reads .nvmrc to ensure the correct version of node):
```
nvm use
```

# Installation
Once you have followed the prerequisites instructions, run:

```
npm install
```
to install the node_module dependencies

then
```
npm run build
```
to build the js bundle


# Usage
Display help: `node build/morse.js -h`

Convert file to morse: `node build/morse.js test-script.txt`

Convert stdin to morse: `cat test-script.txt | node build/morse.js`

## Enable obfuscation
Convert file to obfuscated morse: `node build/morse.js -o -- test-script.txt`

Convert stdin to obfuscated morse: `cat test-script.txt | node build/morse.js -o`

# Testing
```
npm test
```