//Declare a constant variable, , and assign it the value Math.PI. You 
//will not pass this challenge unless the variable is declared as a 
//constant and named PI (uppercase).
//Read a number, , denoting the radius of a circle from stdin.
//Use  and  to calculate the  and  of a circle having radius .
//Print  as the first line of output and print  as the second line of output.

//Print the following two lines:

//On the first line, print the  of the circle having radius .
//On the second line, print the  of the circle having radius .

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = readLine();
    
    // Print the area of the circle:
    console.log(PI * r*r);
    
    // Print the perimeter of the circle:
    console.log(2 * PI * r);
}