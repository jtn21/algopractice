// Q1: Write a function that takes a string as input and reverse only the
// vowels (a, e, i, o, u) of a string.
// Example 1:
// Input: "hello"
// Output: "holle"

// Example 2:
// Input: "developing"
// Output: "divolepeng"

// Example 3:
// Input: "Hel$loWo&rl@d"
// Output: "HolloWerld"



const reverseVowels = (word) => {
    // solution here
    // we set the vowels in an array that we will use to filter through
    let vowels = ["a", "e", "i", "o", "u"];
    // we split the word into an an array with individual characters
    let arr = word.split("");

    console.log(arr);
    
    // use two pointers:
    // one on the left at the start of the word
    // one on the right at the end of the word. Note we ae now using the array with the characters split
    let left = 0;
    let right = arr.length;

    // while the pointer on the left is less than the pointer on the right
    while (left < right) {
    // if the pointer does not encounter a vowel, move the left pointer up
        if (vowels.indexOf(arr[left]) === -1) {
            left++;
        }
    // if the pointer does not encounter a vowel, move the right pointer down
        if (vowels.indexOf(arr[right]) === -1) {
            right--;
        }
    // 
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    
        left++;
        right--;
    }
    
    return arr.join("");

}






// test cases

console.log(reverseVowels('hello') === 'holle');
console.log(reverseVowels('developing') === 'divolepeng');
console.log(reverseVowels('Hel$loWo&rl@d') === 'HolloWerld');