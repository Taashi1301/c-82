canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color=document.getElementById("color").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouseevent="";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_X=e.clientX-canvas.offsetLeft;
    current_position_of_Y=e.clientY-canvas.offsetTop;
    if (mouseevent=="mouseDown"){
        console.log(current_position_of_X);
        console.log(current_position_of_Y);
        ctx.beginPath();
        ctx.lineWidth=width;
        ctx.strokeStyle=color;
        ctx.arc(current_position_of_X, current_position_of_Y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}
