//import {tirasok} from "/tiras.js";
//console.log(tirasok);




var json = '{"tira": "qoY6MhB.jpg", "squares": "4", "point1":"200", "point2":"400", "point3":"600", "point4":"800", "point5":"0", "point6":"0", "text1":"Hola1", "text2":"Hol2", "text3":"hol3", "text4":"hol4", "text5":"hol5", "text6":"hol6"}';

point0 = 0;
var obj = JSON.parse(json);





tira = "url('"+obj.tira+"')";

squares = obj.squares;
point1 = obj.point1;
point2 = obj.point2;
point3 = obj.point3;
point4 = obj.point4;
point5 = obj.point5;
point6 = obj.point6;
text1 = obj.text1;
text2 = obj.text2;
text3 = obj.text3;
text4 = obj.text4;
text5 = obj.text5;
text6 = obj.text6;

//random cuadrito

qtSquares = Math.floor(Math.random()*squares+1);

pointOut = 'point'+(qtSquares).toString();

pointIn = 'point'+(qtSquares-1).toString();


//alert(pointIn+pointOut);
//alert(cu);

var myString = "number";
eval(myString +" = 9");
console.log(json);




document.getElementById("q01").style.backgroundImage = tira;
document.getElementById("q01").style.width = point3 - point2;
document.getElementById("q01").style.backgroundPosition = point3;

document.getElementById("q02").style.backgroundImage = tira;
document.getElementById("q02").style.width = point2 - point1;
document.getElementById("q02").style.backgroundPosition = point2;