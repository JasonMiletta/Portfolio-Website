var load_state = {

	preload: function(){
		game.load.image('background', 'assets/GreyBackground.png');
		game.load.image('player', 'assets/RedBlock.png');
		game.load.image('enemy', 'assets/BlueBlock.png');
		game.load.image('blocker', 'assets/BlackBlock.png');
    },

	create: function(){
		this.game.state.start('menu');
	}
};