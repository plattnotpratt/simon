function Game(){

	this.simon;
	
	this.init = function(){
		this.simon = new Simon();
		this.simon.init();
	}
		
	this.render = function(){
		this.simon.update();
		this.simon.render();
	}
	
	this.gameClick = function(x, y){
		this.simon.simonClick(x, y);
	}
}