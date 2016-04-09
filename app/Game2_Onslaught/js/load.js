var load_state = {

	preload: function(){
		game.load.image('background', 'assets/SandBackground.png');
		game.load.image('enemy', 'assets/Enemy.png');
		game.load.image('turret', 'assets/Turret.png');
		game.load.image('laser', 'assets/Laser.png')
    },

	create: function(){
		this.game.state.start('menu');
	}
};