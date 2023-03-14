// Write a typescript program which contains one function named as Maimum.That function accepts
// array of number and returns the second largest number from array.

// Input : 23   89  6   29  56  45  77  32
// Output : second maximum number is 77

var arr : number[] = [23,89,6,29,56,45,77,32];
var Ret : number = 0;

function Maximum_Second(brr : number[]) : number
{
    let i : number = 0
    let Max : number = 0;
    let Sec_Max : number = 0;

    for(i = 0;i < brr.length;i++)
    {
        if(Max < brr[i])
        {
            Sec_Max = Max;
            Max = brr[i];
        }
        else if(brr[i] > Sec_Max && brr[i] != Max)
        {
            Sec_Max = brr[i];
        }
    }
    return Sec_Max;
}

Ret = Maximum_Second(arr);

console.log("Second maximum number from array is : "+Ret);