var Canvas = new fabric.Canvas("MyCanvas");

var S_Width = 30;
var S_Height = 30;

var Super_X = 10;
var Super_Y = 10;

var Super_I;
var Super_BI;

function Ply_Up(){
    fabric.Image.fromURL("player.png", function(Img){
        Super_I = Img;
        Super_I.scaleToWidth(150);
        Super_I.scaleToHeight(140);
        Super_I.set({
            top: Super_Y, left: Super_X
        });
        Canvas.add(Super_I);
    });
}

function New_Img(Get_Img){
    fabric.Image.fromURL(Get_Img, function(Img){
        Super_BI = Img;
        Super_BI.scaleToWidth(S_Width);
        Super_BI.scaleToHeight(S_Height);
        Super_BI.set({
            top: Super_Y,
            left: Super_X
        });
        Canvas.add(Super_BI);
    });
}

window.addEventListener("keydown", My_Keys);

function My_Keys(e){
    keyPressed = e.keyCode;
    if(keyPressed=="70"){
        New_Img("ironman_face.png");
        console.log("Face");
    }
    if(keyPressed=="76"){
        New_Img("ironman_left_hand.png");
        console.log("Left Hand");
    }
    if(keyPressed=="82"){
        New_Img("ironman_right_hand.png");
        console.log("Right Hand");
    }
    if(keyPressed=="66"){
        New_Img("ironman_body.png");
        console.log("Body");
    }
    if(keyPressed=="72"){
        New_Img("ironman_legs.png");
        console.log("Legs");
    }
    if(keyPressed=="38"){
        Ply_Up()
        Up();
        console.log("Up");
    }
    if(keyPressed=="40"){
        Ply_Up()
        Down();
        console.log("Down");
    }
    if(keyPressed=="39"){
        Ply_Up()
        Right();
        console.log("Right");
    }
    if(keyPressed=="37"){
        Ply_Up();
        Left();
        console.log("Left");
    }
    if(e.shiftKey== true && keyPressed=="80"){
        console.log("Maximize");
        S_Width = S_Width + 10;
        S_Height = S_Height + 10;
        document.getElementById("C_W").innerHTML = S_Width;
        document.getElementById("C_H").innerHTML = S_Height;
    }
}

function Up(){
    if(Super_Y >= 0){
        Super_Y = Super_Y - S_Height;
        console.log("X = " + Super_X + " Y = " + Super_Y);
        Canvas.remove(Super_I);
    }
}

function Down(){
    if(Super_Y <= 1000){
        Super_Y = Super_Y + S_Height;
        console.log("X = " + Super_X + " Y = " + Super_Y);
        Canvas.remove(Super_I);
    }
}

function Left(){
    if(Super_X >= 0){
        Super_X = Super_X - S_Width;
        console.log("X = " + Super_X + " Y = " + Super_Y);
        Canvas.remove(Super_I);
    }
}

function Right(){
    if(Super_X <= 690){
        Super_X = Super_X + S_Width;
        console.log("X = " + Super_X + " Y = " + Super_Y);
        Canvas.remove(Super_I);
    }
}