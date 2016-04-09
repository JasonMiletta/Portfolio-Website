var load_state = {

	preload: function(){
		game.load.image('background', 'assets/BlueBackground.png');
		game.load.image('ground', 'assets/Ground.png');
		game.load.image('platform', 'assets/Platform.png');
		game.load.image('knight', 'assets/Knight.png');
		game.load.image('sword', 'assets/Sword.png');
		game.load.image('goblin', 'assets/Goblin.png');
		game.load.image('bloodParticle', 'assets/Blood.png');
		game.load.image('goblinBloodParticle', 'assets/GoblinBlood.png');
    },

	create: function(){
		this.game.state.start('menu');
	}
};