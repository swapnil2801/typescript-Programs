// Write a typesript program which  contains one function named as ChkPrime.That function should 
// accept one number and it should return true if the given number is prime and otherwise return false.

// Input : 11
// Output : It is prime number

var No : number = 11;
var bRet : boolean = false;

function ChkPrime(Value : number) : boolean
{
    let i : number = 0;
    let Flag : boolean = true;

    for(i = 2;i <= Value/2;i++)
    {
        if(Value % i == 0)
        {
            Flag = false;
        }
    }
    return Flag;
}

bRet = ChkPrime(No);

if(bRet == true)
    console.log(No+" is an prime number.");
else 
    console.log(No+" is not an prime number.");