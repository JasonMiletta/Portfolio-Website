// Initialize Phaser, and creates a 500x400px game
var game = new Phaser.Game(500, 500, Phaser.AUTO, 'game_div');

var currentScore = 0;
var highScore = 0;

// define all the states
game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);

//start with load
game.state.start('load'); 