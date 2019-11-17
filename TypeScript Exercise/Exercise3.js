var PlanetData = {
    "Earth": 1,
    "Mercury": 0.2408467,
    "Venus": 0.61519726,
    "Mars": 1.8808158,
    "Jupiter": 11.862615,
    "Saturn": 29.447498,
    "Uranus": 84.016846,
    "Neptune": 164.79132
};
var AgeInSeconds = 1000000000;
var SecInOneYear = 31557600;
var AgeInYear = function (PlanetData, SecInOneYear, AgeInSeconds) {
    for (var key in PlanetData) {
        var AgeInYear_1 = (PlanetData[key] * AgeInSeconds) / SecInOneYear;
        console.log(key + " : " + AgeInYear_1);
    }
};
AgeInYear(PlanetData, SecInOneYear, AgeInSeconds);
