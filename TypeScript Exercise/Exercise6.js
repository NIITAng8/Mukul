var TriangleSide1 = 2;
var TriangleSide2 = 2;
var TriangleSide3 = 2;
var TriangleType = function (Side1, Side2, Side3) {
    if (Side1 == 0 || Side2 == 0 || Side3 == 0) {
        console.log("This is not a Triangle.");
    }
    else {
        if (Side1 == Side2 && Side2 == Side3) {
            console.log("This is an Equilateral Triangle.");
        }
        else if (Side1 == Side2 || Side2 == Side3 || Side1 == Side3) {
            console.log("This is an Isosceles Triangle");
        }
        else {
            console.log("This is a Scalene Triangle");
        }
    }
};
TriangleType(TriangleSide1, TriangleSide2, TriangleSide3);
