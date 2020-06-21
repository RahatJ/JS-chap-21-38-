// TASK NO :01
// var num= +prompt("Enter any number")
// document.write("number: " +num)
// var round=Math.round(num)
// document.write("<br>")
// document.write("round off value: "+round)
// var floor=Math.floor(num)
// document.write("<br>")
// document.write("floor value: "+floor)
// var ceil=Math.ceil(num)
// document.write("<br>")
// document.write("ceil value: "+ceil)


// TASK NO :02
// var num= +prompt("Enter any number")
// document.write("number: " +num)
// var round=Math.round(num)
// document.write("<br>")
// document.write("round off value: "+round)
// var floor=Math.floor(num)
// document.write("<br>")
// document.write("floor value: "+floor)
// var ceil=Math.ceil(num)
// document.write("<br>")
// document.write("ceil value: "+ceil)


// TASK NO :03
// var num= +prompt("Enter any number")
// document.write("number: " +num)
// var abso=Math.abs(num)
// document.write("<br>")
// document.write("absolute value: "+abso)


// TASK NO :04
// var num= +prompt("Enter any dice value")
// var rand=Math.random(num)
// document.write("<br>")
// document.write("random dice value: "+rand)


// TASK NO :05
// var headuser=prompt("Enter head user")
// var headuser=prompt("Enter tail user")
// var toss= Math.random*2;
// var floor= Math.floor(toss)
// if (floor===0)
// {
//     document.write("random coin value: Head ")
// }
// else{
//     document.write("random coin value: Tail ")
// }

// TASK NO :06
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  
  
document.write("Random Number between 1 and 100: ")  
document.write( randomNumber(1, 100) );

