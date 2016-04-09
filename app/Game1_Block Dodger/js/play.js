var play_state = {

	//preloading is already done at this point
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.background = game.add.sprite(0, 0, 'background');

		player = game.add.sprite(230, 180, 'player');
		game.physics.arcade.enable(player);
		player.enableBody = true;
		player.body.collideWorldBounds = true;

		//creates an up, down, left, and right Phaser.Key objects
		cursors = game.input.keyboard.createCursorKeys();

		space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		blockers = game.add.group();
		blockers.enableBody = true;
		blockers.createMultiple(10, 'blocker');
		this.timer = this.game.time.events.loop(1000, this.position_random_blocker, this);

		//keeps track of time lasted
		score = '0';
		score_style = {font: "20px Arial", fill: '#ffd700' };
		score_text = this.game.add.text(5 ,5 , score, score_style);
	},

	add_one_blocker: function(x, y){
		var blocker = blockers.getFirstDead();
		game.physics.arcade.enable(blocker);

		blocker.reset(x, y);

		blocker.body.velocity.y = -250;

		blocker.checkWorldBounds = true;
		blocker.outOfBoundsKill = true;
	},

	position_random_blocker: function(){
		this.add_one_blocker((Math.random()*200), 400);
	},



	update: function(){
		//checks for overlap collision
		this.game.physics.arcade.overlap(player, blockers, collisionHandler, null, this);

		updateScore();

		//controls movement
		if(cursors != null){
			if (cursors.up.isDown){
				player.y -= 5;
			}
			else if (cursors.down.isDown){
				player.y += 5;
			}

			if(cursors.left.isDown){
				player.x -= 5;
			}
			else if (cursors.right.isDown){
				player.x +=5;
			}
		}

		//space bar quits the game
		if(space_key.isDown){
			this.game.state.start('menu');
		}	

		//checks if player collided with a block and quit the game
		function collisionHandler(){
			this.game.time.events.remove(this.timer);
			game.state.start('menu');
		}

		//increment score
		function updateScore(){
			++score;
			score_text.setText(score);
		}
	}	
}