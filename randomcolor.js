Object.prototype.randomColor = function(parameters) {
	var propDefaults = {
		opacity: 0.5,
		maxRed: 255,
		minRed:0,
		maxGreen: 255,
		minGreen:0,
		maxBlue: 255,
		minBlue:0
	}
	//Default Parameters
	for(var key in propDefaults){
		if(parameters.hasOwnProperty(key)){
			this[key] = parameters[key];
		}
		else{
			this[key] = propDefaults[key];
		}
	}
	//Check if parameter is set or take it from Defaults
	function getRandRed(maxRed, minRed){
		return Math.floor(Math.random() * maxRed) + minRed;
	}
	function getRandGreen(maxGreen, minGreen){
		return Math.floor(Math.random() * maxGreen) + minGreen;
	}
	function getRandBlue(maxBlue, minBlue){
		return Math.floor(Math.random() * maxBlue) + minBlue;
	}
	//Functions for R G B to random between max and min.
	if(typeof this.length =="undefined"){
		this.style.backgroundColor = 'rgba('+getRandRed(this.maxRed, this.minRed)+','+getRandGreen(this.maxGreen, this.minGreen)+','+getRandBlue(this.maxBlue, this.minBlue)+','+this.opacity+')';
	}
	else{
		for (var i = 0; i < this.length; i++) {
			this[i].style.backgroundColor = 'rgba('+getRandRed(this.maxRed, this.minRed)+','+getRandGreen(this.maxGreen, this.minGreen)+','+getRandBlue(this.maxBlue, this.minBlue)+','+this.opacity+')';
		}
	}
	//Check selector type
}
