//Complete the function in the editor below by returning a RegExp object,re, 
//that matches any string  that begins and ends with the same vowel. 
//Recall that the English vowels are a, e, i, o, and u.

//Constraints
//The length of string  is >= 3.
//String s consists of lowercase letters only (i.e., [a-z]).

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    let re = /^(a|e|i|o|u).*\1$/;
    //or
    let re = /^(aeiou).*\1$/;
    //^ makes sure first var is a vowel
    //.* makes it so it will require at least 3 vars
    //\1 matches the first var (must end in same vowel, $ to end)
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}