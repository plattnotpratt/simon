function Simon(){
	
	this.score = 0;
	this.moves = [];
	this.moveCount = 0;
	this.button_dim = 250;
	this.walk = 0;
	this.walkThroughtFlag = false;
	this.simon_width = this.button_dim*2+10;
	this.buttons = [];
	
	this.init = function(){
		this.buttons.push(new Button((width/2)-this.simon_width/2,50,this.button_dim, color(241, 196, 15, 100), 310));
		this.buttons.push(new Button((width/2)-this.simon_width/2, 60+this.button_dim,this.button_dim, color(231, 76, 60, 100), 252));
		this.buttons.push(new Button((width/2)-(this.simon_width/2)+this.button_dim+10,50,this.button_dim, color(52, 152, 219, 100), 515));
		this.buttons.push(new Button((width/2)-(this.simon_width/2)+this.button_dim+10,60+this.button_dim,this.button_dim, color(46, 204, 113, 100), 209));
		
		var that = this;
		setTimeout(function(){that.addMove();},3000);
	}
	
	
	this.randomMove = function(){
		return floor(random(this.buttons.length));
	}
	
	this.addMove = function(){
		var move = this.randomMove();
		this.buttons[move].selected()
		this.moves.push(move);
		this.moveCount++;
		this.walkThroughFlag = true;
	}
	
	this.playBack = function(){
		this.walk = 0;
		this.activateButton()
	}
	
	this.activateButton = function(){
		if(this.walk < this.moveCount){
			this.buttons[this.moves[this.walk]].selected();
			this.walk++;
			var that = this;
			setTimeout(function(){that.activateButton();}, 600);
		}else{
			
			this.walk = 0;
			this.addMove();
		}
	}
	
	
	
	this.update = function(){
		for(var i = 0; i < this.buttons.length; i++){
			this.buttons[i].update();
		}
	}
	
	this.render = function(){
		
		for(var i = 0; i < this.buttons.length; i++){
			this.buttons[i].render();
		}
		fill(0);
		ellipse(width/2,50+this.button_dim,100,100);
		fill(255);
		textSize(32);
		text(""+this.score, width/2-textWidth(this.score)/2,50+this.button_dim+10);
	}
	
	this.simonClick = function(x, y){
		for(var i = 0; i < this.buttons.length; i++){
			if(this.buttons[i].checkCollision(x, y)){
				this.buttons[i].selected();
				this.walkThrough(i);
			}else{
				//do nothing
			}
		}
	}
	
	this.walkThrough = function(choice){
		var that = this;
		if(this.moves[this.walk] == choice){
			this.walk++;
			if(this.walk >= this.moveCount){
				this.score++;
				setTimeout(function(){that.playBack();},1000);
			}
			
		}else{
			this.end();
		}
	}
	
	this.end = function(){
		var that = this;
		this.moves = [];
		this.moveCount = 0;
		this.walk = 0;
		this.score = 0;
		for(var i = 0; i < this.buttons.length; i++){
			this.buttons[i].selected();
		}
		setTimeout(function(){that.addMove()},3000);
	}
}

