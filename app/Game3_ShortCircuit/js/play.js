var play_state = {
	

	//preloading is already done at this point
	create: function() {
		currentScore = 0;
		speedMultiplier = 1.0;
		spawnModifier = 0;
		game.physics.startSystem(Phaser.Physics.ARCADE);

		

		//Control keys
		space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		cursors = game.input.keyboard.createCursorKeys();

		//Sprites
		this.background = game.add.sprite(0, 0, 'background');


		circuit = game.add.sprite(250, 250 , 'circuit');
		circuit.anchor.x = 0.5;
		circuit.anchor.y = 0.5;
		game.physics.arcade.enable(circuit);
		circuit.enableBody = true;

		zap = game.add.sprite(0, 0, 'zap');
		zap.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(zap);
		zap.enableBody = true;
		zap.checkWorldBounds = true;
		zap.outOfBoundsKill = true;
		zap.kill();


		bolts= game.add.group();
		bolts.enableBody = true;
		bolts.createMultiple(30, 'bolt');
		game.time.events.add(Phaser.Timer.SECOND * 3, this.add_one_enemy, this);

		//ScoreBoard
		highScoreText = this.game.add.text(50, 75, "High Score: " + highScore, scoreStyle);
		scoreText = this.game.add.text(50, 95, "Score: " + currentScore, scoreStyle);
	},

	add_one_enemy: function(){
		game.time.events.add(Phaser.Timer.SECOND * (2 - spawnModifier), this.add_one_enemy, this);
		bolt = bolts.getFirstDead();
		bolt.scale.setTo(0.75, 0.75)
		bolt.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(bolt);

		x = Math.random()*10;
		if(x < 2.5){//left
			bolt.reset(20, 250);
			bolt.angle = 0;
			bolt.body.velocity.x = 100 * speedMultiplier;
		}
		else if(x < 5){//top
			bolt.reset(250,20);
			bolt.angle = 90;
			bolt.body.velocity.y = 100 * speedMultiplier;
		}
		else if(x < 7.5){//right
			bolt.reset(480, 250);
			bolt.angle = 0;
			bolt.body.velocity.x = -100 * speedMultiplier;
		}
		else{//bottom
			bolt.reset(250, 480);
			bolt.angle = 90;
			bolt.body.velocity.y = -100 * speedMultiplier;
		}
	},

	update: function(){
		//checks for overlap collision
		this.game.physics.arcade.overlap(circuit, bolts, circuitCollisionHandler, null, this);
		this.game.physics.arcade.overlap(zap, bolts, killCollisionHandler, null, this);

		//space bar quits the game
		if(space_key.isDown){
			this.game.state.start('menu');
		}

		//Zap Shot
		if(zap.alive != true){
			if(cursors.up.isDown){
				zap.reset(250,235);
				zap.angle = 90;
				zap.body.velocity.y = -200;
			}
			else if(cursors.down.isDown){
				zap.reset(250,265);
				zap.angle = 90;
				zap.body.velocity.y = 200;
			}
			else if(cursors.left.isDown){
				zap.reset(235,250);
				zap.angle = 0;
				zap.body.velocity.x = -200;
			}
			else if(cursors.right.isDown){
				zap.reset(265,250);
				zap.angle = 0;
				zap.body.velocity.x = 200;
			}
		}
		else if (zap.x == 20){
			zap.kill();
		}

		
		//checks if a bolt reaches the circuit
		function circuitCollisionHandler(circuit, bolt){
			this.game.time.events.remove(this.timer);
			game.state.start('menu');
		}

		//Checks if a zap collides with a bolt
		function killCollisionHandler(zap, bolt){
			bolt.kill();
			zap.kill();
			cubeEmitter = game.add.emitter(bolt.x, bolt.y, 10);
			cubeEmitter.makeParticles('cube');
			cubeEmitter.explode(1000, 5);
			tw = game.add.tween(cubeEmitter).to({alpha: 0}, 700, Phaser.Easing.Linear.None, true, 0, 0, false);
			tw.start();
			if(speedMultiplier < 4.0){
				speedMultiplier = speedMultiplier + 0.05;
			}
			if(spawnModifier <  1.6){
				spawnModifier = spawnModifier + 0.1;
			}
			++currentScore;
			scoreText.setText("Score: " + currentScore);
			if(currentScore > highScore){
				highScoreText.setText("High Score: " + currentScore);
			}
		}

	}	
}