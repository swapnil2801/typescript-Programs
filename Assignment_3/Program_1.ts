class Arithmatic
{
    Number1 : number;
    Number2 : number;

    constructor(iNo1 : number,iNo2 : number)
    {
        this.Number1 = iNo1;
        this.Number2 = iNo2;
    }

    Addition() : number
    {
        return this.Number1+this.Number2;
    }

    Subtraction() : number
    {
        return this.Number1-this.Number2;
    }

    Multiplication() : number
    {
        return this.Number1*this.Number2;
    }

    Division() : number
    {
        return this.Number1/this.Number2;
    }
}

var obj1 = new Arithmatic(11,10);
var obj2 = new Arithmatic(21,15);

var iRet : number = 0;

iRet = obj1.Addition();
console.log("Addition of obj1 : "+iRet);

iRet = obj1.Subtraction();
console.log("Subtraction of obj1 : "+iRet);

iRet = obj1.Multiplication();
console.log("Multiplication of obj1 : "+iRet);

iRet = obj1.Division();
console.log("Division of obj1 : "+iRet);

iRet = obj2.Addition();
console.log("Addition of obj2 : "+iRet);

iRet = obj2.Subtraction();
console.log("Subtraction of obj2 : "+iRet);

iRet = obj2.Multiplication();
console.log("Multiplication of obj2 : "+iRet);

iRet = obj2.Division();
console.log("Division of obj2 : "+iRet);