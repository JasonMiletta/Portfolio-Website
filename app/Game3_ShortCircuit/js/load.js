var load_state = {

	preload: function(){
		game.load.image('background', 'assets/PurpleBackground.png');
		game.load.image('bolt', 'assets/Bolt.png');
		game.load.image('zap', 'assets/Zap.png');
		game.load.image('circuit', 'assets/Circuit.png');
		game.load.image('cube', 'assets/ParticleCube.png');
    },

	create: function(){
		this.game.state.start('menu');
	}
};