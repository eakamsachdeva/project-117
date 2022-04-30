function preload(){
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoded);
    poseNet.on("pose",gotPoses);
}

function draw(){

}

function take_snapshot(){
    save("snap.png");
}

function modelLoded(){
    console.log("poseNet is initialize");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x ="+noseX);
    console.log("nose y ="+noseY);
      

}
}
