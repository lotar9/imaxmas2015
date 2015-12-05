var DEBUG = false;
var SPEED = 690;
var GRAVITY = 600;
var FLAP = 300;
var SPAWN_RATE = 1 / 1.2;
var OPENING = 134;
var CREDITS = 0;
var CREDITS_DEFAULT = 3;

var game,
	gameIsOver = false,
	gameStarted,
    gameOver,
    score,
    bg,
    aldeas,
    fingers,
    aldeasTimer,
    invs,
    gameFinish,
    helicopter,
    fence,
    scoreText,
    instText,
    gameOverText,
    flapSnd,
    scoreSnd,
    hurtSnd,
    basesound,
    jugador,
	municion,
	timeAldea,
	timeFinger,
	tiempoDisparo=0,
	teclas,
	teclaDisparo,
	empieza=false,
    packageIcon,
    packageText,
    scoreCredit,
	contador;
var score = 0;

window.addEventListener( 'load', function()
{
     World.addState( 'Level4', heliGame );
     game = World.game;
} );

var heliGame = function(game){};

heliGame.prototype = {
     preload: function(){
          var assets = {
        image: {
        	background: ["game/sprites/level4/04_fondo.png"],
            fence: ['game/sprites/level4/fence.png'],
            finger: ['game/sprites/level4/Arbol.png']
        },
        audio: {
            //flap: ['/music/level4/flap.wav'],
            scoresound: ['game/music/level4/collect.mp3','game/music/level4/collect.ogg']
            //hurt: ['/music/level4/hurt.wav']
        }
    };
    Object.keys(assets).forEach(function(type) {
        Object.keys(assets[type]).forEach(function(id) {
            game.load[type].apply(game.load, [id].concat(assets[type][id]));
        });
    });
    helicopter = game.load.image("helicopter" , "game/sprites/level4/04_helicoptero.png");
    game.load.image("muni" , "game/sprites/level4/04_paq_ayuda.png");
    aldea = game.load.image("aldea" , "game/sprites/level4/04_aldea.png");
    package = game.load.image("package" , "game/sprites/level4/municion.gif");
    game.load.audio('base', ['game/music/level4/jungle_loop.mp3','game/music/level4/jungle_loop.ogg']);
    game.load.audio('gameoversound', ['game/music/level4/game-over.mp3','game/music/level4/game-over.ogg']);
    game.load.audio('helicoptersound', ['game/music/level4/helicopter.mp3','game/music/level4/helicopter.ogg']);
     },
     create: function(){

    basesound = game.add.audio('base');
    scoresound = game.add.audio('scoresound');
    gameoversound = game.add.audio('gameoversound');
    helicoptersound = game.add.audio('helicoptersound');
    initBackground4();
    scoreCredit = new Score( this.game );
	helicopter = this.game.add.sprite(0.5, 0.5, 'helicopter');
    this.game.physics.enable(helicopter, Phaser.Physics.ARCADE);
    helicopter.scale.setTo(0.2,0.2);
    helicopter.anchor.setTo(0.5,0.5);
    helicopter.body.gravity.y = GRAVITY;
    municion = game.add.group();
	municion.createMultiple(CREDITS,'muni');
	municion.setAll('anchor.x', 0.5);
    municion.setAll('anchor.y', 1);
    municion.enableBody = true;
    municion.physicsBodyType = Phaser.Physics.ARCADE;
   // municion.setAll('checkWorldBounds', true);
   // municion.setAll('outOfBoundsKill', true);
    aldeas = game.add.group();
    fingers = game.add.group();
    // Add invisible thingies
    invs = game.add.group();
    fence = game.add.tileSprite(0, game.height - 32, game.width, 32, 'fence');
    fence.tileScale.setTo(0.5, 0.5);
    this.game.physics.enable(fence, Phaser.Physics.ARCADE);
	fence.body.updateBounds(fence.scale.x, fence.scale.y);
    // Add score text
    scoreText = game.add.text(
        this.game.width / 2,
        this.game.height / 4,
        "",{font: "30px Monospace",fill:"#FFF"}
    );
    scoreText.anchor.setTo(0.5, 0.5);
    // Add instructions text
    instText = game.add.text(
        this.game.width / 2,
        this.game.height - this.game.height / 4,
        "",{font: "30px Monospace",fill:"#FFF"}
    );
    instText.anchor.setTo(0.5, 0.5);
    //Add game over text
    gameOverText = this.game.add.text(
        this.game.width / 2,
        this.game.height / 2,
        ""
    );
    gameOverText.anchor.setTo(0.5, 0.5);
    gameOverText.scale.setTo(2, 2);

          game.physics.startSystem(Phaser.Physics.ARCADE);

          initKeys4();

		reset();

     },
     update: function(){
		 if (gameStarted) {

        var dvy = FLAP + helicopter.body.velocity.y;

        if (
            gameOver ||
            helicopter.angle > 90 ||
            helicopter.angle < -90
        ) {
            helicopter.angle = 90;
            helicopter.animations.stop();
            helicopter.frame = 3;
        } else {
            helicopter.animations.play('fly');
        }
        if (gameOver) {
            if (helicopter.scale.x < 4) {
                helicopter.scale.setTo(
                    helicopter.scale.x * 1.2,
                    helicopter.scale.y * 1.2
                );
            }
            gameOverText.angle = Math.random() * 5 * Math.cos(game.time.now / 100);
        } else {

            game.physics.arcade.overlap(municion, aldeas,function(muni,aldea){
				muni.kill();
            	addScore();
            	if(gameFinish){
					finish();
				}
            },null,this);
            if(game.physics.arcade.collide(helicopter, fingers)){
				if(!gameFinish)
					setGameOver();
            }
            game.physics.arcade.overlap(municion, fence, function(fence,muni){
            	muni.kill();
            	gameoversound.play();
            	if(gameFinish){
					finish();
				}
            }, null ,this);
            game.physics.arcade.overlap(municion, fingers , function(muni,finger){
            	muni.kill();
            	gameoversound.play();
            	if(gameFinish){
					finish();
				}
            }, null , this);
            if (!gameOver && !gameFinish && helicopter.body.bottom >= this.game.world.bounds.bottom) {
                setGameOver();
            }
        }

    } else {
        helicopter.y = (this.game.world.height / 2) + 8 * Math.cos(this.game.time.now / 200);
    }
    if (!gameStarted || gameOver) {
        instText.scale.setTo(
            2 + 0.1 * Math.sin(game.time.now / 100),
            2 + 0.1 * Math.cos(game.time.now / 100)
        );
    }
    scoreText.scale.setTo(
        2 + 0.1 * Math.cos(game.time.now / 100),
        2 + 0.1 * Math.sin(game.time.now / 100)
    );
    if (!gameOver) {
        fence.tilePosition.x -= game.time.physicsElapsed * SPEED;
        background.tilePosition.x -= game.time.physicsElapsed * SPEED;
    }

     }
}
function finish(){
		helicopter.body.allowGravity = false;
		helicopter.body.angle = 90;
		helicopter.body.velocity.x+=300;
		helicopter.body.allowGravity = false;
        World.totalScore = scoreCredit.total;
        basesound.stop();
        helicoptersound.stop();
		top.endGame(World.totalScore);
		World.goToLevel( 'Splash5' );
}
function setGameOver() {
	reset();
}

function flap() {
    if (!gameStarted) {
        start();
    }
    if (!gameOver) {
		if(helicopter.body.y>0)
			helicopter.body.velocity.y = -FLAP;
    }
}
function tirar () {
	if(!gameStarted || gameFinish)return;
	contador++;
    packageText.text = ( ( World.totalScore / 10 ) - contador ) + ' ';
    if(contador==CREDITS){
    	gameFinish=true;
    	//reset();
    }
    if(contador<=CREDITS){
		//municion = this.game.add.sprite(helicopter.x, helicopter.y, 'ayuda');
		var muni = municion.getFirstDead();
		//muni = municion.getFirstExists(false);
		muni.reset(helicopter.x, helicopter.y);
		this.game.physics.enable(muni, Phaser.Physics.ARCADE);
		muni.scale.setTo(0.5,0.5);
		muni.body.velocity.setTo(20, 200);
		muni.body.bounce.set(0.1);
		muni.body.gravity.set(0, 100);
	}
};
function start() {
    helicopter.body.allowGravity = true;
    //scoreCredit.total = World.totalScore;
    //scoreText.setText(score);
    instText.renderable = false;
    scoreText.renderable = false;
    gameStarted = true;
    if(!timeAldea)
    timeAldea = this.game.time.events.loop(game.rnd.integerInRange(500, 3000), spawnaldea,this);
    if(!timeFinger)
    timeFinger = this.game.time.events.loop(game.rnd.integerInRange(500, 3000), spawnfinger,this);
}

function drawPackages()
{
    if( packageIcon )
    {
        packageIcon.destroy();
    }

    packageIcon = this.game.add.sprite( 40, 15, "package" );
    packageIcon.scale.x = 0.6;
    packageIcon.scale.y = 0.6;

    if( packageText )
    {
        packageText.destroy();
    }

    packageText = this.game.add.text(
        80,
        12,
        World.totalScore / 10 + " ",
        { fontSize: '28px', fill: '#FFF', stroke: '#000', strokeThickness: '5' }
    );
}

function addScore() {
    score += 1;
    scoresound.play();
    scoreCredit.add( 10 );
    //scoreText.setText(score);
}
function spawnfinger() {

    finger = fingers.create(
        this.game.width,
        this.game.height,
        'finger'
    );
    this.game.physics.enable(finger, Phaser.Physics.ARCADE);
    finger.body.allowGravity = false;
    fingerYrandom =  game.rnd.integerInRange(0,1);
	//fingerY += (fingerYrandom ? -o() + game.rnd.integerInRange(0,100) : (o()) /4) + game.rnd.integerInRange(0,100) ;
	finger.scale.setTo(0.3,0.3);
	finger.body.width = finger.width;
	finger.reset(this.game.width, (this.game.height - game.rnd.integerInRange(finger.body.halfHeight/3,finger.body.halfHeight/2)) );
	finger.body.updateBounds(finger.scale.x, finger.scale.y);
	finger.body.immovable = true;
    //aldea.body.offset.y = flipped ? -aldea.body.height * 0 : 0;

    // Move to the left
    finger.body.velocity.x -=  (game.time.physicsElapsed*50) * SPEED;
	this.game.time.events.remove(timeFinger);
	timeFinger = this.game.time.events.loop(game.rnd.integerInRange(500, 3000), spawnfinger,this);

    return finger;
}
function o() {
    return OPENING + 60 * ((score > 50 ? 50 : 50 - score) / 50);
}
function spawnaldea() {

    aldea = aldeas.create(
        this.game.width,
        this.game.height -100,
        'aldea'
    );
    this.game.physics.enable(aldea, Phaser.Physics.ARCADE);
    aldea.body.allowGravity = false;
	aldea.reset(this.game.width, this.game.height - aldea.body.halfHeight - fence.body.halfHeight);
    aldea.scale.setTo(0.5,0.5);
    aldea.body.updateBounds(aldea.scale.x, aldea.scale.y);
    //aldea.body.offset.y = flipped ? -aldea.body.height * 0 : 0;

    // Move to the left
    aldea.body.velocity.x -=  (game.time.physicsElapsed*50) * SPEED;
	this.game.time.events.remove(timeAldea);
	timeAldea = this.game.time.events.loop(game.rnd.integerInRange(500, 3000), spawnaldea,this);

    return aldea;
}
function initKeys4(){
     key1 = game.input.keyboard.addKey(Phaser.Keyboard.UP);
     key1.onDown.add(flap);

     key2 = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
     key2.onDown.add(tirar);
     game.input.onTap.add( function( event )
     {
       if( Math.floor( event.x / ( game.width / 2 ) ) === 0 )
       {
			tirar();
       }

       if( Math.floor( event.x / ( game.width / 2 ) ) === 1 )
       {
			flap();
       }
   });
}


function initBackground4(){
	//helicopter = game.add.sprite(0.5, 0.5, 200,200,'helicopter');
    background = game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
    background.tileScale.x = 0.5;
    background.tileScale.y = 0.5;
}

function render() {

    if (DEBUG) {
        game.debug.body(helicopter);

        aldeas.forEachAlive(function(aldea) {
            this.game.debug.body(aldea);
        });
         fingers.forEachAlive(function(finger) {
            this.game.debug.body(finger);
        });
        invs.forEach(function(inv) {
            this.game.debug.body(inv);
        });
    }
}
function reset() {
    gameStarted = false;
    gameOver = false;
    score = 0;
    scoreCredit.reset();
    CREDITS = World.totalScore / 10;
    if( CREDITS <= 0 ){
        CREDITS = CREDITS_DEFAULT;
        World.totalScore = CREDITS_DEFAULT * 10;
    }
    municion.createMultiple(CREDITS,'muni');
    contador = 0;
    gameFinish = false;
    scoreText.setText(World.getTrad("game.level4Start"));
		var device = 'touch';
		if ((Phaser.Device.desktop && (!(Phaser.Device.touch)))){
			device = 'desktop';
		}
    instText.setText(World.getTrad("game."+device+".level4PushUp"));
    instText.renderable=true;
    helicopter.body.angle.y = 500;
    helicopter.reset((this.game.width * World.scaleCoef)/2, this.game.height * World.scaleCoef);
    helicopter.scale.setTo(0.5, 0.5);
    helicopter.animations.play('fly',4,true);
    fingers.removeAll();
    aldeas.removeAll();
    invs.removeAll();
    basesound.loopFull(1);
    helicoptersound.loopFull(1);
    helicoptersound.volume = 0.2;
    //basesound.onLoop.add(hasLooped, this);
    //
    drawPackages();
}
