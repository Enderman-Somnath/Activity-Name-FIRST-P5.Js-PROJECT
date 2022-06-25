function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(250, 250);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "null";
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(tintColor);
}
function take_snapshot(){
    save('PictureFromCamera.png');
}
function filtertint(){
    tintColor = document.getElementById("colorname").value;
}