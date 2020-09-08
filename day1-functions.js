/*
 * Create the function factorial here
 */

function factorial(n){
    if(n <= 2){
        return n;
    }
    return n * factorial(n-1);
}