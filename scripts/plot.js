function Plot(dim){
	
	this.planted = false;
	this.hoed = false;
	this.water = false;
	this.rock = false;
	this.x;
	this.y;
	this.dim = dim;
	this.plant = null;
	
	this.init = function(){
		var n = random(0,100);
		if(n > 50){
			this.rock = true;
		}
		else{
			this.rock = false;
		}
	}
	
	this.store = function(){
		return [{p: this.planted, h: this.hoed, w: this.water, r: this.rock}, {x: this.x, y: this.y, dim: this.dim}, {plant: this.plant}];
	}
	
	this.setPos = function(x, y){
		this.x = x;
		this.y = y;
	}
	
	this.load = function(flags, pos, plant){
		//console.log(flags);
		this.planted = flags['p'];
		this.hoed = flags['h'];
		this.water = flags['w'];
		this.rock = flags['r'];
		
		this.x = pos['x'];
		this.y = pos['y'];
		this.dim = pos['dim'];
		
		this.plant = plant['plant'];
	}
	
	this.render = function(){
		if(this.rock == true){
			fill(100);
		}
		else{
			if(this.hoed == false){
				fill(201,152,119);
			}
			else{
				fill(96,68,59);
			}
		}
		strokeWeight(.5);
		stroke(0);
		rect(this.x, this.y, this.dim, this.dim);
	}
}