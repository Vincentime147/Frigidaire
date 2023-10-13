 /* document.body.style.background = "#f3f3f3 url('img/show.png') no-repeat right top";
 */


/*************************
 * Function              *
 *************************/

function changeWallPaper(){
    let a = Math.floor(Math.random() * 9);
    console.log(a);
    document.body.style.background = `#f3f3f3 url('img/${a.toString()}.jpg') no-repeat fixed center `;
    document.body.style.backgroundSize = `auto 115%`;

}
function theClock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds() ;
    if (h.toString().length== 1) h = `0${h.toString()}`;
    if (m.toString().length== 1) m = `0${m.toString()}`;
    if (s.toString().length== 1) s = `0${s.toString()}`;
    document.getElementById("clock").innerHTML=`${h}:${m}:${s}`;
}
/*************************
 * Execution              *
 *************************/
changeWallPaper();
theClock();
setInterval(
    function(){
        theClock()
    },1000
);

