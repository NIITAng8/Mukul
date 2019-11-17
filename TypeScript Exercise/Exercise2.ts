let UserYear: number = 2000;
let getLeapYear = (Year: number) => {
    let IsLeapYear: boolean = false;
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
}
getLeapYear(UserYear);