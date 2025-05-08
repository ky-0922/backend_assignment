function factorial(n) {
    if (n===0 || n===1) return 1;
    let result = 1;
    for (let i=2;i<=n;i++) {
        result *= i;
    }
    return result;
}

function permutation(n, r) {
    return factorial(n) / factorial(n - r);
}
function combination(n, r) {
    return factorial(n) / (factorial(n - r) * factorial(r));
}
function multiPermutation(n, r) {
    return Math.pow(n, r);
}
function multiCombination(n, r) {
    return combination(n+r-1, r);
}

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
};
