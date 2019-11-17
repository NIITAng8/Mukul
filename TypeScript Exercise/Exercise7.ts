let IsArmStrong: number = 3710;

let CheckArmStrong = (Digit: number) => {

    const num = Digit.toString().split("").map(v => parseInt(v));
    const NumCalc = num.map(v => Math.pow(v, num.length)).reduce(function (a, b) { return a + b });
    if (Digit == NumCalc) {
        console.log("Given Number is an ArmStrong Number.");
    }
    else {
        console.log("Given Number is not an ArmStrong Number.");
    }
}

CheckArmStrong(IsArmStrong);