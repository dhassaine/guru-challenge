import { assert } from 'chai';
import toMorse from './morse';
import { lookUp, isWhiteSpace } from './morse';

describe('Morse', function () {

  describe('function lookup', function(){
    it('translates single char to morse string', function(){
      assert.equal(lookUp('A'), '.-');
    });

    it('automatically casts lowercase chars to upper-case before translating', function(){
      assert.equal(lookUp('a'), '.-');
    });

    it('converts unkown characters to "?"', function(){
      assert.equal(lookUp('!'), '?');
    })
  });

  describe('function isWhiteSpace', function(){
    it('returns true if char is whitespace and false otherwise', function(){
      assert.isTrue(isWhiteSpace(' '));
      assert.isTrue(isWhiteSpace('\t'));
      assert.isTrue(isWhiteSpace('\n'));
      assert.isFalse(isWhiteSpace('A'));
    });
  });

  describe('default function toMorse()', function () {
    it('translates alpha numeric string to morse', function () {
      assert.equal(toMorse('I AM IN TROUBLE'), '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.');
      assert.equal(toMorse('A LITTLE HELP PLEASE'), '.-/.-..|..|-|-|.-..|./....|.|.-..|.--./.--.|.-..|.|.-|...|.');
    });
  });
});