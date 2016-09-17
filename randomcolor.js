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
	function getRandColor(maxColor, minColor){
		return Math.floor(Math.random() * maxColor) + minColor;
	}
	//Functions for R G B to random between max and min.
	if(typeof this.length =="undefined"){
		this.style.backgroundColor = 'rgba('+getRandColor(this.maxRed, this.minRed)+','+getRandColor(this.maxGreen, this.minGreen)+','+getRandColor(this.maxBlue, this.minBlue)+','+this.opacity+')';
	}
	else{
		for (var i = 0; i < this.length; i++) {
			this[i].style.backgroundColor = 'rgba('+getRandColor(this.maxRed, this.minRed)+','+getRandColor(this.maxGreen, this.minGreen)+','+getRandColor(this.maxBlue, this.minBlue)+','+this.opacity+')';
		}
	}
	//Check selector type and pick a random color for each.
}
