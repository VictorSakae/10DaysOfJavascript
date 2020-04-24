/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a == 0) {
        return "Zero Error";
    } else {
        return "Negative Error";
    }
}

/**
Sample Input 1

3
2
0
6

Sample Output 1

YES
Zero Error
YES


Sample Input 2

2
-1
20

Sample Output 2

Negative Error
YES

**/