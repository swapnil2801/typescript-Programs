// Write a typescript program which contains one functon named as summation.That 
// function accept array of number and returns the sumation of each number from array.

//Input : 23    6   7   4   5   7   
//Output : Addition is 52

var arr : number[] = [23,6,7,4,5,7];
var Ret : number = 0;

function AdditionX(brr : number[]) : number
{
    let Sum : number = 0;
    let i : number = 0;

    for(i = 0;i < brr.length;i++)
    {
        Sum += brr[i];
    }
    return Sum;
}

Ret = AdditionX(arr);

console.log("Addition is : "+Ret);