function preload(){

}

function setup(){
    canvas=createCanvas(500,500);
    video=createCapture();
    tintcolour="";
    video.hide();
}

function draw(){
    image(video,0,0,500,500);
    tint(tintcolour);
}

function filter_tint(){
     tintcolour=document.getElementById("colour").value;
}

function  take_snapshot(){
    save('img.jpeg');
}