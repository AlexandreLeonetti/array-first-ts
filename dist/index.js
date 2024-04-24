// Import the required modules with TypeScript syntax
import isNumber from 'is-number';
import slice from 'array-slice';
// Rewrite the arrayFirst function with TypeScript syntax
export function arrayFirst(arr, num) {
    if (!Array.isArray(arr)) {
        throw new Error('array-first expects an array as the first argument.');
    }
    if (arr.length === 0) {
        return null;
    }
    const first = slice(arr, 0, isNumber(num) ? +num : 1);
    if (+num === 1 || num == null) {
        return first[0];
    }
    return first;
}
