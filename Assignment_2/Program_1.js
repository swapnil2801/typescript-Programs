// Write a typescript program which contains one function named as maximum. That function accepts
// array of number and returns the largest number from array.
// Input : 23   89  6   29  56  45  77  32
// Output : Maximum number is 89
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
function Maximum(brr) {
    var Max = 0;
    var i = 0;
    for (i = 0; i < brr.length; i++) {
        if (Max < brr[i]) {
            Max = brr[i];
        }
    }
    return Max;
}
Ret = Maximum(arr);
console.log("The Maximum number is : " + Ret);
