import { assert } from 'chai';
import obfuscate from './index';
import { replaceDots, replaceDashes } from './index';

describe('Obfuscate', function () {

  describe('function replaceDots', function () {
    it('Replaces dots in morse code with the number of sequential dots', function () {
      assert.equal(replaceDots(''), '');
      assert.equal(replaceDots('-'), '-');
      assert.equal(replaceDots('.'), '1');
      assert.equal(replaceDots('..'), '2');
      assert.equal(replaceDots('...-.--..'), '3-1--2');
    })
  });

  describe('function replaceDashes', function () {
    it('Replaces consecutive dashes in morse code with the letter of the alphabet at that position', function () {
      assert.equal(replaceDashes(''), '');
      assert.equal(replaceDashes('-'), 'A');
      assert.equal(replaceDashes('--'), 'B');
      assert.equal(replaceDashes('.'), '.');
      assert.equal(replaceDashes('..---.'), '..C.');
    })
  });

  describe('function obfuscate', function () {
    it('obfuscates morse string', function () {

      //I AM IN TROUBLE
      assert.equal(obfuscate('../.-|--/..|-./-|.-.|---|..-|-...|.-..|.'), '2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1');

      //A LITTLE HELP PLEASE
      assert.equal(obfuscate('.-/.-..|..|-|-|.-..|./....|.|.-..|.--./.--.|.-..|.|.-|...|.'), '1A/1A2|2|A|A|1A2|1/4|1|1A2|1B1/1B1|1A2|1|1A|3|1');
    });
  });


});