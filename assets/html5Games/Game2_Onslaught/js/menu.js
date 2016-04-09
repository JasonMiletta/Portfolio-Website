var menu_state = {

	create: function(){
		game.input.onDown.add(this.start, this);
		//background
		this.background = game.add.sprite(0, 0, 'background');

		turret = game.add.sprite(this.game.width / 2, this.game.width / 2, 'turret');
		turret.anchor.setTo(0.5, 0.5);
		
		//defining text vars
		var style = { font: "30px Arial", fill: "#ffffff" };
		var x = game.world.width/2, y = game.world.height/2;

		//adding centered text
		var text = this.game.add.text(x, y-100, "Click to start!", style);
		text.anchor.setTo(0.5, 0.5);
	},

	start: function() {
		this.game.state.start('play');
	}
};