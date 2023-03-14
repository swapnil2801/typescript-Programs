// Write a typescript program which contains one arrow function named as ChkArmstrong.That 
// function accepts one numbers and check whether number is Armstrong number or not.
// Input : 153
// Output : It is Armstrong number.
var iNo = 153;
var ret = false;
function Chk_Armstrong(Value) {
    var Sum = 0;
    var temp = Value;
    var Digit = 0;
    while (Value > 0) {
        Digit = Math.floor(Value % 10);
        Sum = Math.floor(Sum + (Digit * Digit * Digit));
        Value = Math.floor(Value / 10);
        console.log(Value);
    }
    if (Sum == temp) {
        return true;
    }
    else {
        return false;
    }
}
ret = Chk_Armstrong(iNo);
if (ret == true) {
    console.log("The number is armstrong.");
}
else {
    console.log("The number is not an Armstrong.");
}
