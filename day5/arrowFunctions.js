/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(value => {
        return (value % 2 == 0) ? (2 * value) : (3 * value);
    });
}

/**
5
1 2 3 4 5

Sample Output 0

3 4 9 8 15


**/