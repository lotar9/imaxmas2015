var game = World.game;

function preload()
{
    game.load.spritesheet('button','game/sprites/shared/play_button.png',505,180);
    game.load.image( 'background','game/splashes/img/initial.png' );
}

function create()
{
  	var background = game.add.tileSprite( 0, 0, game.width, game.height, 'background' );
    background.tileScale.y = 0.5;
   	background.tileScale.x = 0.5;

   	var button = game.add.button(
    	game.world.centerX,
    	game.world.centerY +235,
    	'button',
    	World.goToLevel.bind( this, 'Splash1' ),
    	this,
        1,0,1
    );
    button.scale.setTo(0.5,0.5);
    button.anchor.setTo(0.5,0.5);

   	var enter = game.input.keyboard.addKey( Phaser.Keyboard.ENTER );
   	enter.onDown.add( World.goToLevel.bind( this, 'Splash1' ) );
}

World.addState( 'Splash0', { preload: preload, create: create } );
World.goToLevel( 'Splash1' );
