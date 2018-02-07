var numberArray = [];
var total = 0;
function createNumber () {
    var number =document.getElementById("number").value;


    numberArray.push(parseFloat(number));

    for(var i = 0; i < numberArray.length; i++) {
        total += numberArray[i];


}
    console.log(numberArray);
    console.log(total);
    document.getElementById("number").value = "";

    total=0;



}