// Initialize Phaser, and creates a 500x400px game
var game = new Phaser.Game(500, 400, Phaser.AUTO, 'game_div');

var score = 0;
var high_score = 0;

// define all the states
game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);

//start with load
game.state.start('load'); 