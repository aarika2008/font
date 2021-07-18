function preload(){

}
function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)

    canvas=createCanvas(560,550)
    canvas.position(560,150)

    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotposes)
}
function draw(){
    background("#ffdef6")
}
function modelloaded(){
    console.log("model posenet has been initialized")
}
function gotposes(results){
if(results.length >0){
    console.log(results);
}
}