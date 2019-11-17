var UserYear = 2000;
var getLeapYear = function (Year) {
    var IsLeapYear = false;
    if (Year % 4 == 0) {
        if (Year % 100 == 0) {
            if (Year % 400 == 0) {
                IsLeapYear = true;
            }
        }
        else {
            IsLeapYear = true;
        }
    }
    console.log(IsLeapYear.toString() + ", Given Year is a Leap Year.");
};
getLeapYear(UserYear);
