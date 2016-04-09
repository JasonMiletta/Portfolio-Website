var menu_state = {

	create: function(){
		//game.input.onDown.add(this.start, this);
		var spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceBar.onDown.add(this.start, this);

		this.background = game.add.sprite(0, 0, 'background');

		//defining text vars
		var titleStyle = { font: "30px Arial", fill: "#ffffff" };
		var x = game.world.width/2, y = game.world.height/2;

		//adding centered text
		var text = this.game.add.text(x, y, "Space to start!", titleStyle);
		text.anchor.setTo(0.5, 0.5);
	},

	start: function() {
		this.game.state.start('play');
	}
};