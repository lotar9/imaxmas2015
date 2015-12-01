var game = World.game;

function preload()
{
    game.load.image( 'background','game/splashes/img/final.png' );
    game.load.spritesheet('button','game/sprites/shared/ok_button.png',505,180);
}

function endClick(){
    top.exitGame();
    World.goToLevel('Splash1' );
}

function create()
{
	var background = game.add.tileSprite( 0, 0, game.width, game.height, 'background' );
    background.tileScale.y = 0.5;
   	background.tileScale.x = 0.5;

    var button = game.add.button(
        game.world.centerX,
    	game.world.centerY+135,
    	'button',
    	endClick,
    	this,
        1,0,1
    );
    button.scale.setTo(0.5,0.5);
    button.anchor.setTo(0.5,0.5);

    var text2 = game.add.text(
        0,
        225,
        World.getTrad('game.youDelivered') + World.totalScore + " Kg de ayuda ",
        { fontSize: '42px', fill: '#FFF', stroke: '#000', strokeThickness: '5' }
    );
    text2.x = game.world.centerX - text2.width / 2;


    var enter = game.input.keyboard.addKey( Phaser.Keyboard.ENTER );
    enter.onDown.add( endClick,this );
}

World.addState( 'Splash5', { preload: preload, create: create } );
