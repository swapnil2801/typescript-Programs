// Write a typescript program which contains one function named as Fibonacci. That function accept 
// one number from user and print Fibonacci series till that number.
// Input : 21
// Output : 1   1   2   3   5   8   13  21
var No = 21;
function Fibonacci(Value) {
    var n1 = 0;
    var n2 = 1;
    var n3 = 0;
    console.log(n2);
    while (n3 < Value) {
        n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}
Fibonacci(No);
