noseX = 0;
noseY = 0;
difference = 0;
rightwrist = 0;
leftwrist = 0;

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(600,100);
    video=createCapture(VIDEO);
    video.size(550,500);
     poseNet = ml5.poseNet(video,modalLoaded);
     poseNet.on("pose",gotResults);
}

function modalLoaded(){
    console.log("Modal is Loaded");
}

function gotResults(result){
    if (result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        rightwrist = result[0].pose.rightWrist.x;
        leftwrist = result[0].pose.leftWrist.x;
        difference = floor(leftwrist - rightwrist);
    }
}

function draw() {
    background("#fce803");
    document.getElementById("square_size").innerHTML="Width and height of a square will be = "+difference+" px";
    fill("#fa0202");
    stroke("#05aafc");
    square(noseX,noseY,difference);
}