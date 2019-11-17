let MessageString: string = "Was was am1 i am i am am am was";

let CountOccurence = (text: string) => {
    let objWordCount = {};
    text.split(" ").forEach( function(value) {
        typeof objWordCount[value.toLowerCase()] === 'undefined' ? 
            objWordCount[value.toLowerCase()] = 1 : 
            objWordCount[value.toLowerCase()]++;
    });
    console.log(objWordCount);
}

CountOccurence(MessageString);