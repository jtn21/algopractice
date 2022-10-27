/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//Write a function that reverses a string. The input string is given as an array of characters s.


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1
    
    while(left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};

//test 
console.log(reverseString( ["h","e","l","l","o"]));
