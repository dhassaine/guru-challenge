import alphaNumericToMorse from './alphaNumericToMorse';
const wordSeparator = '/';
const charSeparator = '|';

export function isWhiteSpace(c) {
  return c.match(/\s/) !== null;
}

export function lookUp(c) {
  const morseChar = alphaNumericToMorse[c.toUpperCase()];
  return morseChar === undefined ? 
    '?' : 
    morseChar;
}

export default function toMorse(str) {
  let separator = '';

  return str.split('').map((c) => {
    let morseChar = '';
    
    if(isWhiteSpace(c)) {
      separator = wordSeparator;
    } else {
      morseChar = separator + lookUp(c);
      separator = charSeparator;
    }

    return morseChar;
  }).join('');
}