var play_state = {	

	//preloading is already done at this point
	create: function() {

		game.physics.startSystem(Phaser.Physics.ARCADE);
		gravityVector = new Phaser.Point(0, 100);
		game.physics.arcade.gravity = gravityVector;
		//Control keys
		//Space -> used for attacking forward
		space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		//Cursors // left/right -> movement // up -> jump
		cursors = game.input.keyboard.createCursorKeys();

		//Background and level sprites
		this.background = game.add.sprite(0, 0, 'background');
		ground = game.add.sprite(0, game.world.height - 50, 'ground');
		ground.enableBody = true;
		ground.gravity = false;

		//Platforms
		platforms = game.add.group();
		platforms.createMultiple(3, 'platform');
		game.physics.arcade.enable(platforms);
		platforms.enableBody = true;
		platforms.gravity = false;


		//TODO Collide with goblins and player
		//Place platforms
		platform1 = platforms.getFirstDead();
		platform1.anchor.setTo(0.5, 0.5);
		platform1.reset(game.world.width / 2 - 200, game.world.height / 2);
		platform2 = platforms.getFirstDead();
		platform2.anchor.setTo(0.5, 0.5);
		platform2.reset(game.world.width / 2, game.world.height / 2);
		platform3 = platforms.getFirstDead();
		platform3.anchor.setTo(0.5, 0.5);
		platform3.reset(game.world.width / 2 + 200, game.world.height / 2);

		//Player -> knight
		player = game.add.sprite(game.world.width / 2, 100, 'knight');
		player.health = 3;
		player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(player);
		player.enableBody = true;
		player.body.checkWorldBounds = true;

		//Keep track of sword position and stay under player 
		//TODO Check knight and sword are in correct relative positions always
		//TODO How to make sure sword stays with the knight? Possibly use Tween's to have sword mimic tight gravity on knight
		//TODO Hard code 1:1 distance between sword and knight
		sword = game.add.sprite(game.world.width / 2, 100 + 20, 'sword');
		sword.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(sword);
		sword.body.checkWorldBounds = true;

		//TODO Possibly add AI to cause goblins to chase AND attack or just leave at chase
		//Enemies -> Goblins
		goblins = game.add.group();
		goblins.createMultiple(10, 'goblin');
		goblins.health = 1;
		goblins.enableBody = true;
		goblins.checkWorldBounds = true;

		spawning = true;
		//TODO Create random spawn points for enemies upon entering a room
		//Platform 1, 2, 3, left, and right wall spawn locations
		//check for player location and spawn enemies away from player
		timer = game.time.create(3000, false);
		game.time.events.add(Phaser.Timer.SECOND * 3, this.spawnGoblins, this);
	},

	//TODO decide on rooms or continuously spawning enemies in single room
	//TODO goblin AI -> follow player (only if on same plane?)
	spawnGoblins: function(){
		spawning = true;
		goblin = goblins.getFirstDead();
		goblin.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(goblin);
		spawning = false;
	},

	update: function() {
		//checks for overlap collision
		this.game.physics.arcade.overlap(player, goblins, playerGoblinCollisionHandler, null, this);
		this.game.physics.arcade.overlap(sword, goblins, killCollisionHandler, null, this);

		//Spawn goblins
		if(!spawning && (goblins.countLiving() < 1)){ //Check if all are dead and currently not spawning more
			this.spawnGoblins;
		}

		//space bar attacks forward
		//TODO
			//Maybe use tween to control distance from player
			//Maybe just use a rotation for attack, anchored at center of player
		if(space_key.isDown){
			//Maybe sine wave for distance in tween
			swordTw = game.add.tween(sword).to({x: 0}, 100, Phaser.Easing.Linear.None, true, 0, 0, false);
			swordTw.yoyo(true);
			swordTw.start();
			//game.physics.arcade.accelerateToXY(sword, sword.x + 25, sword.y, 150, 200, 0);
			if(game.physics.arcade.distanceBetween(sword, player) > 25){//TODO Check distance from player		
			}
		}

		//TODO movement Controls
		//TODO Decide on velocity motion or 1:1 movement for knight and sword
		if(cursors.left.isDown){ //move left
			game.physics.arcade.accelerateToXY(player, player.x - 100, player.y,150, 200, 0);
			game.physics.arcade.accelerateToXY(sword, sword.x - 100, sword.y,150, 200, 0);
		}
		else if(cursors.right.isDown){ // move right
			game.physics.arcade.accelerateToXY(player, player.x + 100, player.y, 150, 200, 0);
			game.physics.arcade.accelerateToXY(sword, sword.x + 100, sword.y, 150, 200, 0);
		}

		if(cursors.up.isDown){ // jump - Maybe use jump function, maybe add up impulse
			//TODO maybe use tween(sine wave) to control up veloctiy
		}

		//checks if a goblin hits the player
		function playerGoblinCollisionHandler(player, goblin){
			//Decrease player health by amount
			player.damage(1);
			
			//red blood emitter for player health
			bloodEmitter = game.add.emitter(player.x, player.y, 10);
			bloodEmitter.makeParticles('bloodParticle');
			bloodEmitter.explode(500, 5);
			bloodtw = game.add.tween(bloodEmitter).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0, 0, false);
			bloodtw.start();

			//Push back
			if(player.x < goblin.x){	//<- player X goblin ->
				game.physics.arcade.moveToXY(player, player.x - 20, player.y, 100, 0.25);
				game.physics.arcade.moveToXY(goblin, goblin.x + 20, goblin.y, 100, 0.25);
			}
			else{	//<- goblin X player ->	
				game.physics.arcade.moveToXY(player, player.x + 20, player.y, 100, 0.25);
				game.physics.arcade.moveToXY(goblin, goblin.x - 20, goblin.y, 100, 0.25);
			}

			if(!player.alive){ //Gameover screen
				//Print game over message
				//wait for a few seconds

				game.state.start('menu');
			}
		}

		//Checks if player hits goblin with sword
		function killCollisionHandler(sword, goblin){
			//Decrease goblin health
			goblin.damage(1);

			goblinBloodEmitter = game.add.emitter(goblin.x, goblin.y, 10);
			goblinBloodEmitter.makeParticles('goblinBloodParticle');
			
			//TODO Modify emitter time/particles
			goblinBloodEmitter.explode(1000, 5);
			goblinBloodtw = game.add.tween(goblinBloodEmitter).to({alpha: 0}, 700, Phaser.Easing.Linear.None, true, 0, 0, false);
			goblinBloodtw.start();
		}

	}	
}