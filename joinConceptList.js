var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var string = 'Today I learned about '

for (var i = 0; i < conceptList.length; i++) {
    string += conceptList[i];
    if(conceptList[i] !== 'problem solving'){
      string += ', '
    } else{
      string += '.'
    }
} console.log(string);