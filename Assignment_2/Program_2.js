// Write a typescript program which contains one functon named as summation.That 
// function accept array of number and returns the sumation of each number from array.
//Input : 23    6   7   4   5   7   
//Output : Addition is 52
var arr = [23, 6, 7, 4, 5, 7];
var bRet = 0;
function AdditionX(brr) {
    var Sum = 0;
    var i = 0;
    for (i = 0; i < brr.length; i++) {
        Sum += brr[i];
    }
    return Sum;
}
bRet = AdditionX(arr);
console.log("Addition is : " + bRet);
