/**
Output Format

You must write two print statements using console.log():

    Print the contents of a caught exception's message on a new line. If no exception was thrown, this line should not be printed.
Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
**/

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let reverse = s.split("").reverse().join("");
        console.log(reverse);
    } 
    catch (e) {
        console.log(e.message);
        console.log(s);
    } 
}

/**
Sample Input 1

Number(1234)

Sample Output 1

s.split is not a function
1234

**/