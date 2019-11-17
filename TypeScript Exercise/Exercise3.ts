let PlanetData = {
    "Earth": 1,
    "Mercury": 0.2408467,
    "Venus": 0.61519726,
    "Mars": 1.8808158,
    "Jupiter": 11.862615,
    "Saturn": 29.447498,
    "Uranus": 84.016846,
    "Neptune": 164.79132
}
let AgeInSeconds: number = 1000000000;
let SecInOneYear: number = 31557600;

let AgeInYear = (PlanetData: object, SecInOneYear: number, AgeInSeconds: number) => {
    for (const key in PlanetData) {
        let AgeInYear = (PlanetData[key] * AgeInSeconds) / SecInOneYear;
        console.log(key + " : " + AgeInYear);
    }
}
AgeInYear(PlanetData, SecInOneYear, AgeInSeconds)