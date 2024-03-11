
let NoseX = 0;
let NoseY = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")

}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getPoses);

}

function modelLoaded() {
    console.log("Model Intialised");
}

function draw() {
    image(video,0,0,300,300);
    image(clown_nose, NoseX, NoseY, 30, 30);
}


function getPoses(results) {
    if (results.length > 0) {
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose,x)
        console.log("nose y = "+ results[0].pose.nose,y)
    }
}