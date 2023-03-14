// Write a typescript program which contains one function named as Area.That function should 
// calculate area of circle .Accept value of radius from user and return its area.Default value of PI 
// should be 3.14 if it not provided by the caller.

// Input : 5
// Output : Area of circle is 78.5

var Radius : number = 5;
var Ret : number = 0;

function Area_of_Circle(Rad : number) : number
{
    let Ans : number = 0;

    Ans = 3.14 * Rad * Rad;

    return Ans;
}

Ret = Area_of_Circle(Radius);

console.log("Area of circle is : "+Ret);

