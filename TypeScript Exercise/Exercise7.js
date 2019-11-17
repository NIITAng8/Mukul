var IsArmStrong = 3710;
var CheckArmStrong = function (Digit) {
    var num = Digit.toString().split("").map(function (v) { return parseInt(v); });
    var NumCalc = num.map(function (v) { return Math.pow(v, num.length); }).reduce(function (a, b) { return a + b; });
    if (Digit == NumCalc) {
        console.log("Given Number is an ArmStrong Number.");
    }
    else {
        console.log("Given Number is not an ArmStrong Number.");
    }
};
CheckArmStrong(IsArmStrong);
