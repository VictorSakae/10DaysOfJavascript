function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    var r = readLine();
    // Print the area of the circle:
    console.log(PI * r ** 2 );
    // Print the perimeter of the circle:
    console.log(PI * r * 2);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

/**
Sample Input 0

2.6

Sample Output 0

21.237166338267002
16.336281798666924

**/