//Complete the reverseString function; it has one parameter, s.
// You must perform the following actions:

//Try to reverse string  using the split, reverse, and join methods.
//If an exception is thrown, catch it and print the contents of the 
//exception's  on a new line.
//Print  on a new line. If no exception was thrown, then this should 
//be the reversed string; if an exception was thrown, this should be 
//the original string.

//notes
//3 forms: try-catch, try-finally, try-catch-finally

//The catch block immediately follows the try block and is executed 
//only if an exception is thrown when executing the code within the try block.
//if no exception, it is skipped

//the finally block is optional, but it comes after both try and catch. it ALWAYS
//will execute regardless
//Let's say we want to make sure that the contents of  are printed to stdout 
//regardless of whether or not an exception is thrown or caught; we can do 
//this by adding a finally block:

function reverseString(s) {
    try{
        let a = s.split("").reverse().join("");
        console.log(a)
    }
    catch(e){
        console.log(e.message)
        console.log(s)
    }
}