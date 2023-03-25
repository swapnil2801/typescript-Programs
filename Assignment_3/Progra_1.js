var Arithmatic = /** @class */ (function () {
    function Arithmatic(iNo1, iNo2) {
        this.Number1 = iNo1;
        this.Number2 = iNo2;
    }
    Arithmatic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmatic.prototype.Subtraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmatic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmatic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(11, 10);
var obj2 = new Arithmatic(21, 15);
var iRet = 0;
iRet = obj1.Addition();
console.log("Addition of obj1 : " + iRet);
iRet = obj1.Subtraction();
console.log("Subtraction of obj1 : " + iRet);
iRet = obj1.Multiplication();
console.log("Multiplication of obj1 : " + iRet);
iRet = obj1.Division();
console.log("Division of obj1 : " + iRet);
iRet = obj2.Addition();
console.log("Addition of obj2 : " + iRet);
iRet = obj2.Subtraction();
console.log("Subtraction of obj2 : " + iRet);
iRet = obj2.Multiplication();
console.log("Multiplication of obj2 : " + iRet);
iRet = obj2.Division();
console.log("Division of obj2 : " + iRet);
