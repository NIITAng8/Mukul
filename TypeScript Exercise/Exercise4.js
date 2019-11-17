var MessageString = "Was was am1 i am i am am am was";
var CountOccurence = function (text) {
    var objWordCount = {};
    text.split(" ").forEach(function (value) {
        typeof objWordCount[value.toLowerCase()] === 'undefined' ?
            objWordCount[value.toLowerCase()] = 1 :
            objWordCount[value.toLowerCase()]++;
    });
    console.log(objWordCount);
};
CountOccurence(MessageString);
