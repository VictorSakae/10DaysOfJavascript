function getMaxLessThanK(n, k) {
    var max = 0;    
    for (let a = 0; a <= n; a++) {
        for (let b = a; b<= n; b++) {
            if (a != b) {
                let bitwise = a & b;
                if ((bitwise >= max) && (bitwise < k)) {
                    max = bitwise;
                }
            }
        }
    }
    return max;
}