// Write a typescript program which contains one function named as DisplayFactors.That function should accept one number and display factors of that number.
// Input : 20
// 1    2   4   5   10
var No = 20;
function DisplayFactors(Value) {
    var i = 0;
    for (i = 1; i <= Value / 2; i++) {
        if (Value % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactors(No);
