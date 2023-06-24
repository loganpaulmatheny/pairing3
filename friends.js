var friends = [20, 15, 60, 80, 17, 99, 75, 70];

function numbersOver(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 30) {
      var larger = arr[i];
      console.log(larger);
    }
  }
}
numbersOver(friends);
console.log("BREAK");
function numberSixty(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 60) {
      var larger = arr[i];
      console.log(larger);
    }
  }
}
numberSixty(friends);
