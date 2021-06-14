function preload() {
    clown_nose = loadImage('https://i.postimg.cc/3x6zMLYG/45-453924-drawing-clowns-nose-zoya-kylie2-clipart.png');
}

function setup() {
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,350);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;

        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
noseX="";
noseY="";

function draw() {
    image(video,0,0,400,350);
    image(clown_nose,noseX,noseY,30,30);
    
}

function take_snapshot() {
    save('myFilteredImage.png')
}