// Write a typescript program which contains one function named as Fibonacci. That function accept 
// one number from user and print Fibonacci series till that number.

// Input : 21
// Output : 1   1   2   3   5   8   13  21

var No : number = 21;

function Fibonacci(Value : number ) : void
{
    let n1 : number = 0;
    let n2 : number = 1;
    let n3 : number = 0;

    console.log(n2);
    while(n3 < Value)
    {
        n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}

Fibonacci(No);