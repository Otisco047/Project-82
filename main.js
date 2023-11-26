canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
last_mousex = "";
last_mousey = "";
mousevalue = "";

canvas.addEventListener("mousedown", mymd);

function mymd(e) {
    console.log("mousedown");
    mousevalue = "md";

}
canvas.addEventListener("mouseup", myup);

function myup(e) {
    console.log("mouseup");
    mousevalue = "mu";

}
canvas.addEventListener("mouseleave", myl);

function myl(e) {
    console.log("mouseleave");
    mousevalue = "ml";

}
canvas.addEventListener("mousemove", mym);

function mym(e) {
    console.log("mousemove");
    currentmousex = e.clientX - canvas.offsetLeft;
    currentmousey = e.clientY - canvas.offsetTop;
    if (mousevalue == "md") {
        pen.beginPath();
        pen.strokeStyle = "violet";
        pen.lineWidth = 3;
        pen.moveTo(last_mousex, last_mousey);
        pen.lineTo(currentmousex, currentmousey);
        pen.stroke();


    }
    last_mousex = currentmousex;
    last_mousey = currentmousey;


}

function clearcanvas() {
    pen.clearRect(0, 0, canvas.width, canvas.height);

}