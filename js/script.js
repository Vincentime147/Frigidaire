 /* document.body.style.background = "#f3f3f3 url('img/show.png') no-repeat right top";
 */
function changeWallPaper(){
    let a = Math.floor(Math.random() * 9);
    console.log(a);
    document.body.style.background = `#f3f3f3 url('img/${a.toString()}.jpg') no-repeat right top`;
}
changeWallPaper();

/*
 document.write("avant")
import wallPaperList from "listImg.js" ; 


document.write(a);



const fs = require('fs');
document.write("tesssssssssssst");

var files = fs.readdirSync('img/');
document.write(files);

*/

