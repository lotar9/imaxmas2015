var game = World.game;

function preload()
{
    game.load.spritesheet('button','game/sprites/shared/play_button.png',505,180);
    game.load.image( 'background','game/splashes/img/sea.png' );
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
    	World.goToLevel.bind( this, 'Level2' ),
    	this,
        1,0,1
    );
    button.scale.setTo(0.5,0.5);
    button.anchor.setTo(0.5,0.5);

    World.addLevelTitle(2);
    World.addHelp(2);

    /*
    var text = this.game.add.text(
      225,
      430,
      World.getTrad('game.kgCollected')+" "+World.totalScore+" kgs.",
      { font: '36px Monospace', fill: '#FFF',align:"center", wordWrap:true,wordWrapWidth:400 }
    );
    text.anchor.set(0.5);
    */

    //text3.x = game.world.centerX - (text3.width /2);
   	var enter = game.input.keyboard.addKey( Phaser.Keyboard.ENTER );
   	enter.onDown.add( World.goToLevel.bind( this, 'Level2' ) );
}

World.addState( 'Splash2', { preload: preload, create: create } );
