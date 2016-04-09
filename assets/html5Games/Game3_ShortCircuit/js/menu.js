var menu_state = {

	create: function(){
		//game.input.onDown.add(this.start, this);
		up = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		up.onDown.add(this.start, this);

		this.background = game.add.sprite(0, 0, 'background');

		//defining text vars
		var style = { font: "30px Arial", fill: "#ffffff" };
		scoreStyle = { font: "20px Arial", fill: "#ffffff" };
		var x = game.world.width/2, y = game.world.height/4;

		//adding centered text
		var text = this.game.add.text(x-120, y-90, "Up to start!", style);
		text.anchor.setTo(0.5, 0.5);

		if(currentScore > highScore)
			highScore = currentScore;
		highScoreText = this.game.add.text(50, 75, "High Score: " + highScore, scoreStyle);
	
		scoreText = this.game.add.text(50, 95, "Score: " + currentScore, scoreStyle);
	},

	start: function() {
			currentScore = 0;
			this.game.state.start('play');
	}
};