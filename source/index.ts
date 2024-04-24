
// Import the required modules with TypeScript syntax
import isNumber from 'is-number';
import slice from 'array-slice';

// Define the type for the first argument of the arrayFirst function
type ArrayFirstInput = any[];

// Define the type for the second argument of the arrayFirst function
type ArrayFirstNum = number ;

// Define the return type of the arrayFirst function
type ArrayFirstReturn = any | any[] | null;

// Rewrite the arrayFirst function with TypeScript syntax
export function arrayFirst(arr: ArrayFirstInput, num: ArrayFirstNum): ArrayFirstReturn {
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
