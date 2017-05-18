// @flow

declare type NestedArray<T> = Array<T | NestedArray<T>>

/**
 * @function
 * @description 
 * `([a]) -> [a]`
 * 
 * Flattens an arbitrarily nested array of integers
 * 
 * @category Utils
 * @param {Array} a arbitrarily nested array of integers 
 * @return {Array} Flattened array of integers
 * @example
 * 
 * const unflattened = [ 1, [ 2, [ 3 ] ], 4 ];
 * flatten(unflattened); // [ 1, 2, 3, 4 ]
 * 
 */
export function flatten(unflattened: NestedArray<number>): Array<number> {
  return unflattened.reduce((results, a) => {
    return Array.isArray(a) ?
      results.concat(...flatten(a)) :
      results.concat(a);
  }, []);
}