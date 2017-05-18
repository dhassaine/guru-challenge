import fs from 'fs';
import readline from 'readline';
import toMorse from './morse';
import obfuscate from './obfuscation';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
processHelpArg();
run();


function processHelpArg() {
  if (argv['h'] || argv['help']) {
    console.log('Text to morse code. Accepts stdin or filepath')
    console.log('Usage:');
    console.log(`${process.argv[0]} ${process.argv[1]} [options] -- [filepath]`);
    console.log('\toptions:');
    console.log('\t\t-h, --help\tdisplay this help');
    console.log('\t\t-o, --obfuscate\tobfuscates morse code output');
    process.exit(0);
  }
}

function run() {
  const input = argv['_'].length > 0
    ? fs.createReadStream(argv['_'][0])
    : process.stdin;

  const shouldObfuscate = argv['o'] || argv['obfuscate'] ? true : false;

  var lineReader = readline.createInterface({ input });

  const translate = shouldObfuscate ?
    s => obfuscate(toMorse(s)) :
    s => toMorse(s);
    
  lineReader.on('line', function (line) {
    console.log(translate(line));
  });
}