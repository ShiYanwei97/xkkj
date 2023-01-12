/*
* @Author: Marte
* @Date:   2018-01-03 10:21:51
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-07 16:16:26
*/

'use strict';
window.onload = function(){
var oImg = document.getElementsByTagName("img");
var oWarp = document.getElementById("warp");
var Deg = 360/oImg.length;
Array.prototype.forEach.call(oImg,function(el,index){el.style.transform = "rotateY("+index*Deg+"deg) translateZ(350px)";
    el.style.transition = "1s"+(oImg.length-1-index)*0.3+"s";
});
var newX,newY,lastX,lastY,minusX,minusY;
var rotX = -20,rotY = 0;
// document.onmousedown = function(e){
//     lastX = e.clientX;
//     lastY = e.clientY;
//     this.onmousemove = function(e){
//         newX = e.clientX;
//         newY = e.clientY;

//         minusX = newX - lastX;
//         minusY = newY - lastY;

//         rotX -= minusY*0.1;
//         rotY += minusX*0.2;

//         oWarp.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)";

//         lastX = newX;
//         lastY = newY;
//     }
//     this.onmouseup = function(){
//         this.onmousemove = null;
//     }
// }
var xzz=0;
var uu=document.getElementById('uu');
var grjs=document.getElementsByClassName('grjs');
// alert(grjs.length)
var dx=0;
setInterval(function(){
    xzz++;
    if(xzz>=360){
        xzz=0;
    }
    oWarp.style.transform = "rotateX("+10+"deg) rotateY("+-xzz+"deg)";
    if(xzz==5||xzz==28||xzz==60||xzz==92||xzz==125||xzz==158||xzz==191||xzz==225||xzz==258||xzz==289||xzz==322){
        for(var i=0;i<grjs.length;i++){
            grjs[i].style.height="0px";
            grjs[i].style.padding="0";
        }
        grjs[dx].style.height="400px";
        grjs[dx].style.padding="120px 40px 0";
        console.log(dx);
        dx++;
        if(dx>10){
            dx=0;
        }
    }
    // alert(grjs.length )
},150);


}

