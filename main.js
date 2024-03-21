leftwrist_y=0;
leftwrist_x=0;

rightwrist_x=0;
rightwrist_y=0;

music1="";
music2="";

function preload()
{
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}