var game = World.game;

function preload()
{
    game.load.spritesheet('button','game/sprites/shared/play_button.png',505,180);
    game.load.image( 'background','game/splashes/img/village.png' );
}

function create()
{
	var background = game.add.tileSprite( 0, 0, game.width, game.height, 'background' );
    background.tileScale.y = 0.5;
   	background.tileScale.x = 0.5;

    var button = game.add.button(
        game.world.centerX,
    	game.world.centerY+20,
    	'button',
    	World.goToLevel.bind( this, 'Level4' ),
    	this,
        1,0,1
    );
    button.scale.setTo(0.5,0.5);
    button.anchor.setTo(0.5,0.5);



    var text2 = game.add.text(
        0,
        225,
        World.getTrad('game.splash4Text'),
        { fontSize: '42px', fill: '#FFF', stroke: '#000', strokeThickness: '5' }
    );
    text2.x = game.world.centerX - text2.width / 2;

   	var enter = game.input.keyboard.addKey( Phaser.Keyboard.ENTER );
   	enter.onDown.add( World.goToLevel.bind( this, 'Level4' ) );
}

World.addState( 'Splash4', { preload: preload, create: create } );
