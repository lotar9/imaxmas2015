var game = World.game;

function preload()
{
    game.load.image( 'background','/game/sprites/level4/04_fondo.png' );
    game.load.image( 'button','/game/sprites/shared/ok_button.gif' );
}

function create()
{
	var background = game.add.tileSprite( 0, 0, game.width, game.height, 'background' );
    background.tileScale.y = 0.5;
   	background.tileScale.x = 0.5;

    var button = game.add.button( 
        game.world.centerX - game.cache.getImage( "button" ).width / 2, 
        game.world.centerY - game.cache.getImage( "button" ).height / 2 + 150, 
        'button', 
        top.endGame.bind( this, World.totalScore ), 
        this 
    );

   	var text = game.add.text( 
        0, 
        150, 
        "Enhorabuena! ", 
        { fontSize: '52px', fill: '#FFF', stroke: '#000', strokeThickness: '5' } 
    );
    text.x = game.world.centerX - text.width / 2;

    var text2 = game.add.text( 
        0, 
        225, 
        "Has repartido " + World.totalScore + " Kg de ayuda ", 
        { fontSize: '42px', fill: '#FFF', stroke: '#000', strokeThickness: '5' } 
    );
    text2.x = game.world.centerX - text2.width / 2;

    var enter = game.input.keyboard.addKey( Phaser.Keyboard.ENTER );
    enter.onDown.add( top.endGame.bind( this, World.totalScore ) );
}

World.addState( 'Splash5', { preload: preload, create: create } );
World.goToLevel( 'Splash5' );
