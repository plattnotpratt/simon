var game;

function setup(){
	createCanvas(windowWidth, windowHeight);
	game = new Game();
	game.init();
	//game.store();
}

function draw(){
	background(0);
	game.render();
}

function mouseClicked() {
 	game.gameClick(mouseX, mouseY);
}