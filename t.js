
class circle {
	constructor(x, y, radius, color) {
		this.original = y;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color
	}
	draw() {
		if (this.y > 300) {
			mid = false
			this.y = this.original
		}
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();	
	}
	update() {
		mid = true
		this.y++;
	}
}

class cloudd {
	constructor(x, y, radius, color) {
		this.original = y;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0,2*Math.PI);
		ctx.stroke();
		ctx.lineWidth = 0;
		ctx.fillStyle = this.color
		ctx.fill();	

		ctx.beginPath();
		ctx.arc(this.x+this.radius, this.y, this.radius, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.x+this.radius+this.radius, this.y, this.radius+1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.x+this.radius, this.y-this.radius, this.radius+1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.x+this.radius-this.radius, this.y+this.radius, this.radius+1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();


		ctx.beginPath();
		ctx.arc(this.x+this.radius+this.radius, this.y+this.radius, this.radius+1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.x+this.radius+this.radius+this.radius, this.y+this.radius, this.radius+1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();
	
		ctx.beginPath();
		ctx.arc(this.x+this.radius-this.radius-this.radius, this.y+this.radius, this.radius+1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.x+this.radius-this.radius-this.radius+this.radius, this.y+this.radius, this.radius+1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.x+this.radius-this.radius-this.radius+this.radius+this.radius, this.y+this.radius, this.radius+1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color
		ctx.fill();
	}
}

var cloud;

function background(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.sideL = ((this.x+this.width)/2)-((this.x+this.width)/3.5)
		this.sideR = ((this.x+this.width)/2)-((this.x+this.width)/3.5)
		this.draw = function(){
		//square
			ctx = myGameArea.context
			ctx.beginPath();
			ctx.fillStyle = "#0000A0"
			ctx.fillRect(this.x,this.y, this.width, this.height)
			ctx.stroke();
			//circle
			ctx.beginPath();
			ctx.arc((this.x+this.width)/2, this.y+50, ((this.x+this.width)/3.5), 0,2*Math.PI);
			ctx.fillStyle = "#008000"
			ctx.fill();	
			ctx.stroke();
			//secondsqure
			ctx.beginPath();
			ctx.fillStyle = "#0000A0"
			ctx.fillRect(this.x,this.y+50, this.width, this.height)
			ctx.stroke();
		}
}	

function hero(width, height, color, x, y) {
    this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
    this.x = x;
	this.y = y; 
	this.color = color;
    this.update = function(){
        ctx = myGameArea.context;
		//hair
		ctx.fillStyle = "#FFFF00"
		ctx.fillRect(this.x-5, this.y-10, this.width+10, this.height+5)
		//head
		ctx.fillStyle = "#FF0000";;
        ctx.fillRect(this.x, this.y, this.width, this.height);
		//eyes
		ctx.fillStyle = "#FFFFFF"
		ctx.fillRect(this.x+3, this.y+3, this.width/4, this.height/4)
		ctx.fillRect(this.x+this.width*.5, this.y+3, this.width/4, this.height/4)
		//mouth
		ctx.fillRect(this.x+7, this.y+12, this.width/2, this.height/4)
		//body
		ctx.fillStyle = "#FFA500";
		ctx.fillRect(this.x+5, this.y+this.height, this.height-5, this.width-5)
		//leg
		ctx.fillRect(this.x, this.y+this.height+20, 10, 15)
		ctx.fillRect(this.x+15, this.y+this.height+20, 10, 15)
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
}

var imageObj = new Image();



function cannon(x, y, radius) {
	this.x = x;
    this.y = y; 
	this.radius = radius
	this.update = function(){
		//podium 
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.rect(this.x-this.radius, this.y, this.radius+this.radius, this.radius+this.radius);
		ctx.fillStyle = "#FF0000"
		ctx.fillRect(this.x-radius,this.y, this.radius+this.radius, this.radius+this.radius)
		ctx.stroke();
		//back of cannon
		ctx = myGameArea.context;
		ctx.beginPath();
		ctx.arc(this.x, this.y-5, this.radius, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#808080'
		ctx.fill();
		//CANNON MOUTH
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius-1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#000000'
		ctx.fill();	
		//face
		ctx.beginPath();
		ctx.arc(this.x, this.y, 9, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	

		ctx.font = "30px Arial";
		ctx.fillText("3",this.x-10,this.y+50);	
	}
	this.updateL = function() {
		//side of cannon
		ctx = myGameArea.context;
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.rect(this.x, this.y-this.radius, this.radius*3, this.radius*1.8);
		ctx.stroke();
		ctx.fillStyle = '#808080'
		ctx.fill();
		//CANNON MOUTH
		ctx.beginPath();
		ctx.arc(this.x+3, this.y, this.radius*.95, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#000000'
		ctx.fill();	
		//side
		ctx.beginPath();
		ctx.rect(this.x+5, this.y+this.radius, this.radius*2.5, this.radius+this.radius);
		ctx.fillStyle = "#FF0000"
		ctx.fillRect(this.x+5, this.y+this.radius, this.radius*2.5, this.radius+this.radius)
		ctx.stroke();
		//white
		ctx.beginPath();
		ctx.arc(this.x, this.y, 6, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	

		ctx.font = "30px Arial";
		ctx.fillText("1",this.x,this.y+50);	
	}
	this.updateR = function() {
		//side of cannon
		ctx = myGameArea.context;
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.rect(this.x-this.radius*3, this.y-this.radius, this.radius*3, this.radius*2);
		ctx.stroke();
		ctx.fillStyle = '#808080'
		ctx.fill();
		//CANNON MOUTH
		ctx.beginPath();
		ctx.arc(this.x+3, this.y, this.radius*.95, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#000000'
		ctx.fill();	
		//mouth
		//white
		ctx.beginPath();
		ctx.arc(this.x+5, this.y, 6, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	
		//side
		ctx.beginPath();
		ctx.rect(this.x-this.radius*3, this.y+this.radius, this.radius*2.5, this.radius+this.radius);
		ctx.fillStyle = "#FF0000"
		ctx.fillRect(this.x-this.radius*3, this.y+this.radius, this.radius*2.5, this.radius+this.radius)
		ctx.stroke();	
		//text
		ctx.fillStyle = '#FFFFFF'
		ctx.font = "30px Arial";
		ctx.fillText("5",this.x-10,this.y+50);	
	}
	this.updateL2 = function() {
		//side
		ctx.beginPath();
		ctx.rect(this.x-this.radius, this.y+this.radius*.3, this.radius*2.8, this.radius+this.radius);
		ctx.fillStyle = "#FF0000"
		ctx.fillRect(this.x-this.radius, this.y+this.radius*.3, this.radius*2.8, this.radius*2)
		ctx.stroke();
		//grey
		ctx.beginPath();
		ctx.moveTo(this.x-this.radius, this.y-this.radius);
		ctx.lineTo(this.x+this.radius+15, this.y-this.radius*2);
		ctx.lineTo(this.x+this.radius+15, this.y-this.radius*.9);
		ctx.lineTo(this.x+this.radius, this.y+this.radius);
		ctx.closePath();
		ctx.fillStyle = '#808080'
		ctx.fill();
		//CANNON MOUTH
		ctx = myGameArea.context;
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.arc(this.x, this.y, this.radius*.95, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#000000'
		ctx.fill();	
		//WHITE
		ctx.beginPath();
		ctx.arc(this.x, this.y, 6, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	

		ctx.font = "30px Arial";
		ctx.fillText("2",this.x-5,this.y+50);	
	}
	this.updateR2 = function() {
		//side
		ctx.beginPath();
		ctx.rect(this.x-this.radius*2+3, this.y+this.radius*.3, this.radius*2.5, this.radius+this.radius+2);
		ctx.fillStyle = "#FF0000"
		ctx.fillRect(this.x-this.radius*2+3, this.y+this.radius*.3, this.radius*2.5, this.radius*2+2)
		ctx.stroke();
		//grey
		ctx.beginPath();
		ctx.moveTo(this.x+this.radius, this.y-this.radius);
		ctx.lineTo(this.x-this.radius-15, this.y-this.radius*2);
		ctx.lineTo(this.x-this.radius-15, this.y-this.radius*.9);
		ctx.lineTo(this.x-this.radius, this.y+this.radius);
		ctx.closePath();
		ctx.fillStyle = '#808080'
		ctx.fill();
		//mouth
		ctx = myGameArea.context;
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.arc(this.x, this.y, this.radius*.95, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#000000'
		ctx.fill();	
		//WHITE
		ctx.beginPath();
		ctx.arc(this.x, this.y, 6, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	

		ctx.font = "30px Arial";
		ctx.fillText("4",this.x-10,this.y+50);	
	}
}

function ghost(x, y, radius) {
    	this.x = x;
    	this.y = y; 
	this.radius = radius
	this.left = this.x - this.radius + 1
	this.right = this.x-this.radius+1+this.radius+this.radius-2
    this.update = function(){
		//body
		ctx = myGameArea.context;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#000000'
		ctx.fill();	
		//body 1
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.rect(this.x-this.radius+1, this.y+1, this.radius+this.radius-2, this.radius+this.radius/2);
		ctx.fillRect(this.x-this.radius+1, this.y+1, this.radius+this.radius-2, this.radius+this.radius/2)
		ctx.stroke();
		//eyes
		ctx.beginPath();
		ctx.lineWidth="1";
		ctx.fillStyle = '#FFFFFF'
		ctx.rect((this.x-this.radius/2)-2, this.y-this.radius/4, radius/2, radius/2);
		ctx.fillRect((this.x-this.radius/2)-2, this.y-this.radius/4, radius/2, radius/2)
		ctx.stroke();
		//anothereye
		ctx.beginPath();
		ctx.lineWidth="1";
		ctx.fillStyle = '#FFFFFF'
		ctx.rect((this.x+this.radius/2)-2, this.y-this.radius/4, radius/2, radius/2);
		ctx.fillRect((this.x+this.radius/2)-2, this.y-this.radius/4, radius/2, radius/2);
		ctx.stroke();
	}
}		
		
function SQR (x, y, w, h, c) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.colorfill = c
		this.draw = function() {
		ctx = myGameArea.context;
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = this.colorfill
		ctx.fillRect(this.x,this.y, this.width, this.height)
		ctx.stroke();
	}
}

function treasure(x, y) {	
	this.x = x;
	this.y = y;
	this.width = 50;
	this.height = 50;
	this.draw = function() {
		ctx = myGameArea.context
		//top
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.height/2, 0,2*Math.PI);
		ctx.lineWidth = 0
		ctx.fillStyle = "#FFD700"
		ctx.fill();	
		ctx.stroke();
		//body
		ctx.beginPath();
		ctx.rect(this.x-this.height/2, this.y, this.width, this.height/2);
		ctx.fillStyle = this.colorfill
		ctx.fillRect(this.x-this.height/2, this.y, this.width, this.height/2)
		ctx.stroke();
		ctx.font="20px Comic Sans MS";
		ctx.fillStyle = "#000000"
		ctx.fillText("Protect this! -->",this.x-190, this.y);
	}
	this.crashWith = function(otherobj) {
        // var myright = this.x + (this.width);
        // var mytop = this.y;
        var mybottom = this.y + (this.height/2);
        var othertop = otherobj.y-otherobj.radius;
        // var otherleft = otherobj.x;
        // var otherbottom = otherobj.y + (otherobj.height);
        var crash = false;
        // if ((mybottom < othertop) ||
        //        (mytop > otherbottom) ||
        //        (myright < otherleft) ||
        //        (myleft > otherright)) {
        //    crash = true;
		// }
		if ((mybottom-20 > othertop)) {
			crash = true;
		}
        return crash;
    }
	//for cannon 1 and 2
	this.crashWith1 = function(otherobj) {
        var myleft = this.x - (10);
        var otherright = otherobj.x + (otherobj.radius);
        var crash = false;
	if ((myleft < otherright)) {
		crash = true;
	}
        return crash;
    }
	this.crashWith5 = function(otherobj) {
        var myright = this.x + (10);
        var otherleft = otherobj.x - (otherobj.radius);
        var crash = false;
	if ((myright > otherleft)) {
		crash = true;
	}
        return crash;
    }

	
}	

var num;

function bomb(x, y, radius) {
	this.xog = x;
	this.og = y;
	this.x = x;
    this.y = y; 
	this.radius = radius
	this.k = this.y + this.radius
	this.draw1 = function(otherobj){
		if (this.x < 10) {
			noteC = true;
			a1 = false
			this.x = this.xog
			rando = Math.floor((Math.random() * 0) - 200)
			//random appearance
			otherobj.x = -10
			// GhostL = false;
			// GhostL = true;
			s = s + 1;
		}
		ctx = myGameArea.context;
		//CANNON MOUTH
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius-1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	
	}
	this.draw2 = function(otherobj){
		if (this.y > 300) {
			noteF = true;
			a2 = false
			this.y = this.og
			this.x = this.xog
			rando = Math.floor((Math.random() * 500) + 300)
			//random appearance
			// otherobj.x = 15 - (rando-300)
			otherobj.x = 5
			otherobj.y = 310
			// GhostL2 = false;
			// GhostL2 = true;
			s = s + 1
		}
		ctx = myGameArea.context;
		//CANNON MOUTH
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius-1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	
	}
	this.draw3 = function(otherobj){
		if (this.y > 300) {
			noteE = true
			a3 = false
			this.y = this.og
			//random appearnace of the ghost.
			// otherobj.y = Math.floor((Math.random() * 500) + 300)
			otherobj.y = 500
			// GhostMid = false;
			// GhostMid = true;
			s = s + 1;
		}
		ctx = myGameArea.context;
		//CANNON MOUTH
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius-1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	
	}
	this.draw4 = function(otherobj){
		if (this.y > 300) {
			noteG = true;
			a4 = false
			this.y = this.og
			this.x = this.xog
			rando = Math.floor((Math.random() * 500) + 300)
			//random appearance
			// otherobj.x = 485 + (rando-300)
			otherobj.x = 495
			otherobj.y = 310
			//GhostR2 = true;
			// GhostR2 = true;
			s = s + 1;
		}
		ctx = myGameArea.context;
		//CANNON MOUTH
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius-1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	
	}
	this.draw5 = function(otherobj){
		if (this.x > 500) {
			noteD = true;
			a5 = false
			this.x = this.xog
			rando = Math.floor((Math.random() * 700) + 500)
			//random appearance
			otherobj.x = 510
			// GhostR = false;
			// GhostR = true;
			s = s + 1;
		}
		ctx = myGameArea.context;
		//CANNON MOUTH
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius-1, 0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#FFFFFF'
		ctx.fill();	
	}
	this.update1 = function() {
		a1 = true;
		this.x -=  b;
	}
	this.update2 = function() {
		a2 = true;
		this.x -=  b;
		this.y +=   b;
	}
	this.update3 = function() {
		a3 = true
		this.y +=   b;
	}
	this.update4 = function() {
		a4 = true
		this.y +=   b;
		this.x +=   b;
	}
	this.update5 = function() {
		a5 = true
		this.x +=   b;
	}
	this.crashWith = function(otherobj) {
		var mybottom = this.y + (this.radius);
		var othertop = otherobj.y;
		
		var myleft = this.x-this.radius
        // var otherleft = otherobj.x;
        // var otherright = otherobj.x + (otherobj.width);

        // var otherbottom = otherobj.y + (otherobj.height);
        var crash = false;
        // if ((mybottom < othertop) ||
        //        (mytop > otherbottom) ||
        //        (myright < otherleft) ||
        //        (myleft > otherright)) {
        //    crash = true;
		// }
		if ((mybottom > othertop)) {
				crash = true;
		}
        return crash;
    }
	this.crashWith1 = function(otherobj) {
        // var myleft = this.x;
        // var myright = this.x + (this.width);
        // var mytop = this.y;
	var myleft = this.x-this.radius
        var otherright = otherobj.x;

        var crash = false;
	if ((myleft < otherright)) {
		crash = true;
	}
        return crash
    }
	this.crashWith2 = function(otherobj) {
        // var myleft = this.x;
        // var myright = this.x + (this.width);
        // var mytop = this.y;
	var myleft = this.x-this.radius
        var otherright = otherobj.x;

        var crash = false;
	if ((myleft < otherright)) {
		crash = true;
	}
        return crash
    }
	this.crashWith4 = function(otherobj) {
        // var myleft = this.x;
        // var myright = this.x + (this.width);
        // var mytop = this.y;
        var otherleft = otherobj.x;
        var myright = this.x + (this.radius);

        var crash = false;
	if ((myright > otherleft)) {
		crash = true;
	}
        return crash
    }
	this.crashWith5 = function(otherobj) {
        var otherleft = otherobj.x;
        var myright = this.x + (this.radius);

        var crash = false;
	if ((myright > otherleft)) {
		crash = true;
	}
        return crash
    }
}

const width = 500
const height = 300

Ground1 = new background(0, 190, 500, 150)
Sky = new SQR(0, 0 , 500, 300, "#87CEEB")

var mini;
var weapon;

function getRandomInt(min, max) {d
	return (Math.random() * (max-min) + min);
}

//center ball
var ammo3;
//left ball
var ammo1
var ammo2
var ammo4
var ammo5

//third ghost
var myObstacle;
//other ghost
var myObstacle1;
var myObstacle2;
var myObstacle4;
var myObstacle5;

var lowC;
var lowD;
var lowE;
var lowF;
var lowG;
var won;
var wah;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function StartGame1() {
	wah.stop()
	myGameArea.stop()
	GhostL = true;
	GhostL2 = false;
	GhostMid = false;
	GhostR2 = false;
	GhostR = false;
	s = 1;
	startGame()
}

function startGame() {
	myGameArea.start();
	Sun = new circle(width-50, height-200, 10, "#FFFF00")
	myGamePiece = new hero(25, 20, "black", 240, 100);
	
	mini = new treasure(250, 80)

	weapon = new cannon(252, 145, 15)

	ammo1 = new bomb(150, 115, 7)
	ammo2 = new bomb(192, 140, 7)
	ammo3 = new bomb(252, 145, 10)
	ammo4 = new bomb(310, 140, 8)
	ammo5 = new bomb(355, 115, 7)

	// myObstacle = new ghost(450, 150, 10)
	myObstacle1 = new ghost(0, 110, 7)
	myObstacle2 = new ghost(15, 300, 8)
	myObstacle = new ghost(252, 300, 9)
	myObstacle4 = new ghost(485, 300, 9)
	myObstacle5 = new ghost(500, 110, 9)

	cloud = new circle(50, 190, 30, "#000000")

	cloud7 = new cloudd(250, 50, 10, "#FFFFFF")

	lowC = new sound("c.wav");
	lowD = new sound("d.wav");
	lowE = new sound("e.wav");
	lowG = new sound("g.wav")
	lowF = new sound("f.wav")
	lowA = new sound("a.wav")
	
	wah = new sound('wah.mp3')

	won = new sound("won.mp3");
	
}

var loss = false;

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 500;
        this.canvas.height = 300;
		this.context = this.canvas.getContext("2d");
		this.frameNo = 0; 
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
		// window.addEventListener('keydown', function (e) {
		// 	myGameArea.key = e.keyCode;
        // })
        // window.addEventListener('keyup', function (e) {
		// 	myGameArea.key = false;
		// })
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false; 
        })
    },
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
	}
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

let weapon1 = new cannon(150, 115, 9)
let weapon3 = new cannon(192, 140, 10)
let weapon2 = new cannon(350, 115, 9)
let weapon4 = new cannon(309, 140, 10)

var a1 = false;
var a2 = false;
var a3 = false;
var a4 = false;
var a5 = false;

// var GhostL = false;
// var GhostL2 = false;
// var GhostMid = false;
// var GhostR2 = false;
// var GhostR = false;

var GhostL = true;
var GhostL2 = false;
var GhostMid = false;
var GhostR2 = false;
var GhostR = false;


var noteC = true;
var noteD = true;
var noteE = true;
var noteF = true;
var noteG = true;
var noteA = true;

var b = 8;
var i = 5;
var s = 1;

var sp = false;
var c1 = false;
var c2 = false;
var c3 = false;
var c4 = false;
var c5 = false;

function updateGameArea() {
	//a key

	if (myGameArea.keys && myGameArea.keys[49]) {
		if (c1) {
			if (noteC == true) {
				lowC.play()
			}
			a1 = true;
			noteC = false;
		}
	}
	//s key
	if (myGameArea.keys && myGameArea.keys[50]) {
		if (c2) {
			if (noteF == true) {
				lowF.play()
			}
			a2 = true;
			noteF = false;
		}
	}
	// d key
	if (myGameArea.keys && myGameArea.keys[51]) {
		if (c3) {
			if (noteE == true) {
				lowE.play()
			}
				a3 = true;
				noteE = false;
		}
	}
	//f key
	if (myGameArea.keys && myGameArea.keys[52]) {
		if (c4) {
			if (noteG == true) {
				lowG.play()
			}
				a4 = true;
				noteG = false;
		}
	}
	//g key
	if (myGameArea.keys && myGameArea.keys[53]) {
		if (c5) {
			if (noteD == true) {
				lowD.play()
			}
				a5 = true;
				noteD = false;
		}
	}

	if (myGameArea.keys && myGameArea.keys[16]) {
		if (sp) {
			if (noteA == true) {
				lowA.play()
			}
			a1 = true;
			a2 = true;
			a3 = true;
			a4 = true;
			a5 = true;	
			noteA = false;
		}
	}


	if ((a1 == false) && (a5 == false)) {
		noteA = true;
	}

	//ball movement
	if (a1 == true) {
		ammo1.update1()
	}
	if (a2 == true) {
		ammo2.update2()
	}
	if (a3 == true) {
		ammo3.update3()
	}
	if (a4 == true) {
		ammo4.update4()
	}
	if (a5 == true) {
		ammo5.update5()
	}

	if (s == 1 ) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostL = true;
	}
	if (s == 2) {
		c1 = false;
		c5 = true;
		c3 = false;
		c4 = false;
		c2 = false;
		GhostL = false;
		GhostR = true;
	}
	if (s == 3) {
		c1 = false;
		c2 = false;
		c3 = true;
		c4 = false;
		c5 = false;
		GhostR = false;
		GhostMid = true;
	}
	if (s == 4) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostMid = false;
		GhostL = true;
	}

	if (s == 5 ) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostL = true;
	}
	if (s == 6) {
		c1 = false;
		c5 = true;
		c3 = false;
		c4 = false;
		c2 = false;
		GhostL = false;
		GhostR = true;
	}
	if (s == 7) {
		c1 = false;
		c2 = false;
		c3 = true;
		c4 = false;
		c5 = false;
		GhostR = false;
		GhostMid = true;
	}
	if (s == 8) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostMid = false;
		GhostL = true;
	}

	if (s == 9) {
		c1 = false;
		c2 = false;
		c3 = true;
		c4 = false;
		c5 = false;		
		GhostL = false;
		GhostMid = true;
	}
	if (s == 10) {
		c1 = false;
		c2 = true;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostMid = false;
		GhostL2 = true;
	}
	if (s == 11) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = true;
		c5 = false;
		GhostL2 = false;
		GhostR2 = true;
	}
	if (s == 12) {
		c1 = false;
		c2 = false;
		c3 = true;
		c4 = false;
		c5 = false;	
		GhostR2 = false;
		GhostMid = true;
	}

	if (s == 13) {
		c1 = false;
		c2 = true;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostMid = false;
		GhostL2 = true;
	}
	if (s == 14) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = true;
		c5 = false;
		GhostL2 = false;
		GhostR2 = true;
	}
	if (s == 15) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = true;
		c5 = false;
		GhostR2 = true;
	}
	if (s == 16) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		sp = true;
		GhostL = true;
		GhostL2 = true;
		GhostMid = true;
		GhostR2 = true;
		GhostR = true;
	}
	if (s == 21) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = true;
		c5 = false;
		sp = false;
		GhostL = false;
		GhostL2 = false;
		GhostMid = false;
		GhostR = false;
		GhostR2 = true;
	}
	if (s == 22) {
		c1 = false;
		c2 = true;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostR2 = false;
		GhostL2 = true;		
	}
	if (s == 23) {
		c1 = false;
		c2 = false;
		c3 = true;
		c4 = false;
		c5 = false;
		GhostL2 = false;
		GhostMid = true;		
	}
	if (s == 24) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostMid = false;
		GhostL = true;		
	}

	if (s == 25) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = true;
		c5 = false;
		GhostL = false;
		GhostR2 = true;
	}
	if (s == 26) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		sp = true;
		GhostL = true;
		GhostL2 = true;
		GhostMid = true;
		GhostR2 = true;
		GhostR = true;
	}
	if (s == 31) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = true;
		c5 = false;
		sp = false;
		GhostL = false;
		GhostL2 = false;
		GhostMid = false;
		GhostR = false;
		GhostR2 = true;
	}
	if (s == 32) {
		c1 = false;
		c2 = true;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostR2 = false;
		GhostL2 = true;		
	}
	if (s == 33) {
		c1 = false;
		c2 = false;
		c3 = true;
		c4 = false;
		c5 = false;
		GhostL2 = false;
		GhostMid = true;		
	}
	if (s == 34) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostMid = false;
		GhostL = true;		
	}

	if (s == 35) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostL = true;		
	}
	if (s == 36) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = true;
		c5 = false;
		GhostL = false;
		GhostR2 = true;		
	}
	if (s == 37) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostR2 = false;
		GhostL = true;		
	}

	if (s == 38) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostL = true;		
	}
	if (s == 39) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = true;
		c5 = false;
		GhostL = false;
		GhostR2 = true;		
	}
	if (s == 40) {
		c1 = true;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostR2 = false;
		GhostL = true;		
	}

	if (s == 41) {
		c1 = false;
		c2 = false;
		c3 = false;
		c4 = false;
		c5 = false;
		GhostR2 = false;
		GhostL = false;	
		won.play()
		s += 1	
	}

	if (s == 42) {
		alert("I can't believe you won!")
		s += 1;
	}


	if (GhostL) {
		myObstacle1.x += i;
	}

	if (GhostL2) {
		myObstacle2.x += i;
		myObstacle2.y -= i;
	}

	// //ghost
	if (GhostMid) {
		myObstacle.y -=  i;
	}

	if (GhostR2) {
		myObstacle4.x -= i;
		myObstacle4.y -= i;
	}

	if (GhostR) {
		myObstacle5.x -= i;
	} 

	
	
	
	if ((mini.crashWith(myObstacle)) || 
		(mini.crashWith1(myObstacle1)) ||
		(mini.crashWith5(myObstacle5)) ||
		(mini.crashWith1(myObstacle2)) ||
		(mini.crashWith5(myObstacle4)) ) {
		myGameArea.stop();
		wah.play()
		loss = true;
	}

	// if (loss) {
	// 	mygameArea.clear();
	// 	ctx = myGameArea.getContext("2d");
	// 	ctx.font = "30px Arial";
	// 	ctx.fillText("Hello World",250,200);
	// }

	
	if (-100 < cloud.x+cloud.radius < 650) {
		cloud.x -= 1;
	}
	if ((cloud.x+cloud.radius < 0)) {
			cloud.x = Math.floor(Math.random() * 600) + 500;
		}

	if (-100 < cloud.x+cloud.radius < 650) {
			cloud7.x -= 1;
		}
	if ((cloud7.x+cloud7.radius < -75)) {
		cloud7.x = Math.floor(Math.random() * 600) + 500;
		}


	if ((ammo1.crashWith1(myObstacle1)) && (a1 == true)) {
		myObstacle1.x -= i;
		GhostL = false;
	}

	if ((ammo2.crashWith2(myObstacle2)) && (a2 == true)) {
		myObstacle2.x -= i;
		myObstacle2.y += i;
		GhostL2 = false;
	}

	if ((ammo3.crashWith(myObstacle)) && (a3 == true)) {
		myObstacle.y +=  i;
		GhostMid = false;
	}

	if ((ammo4.crashWith4(myObstacle4)) && (a4 == true)) {
		myObstacle4.x += i;
		myObstacle4.y += i;
		GhostR2 = false;
	}

	if ((ammo5.crashWith5(myObstacle5)) && (a5 == true)) {
		myObstacle5.x += i;
		GhostR = false;
	}

	if ((ammo5.crashWith5(myObstacle5)) && (a5 == true))  {
		myObstacle5.x += i;
		GhostR = false;
	}

	myGameArea.clear();
	Sky.draw()
	
	
	Sun.draw()
	cloud.draw()
	cloud7.draw()
	Ground1.draw()
	mini.draw()
	myGamePiece.newPos();
	myGamePiece.update();

	weapon.update()
	weapon1.updateL()
	weapon2.updateR()
	weapon3.updateL2()
	weapon4.updateR2()

	ammo1.draw1(myObstacle1)
	ammo2.draw2(myObstacle2)
	//ammo2.draw2()
	ammo3.draw3(myObstacle)
	ammo4.draw4(myObstacle4)
	ammo5.draw5(myObstacle5)

	myObstacle1.update()
	myObstacle2.update()
	myObstacle.update()
	myObstacle4.update()
	myObstacle5.update()

	myObstacle1.draw()
	myObstacle2.draw()
	myObstacle.draw()
	myObstacle4.draw()
	myObstacle5.draw()

}



startGame()
