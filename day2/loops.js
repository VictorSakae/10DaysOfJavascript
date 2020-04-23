'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = s.replace(/[^aeiouAEIOU]/g, '');
    var consonants = s.replace(/[aeiouAEIOU]/g, '');

    for (var charVowel of vowels) {
        console.log(charVowel);
    }

    for (var charConsonant of consonants) {
        console.log(charConsonant);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

/**
Input Format

Locked stub code in the editor reads string

from stdin and passes it to the function.

Output Format

First, print each vowel in
on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in on a new line (in the same order as they appeared in ).

**/