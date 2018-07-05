
//code and cool ideas by daan lockhorst and Danny Schilke
//idea and example by CodingChallenge on youtube and W3C  






// global variables
var myGamePiece;
var myObstacles = [];
var myScore;
var up = false;
var colorArr = ["black", "white", "green", "yellow", "red"];

// initaite game 
function startGame() {
    myGamePiece = new component(25, 25, "black", 10, 120);
    myGamePiece.gravity = 0.15
    myScore = new component("18px", "Consolas", "white", 280, 40, "text");
    myGameArea.start();
}


var myGameArea = {
    canvas : document.getElementById("myCanvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// the main component class 
function component(w, h, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.w = w;
    this.h = h;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.w + " " + this.h;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.h;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.w);
        var mytop = this.y;
        var mybottom = this.y + (this.h);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.w);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.h);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}
// runs the main game 
function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        var c1 = colorArr[Math.floor(Math.random()*colorArr.length)];
        var c2 = colorArr[Math.floor(Math.random()*colorArr.length)];
        var s1 = Math.floor(Math.random()*200);
        var s2 = Math.floor(Math.random()*200);
        console.log(c1, c2, s1, s2);
        myObstacles.push(new component(s1, height, c1, x, 0));
        myObstacles.push(new component(s2, x - height - gap, c2, x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

//set the refresh rate
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 2 == 0) {return true;}
    return false;
}

//set the vertical movement of the player blob thingie 
function accelerate(n) {
    myGamePiece.gravity = n;
}


//starts the game and handles the button;
Window.onload = startGame();


// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("but1").onclick = function() {
    accelerate(-0.15);
};
document.getElementById("but2").onclick = function(){
    accelerate(0.15);
};

// checks for the key down and up so you can play with up and down keys
document.onkeydown = checkKey();
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        accelerate(-0.15);
    }
    else if (e.keyCode == '40') {
        accelerate(0.5);
    }
}