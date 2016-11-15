	function drawSmiley(size) {
		var s = new createjs.Shape();
		var g = s.graphics;

		//Head
		g.setStrokeStyle(10, 'round', 'round');
		g.beginStroke("#000");
		g.beginFill("#FC0");
		g.drawCircle(0, 0, size); //55,53

		//Mouth
		g.beginFill(); // no fill
		g.arc(0, 0, 0.6*size, 0, Math.PI);

		//Right eye
		g.beginStroke(); // no stroke
		g.beginFill("#000");
		g.drawCircle(-0.3*size, -0.3*size, 0.15*size);

		//Left eye
		g.drawCircle(0.3*size, -0.3*size, 0.15*size);

		return s;
	}
