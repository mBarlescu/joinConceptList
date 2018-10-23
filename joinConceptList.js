var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
//var string = 'Today I learned about '


function joinList(conceptList) {
  var string = "";
  for (var i = 0; i < conceptList.length; i++) {
    string += conceptList[i];
    if (conceptList[i] !== "problem solving") {
      string += ", ";
    }
  }
  return string;
}
console.log('Today I learned about ' + joinList(conceptList) + '.')