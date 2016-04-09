var play_state = {

	//preloading is already done at this point
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);

		space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		this.background = game.add.sprite(0, 0, 'background');

		turret = game.add.sprite(this.game.width / 2, this.game.width / 2, 'turret');
		turret.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(turret);
		turret.enableBody = true;

		killCount = '0';
		killStyle = { font: "20px Arial", fill: "#ff0000" };
		KillCountText = this.game.add.text((this.game.width / 2), (this.game.width / 2) + 50, killCount, killStyle);
		KillCountText.anchor.setTo(0.5, 0.5);

		bonusLevel = '';
		bonusStyle = { font: "20px Arial", fill: "#00ff00" };
		bonusText = this.game.add.text((this.game.width / 2), (this.game.width / 2) - 50, bonusLevel, bonusStyle);
		bonusText.anchor.setTo(0.5, 0.5);

		cooldownModifier = 0;
		lasers = game.add.group();
		lasers.enableBody = true;
		lasers.createMultiple(50, 'laser');
		lasers.setAll('checkWorldBounds', true);
		lasers.setAll('outOfBoundsKill', true);

		cooldown = 0;
		level = 0;

		enemies= game.add.group();
		enemies.enableBody = true;
		enemies.createMultiple(100, 'enemy');
		//this.timer = this.game.time.events.loop(1000, this.add_one_enemy, this);
		game.time.events.add(Phaser.Timer.SECOND * 1, this.add_one_enemy, this);
	},

	add_one_enemy: function(){
		var enemy = enemies.getFirstDead();
		game.physics.arcade.enable(enemy);
		enemy.anchor.setTo(0.5, 0.5);

		theta = Math.random()*6.28;
		
		x = 350 * Math.cos(theta) + this.game.width / 2;
		y = 350 * Math.sin(theta) + this.game.width / 2;
		enemy.reset(x, y);

		game.physics.arcade.moveToObject(enemy, turret, 0, 2500);
		enemy.rotation = game.physics.arcade.angleBetween(enemy, turret) + (3.14/2);
		game.time.events.add(Phaser.Timer.SECOND * ((1000 - (250 * level)) / 1000 ) , this.add_one_enemy, this);
	},

	update: function(){
		//checks for overlap collision
		this.game.physics.arcade.overlap(turret, enemies, turretCollisionHandler, null, this);
		this.game.physics.arcade.overlap(lasers, enemies, killCollisionHandler, null, this);

		//Turret rotation
		turret.rotation = game.physics.arcade.angleToPointer(turret);

		//space bar quits the game
		if(space_key.isDown){
			this.game.state.start('menu');
		}


		if(killCount >= 5){
			cooldownModifier = 250;
			bonusText.setText("*");
			level = 1;
		}
		if(killCount >= 10){
			cooldownModifier = 350;
			bonusText.setText("**");
			level = 2;
		}
		if(killCount >= 20){
			bonusText.setText("!!!");
			level = 2.75;
		}	

		if(game.input.activePointer.isDown){
			fire();
		}


		function fire(){
			if(game.time.now > cooldown && lasers.countDead() > 0){
				cooldown = game.time.now + 500 - cooldownModifier;

				var laser = lasers.getFirstDead();
				laser.anchor.setTo(0.5, 0.5);

				//Resets laser sprite on the barrel itself
				angle = game.physics.arcade.angleToPointer(turret);
				laser.reset(30 *Math.cos(angle) + 250, 30 * Math.sin(angle) + 250);
				laser.rotation = turret.rotation;
				game.physics.arcade.moveToPointer(laser, 500);
			}
		}

		//checks if player collided with a block and quit the game
		function turretCollisionHandler(){
			this.game.time.events.remove(this.timer);
			game.state.start('menu');
		}

		//Checks if a cannonball collides with an enemy
		function killCollisionHandler(laser, enemy){
			laser.kill();
			enemy.kill();
			++killCount;
			KillCountText.setText(killCount);
		}

	}	
}