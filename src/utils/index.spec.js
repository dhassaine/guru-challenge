import {assert} from 'chai';
import {flatten} from './index';

describe('function flatten', function(){
  it('flattens array', function(){
    // [ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
    const unflattened = [ 1, [ 2, [ 3 ] ], 4 ];
    const expected = [ 1, 2, 3, 4 ];
    const flattened = flatten(unflattened);
    assert.deepEqual(expected, flattened);
  });

  it('empty array is returned', function() {
    assert.deepEqual([], flatten([]));
  });
});