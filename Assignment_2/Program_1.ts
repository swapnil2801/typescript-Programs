// Write a typescript program which contains one function named as maximum. That function accepts
// array of number and returns the largest number from array.

// Input : 23   89  6   29  56  45  77  32
// Output : Maximum number is 89

var arr : number[] = [23,89,6,29,56,45,77,32];
var Ret : number = 0;

function MaximumX(brr : number[]) : number
{
    let Max : number = 0;
    let i : number = 0

    for(i = 0;i < brr.length;i++)
    {
        if(Max < brr[i])
        {
            Max = brr[i];
        }
    }
    return Max;
}

Ret = MaximumX(arr);

console.log("The Maximum number is : "+Ret);