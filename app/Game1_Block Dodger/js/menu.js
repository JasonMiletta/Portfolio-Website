var menu_state = {

	create: function(){
		var up_key =
			this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		up_key.onDown.add(this.start, this);
		
		//defining text vars
		var style = { font: "30px Arial", fill: "#ffffff" };
		var x = game.world.width/2, y = game.world.height/2;

		//adding centered text
		var text = this.game.add.text(x, y-50, "Press up to start", style);
		text.anchor.setTo(0.5, 0.5);

		//keeps track of time lasted
		score_style = {font: "20px Arial", fill: '#ffffff' };
		score_text = this.game.add.text(x-108, y-30 , "Previous score: " + score, score_style);

		if(high_score < score){
			high_score = score;
		}

		//high score
		high_score_style = {font: "20px Arial", fill: '#ffffff' };
		high_score_text = this.game.add.text(x-108, y-5 , "High score: " + high_score, high_score_style);
	},

	start: function() {
		score = 0;
		this.game.state.start('play');
	}
};