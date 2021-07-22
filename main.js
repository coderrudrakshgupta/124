

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    

    canvas = createCanvas(550, 550);
    canvas.position(560, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        
    }
}


function draw() {
    background('#969A97');
    textSize(10);
    fill('#FFE787');
    text('peter', 50, 400);
}

function modelLoaded() {
    console.log('Posenet Is Initialized!');
}

