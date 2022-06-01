function Button(x, y, dim, c, f){
	
	this.pos = createVector(x, y);
	this.dim = dim;
	this.c = c;
	this.r = red(this.c);
	this.g = green(this.c);
	this.b = blue(this.c);
	this.a = 100;
	this.f = f;
	this.osc = new p5.Oscillator();
	this.osc.setType('sine');
	this.osc.freq(this.f);
	this.osc.amp(0);
	this.osc.start();
	
	
	this.selected = function(){
		var that = this;
		this.a = 255;
		this.osc.amp(0.5, 0.05);
		setTimeout(function(){that.endTone();}, 200);
		
	}
	
	this.endTone = function(){
		this.osc.amp(0, 0.07);
	}
	
	
	this.update = function(){
		if(this.a > 100){
			this.a -= 1.;
		}
		else{
			this.a = 100;
		}
		
		this.c = color(this.r, this.g, this.b, this.a);
	}
	
	this.checkCollision = function(x, y){
		if(this.pos.x < x && this.pos.x + this.dim > x){
			if(this.pos.y < y && this.pos.y + this.dim > y){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	
	this.render = function(){
		this.update()
		fill(this.c);
		rect(this.pos.x, this.pos.y, this.dim, this.dim);
	}
}