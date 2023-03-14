// Write a typescript program which contains one function named as ChkString .That function accept one string and check whether that string contains "Marvellous" word or not.
// Input : "Pune kothrud Marvellous Infosystem"
// Output : String contains Marvellous in it.
var Address = "Pune kothrud Marvellous Infosystem";
function ChkString(value) {
    var flag = false;
    var AddressArray = value.split(" ");
    var i = 0;
    for (i = 0; i < AddressArray.length; i++) {
        if (AddressArray[i] == "Marvellous") {
            flag = true;
        }
    }
    return flag;
}
var bRet = ChkString(Address);
if (bRet == true) {
    console.log("The string contains Marvellous in it");
}
else {
    console.log("The string does not contain Marvellous in it");
}
