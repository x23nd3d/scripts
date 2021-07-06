let m = 10;
let s = '';

function exitNum(n) {

    if (n == 1) {
        return n;
    }
    return n + ' ' + exitNum(n - 1);
}

console.log(exitNum(m));