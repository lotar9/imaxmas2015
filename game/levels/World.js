/***************************
 * World
 ***************************/
( function( window, Phaser )
{
    function World()
    {
        this.width = Math.min( ( Math.round( window.screen.width * window.devicePixelRatio ) * 0.9 ), 1024 );
        this.height = Math.round( ( this.width / 16 ) * 9 );
        this.scaleCoef = this.width / 1024 / 2; // Retina
        this.totalScore = 0;
        window.trads = {};
        this.loadTrads();
        this.game = new Phaser.Game( this.width, this.height, Phaser.AUTO, "game_frame" );
    }


    World.prototype.loadTrads = function(){
        $.ajax({
            url: "trads.txt",
            dataType: 'json',
            async: false,
            success: function(data) {
                $.each(data[window.languageCode], function(id,trad) {
                    if (id.indexOf('game.') == 0){
                        window.trads[id]=trad;
                    }
                });
            }
        });
    }

    World.prototype.getTrad = function(search){
        if (window.trads[search] == undefined){
            return search;
        }
        return window.trads[search];
    }

    World.prototype.addState = function( name, state )
    {
        this.game.state.add( name, state );
    }

    World.prototype.goToLevel = function( level )
    {
        setTimeout( function()
        {
            this.game.state.start( level );

            // Set game scale mode
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.maxWidth = 1024 * window.devicePixelRatio;
            this.game.scale.maxHeight = 576 * window.devicePixelRatio;
            //this.game.scale.forceLandscape = true;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
        }.bind( this ) );
    }

    window.World = new World;
} )( window, Phaser );

/***************************
 * SCORE
 ***************************/
( function( window, Phaser )
{
    function Score( game )
    {
        this.game      = game;

        this.total     = World.totalScore > 0 ? World.totalScore : 0;
        this.x         = this.game.width - 100;
        this.y         = 10;
        this.scoreText = this.draw();
    }

    Score.prototype.draw = function()
    {
        return this.game.add.text(
            this.x,
            this.y,
            this.total  + ' ',
            { fontSize: '32px', fill: '#FFF', stroke: '#000', strokeThickness: '5' }
        );
    }

    Score.prototype.add = function( value )
    {
        this.total += value;

        this.scoreText.text = this.total  + ' ';
    }

    Score.prototype.sustract = function( value )
    {
        this.total -= value;

        this.scoreText.text = this.total  + ' ';
    }
    Score.prototype.reset = function( )
    {
        this.total = 0;

        this.scoreText.text = ' ';
    }

    window.Score = Score;
} )( window, Phaser, World );

/***************************
 * TIMER
 ***************************/
( function( window, Phaser )
{
    function Timer( game, endCallback, remaining )
    {
        this.game        = game;

        this.remaining   = remaining || 30;
        this.x           = this.game.width / 2 - 40;
        this.y           = 20;
        this.endCallback = endCallback;
        this.timerText   = this.draw();
        this.loop        = this.game.time.events.loop( 1000, this.sustract.bind( this, 1 ) );
    }

    Timer.prototype.draw = function()
    {
        return this.game.add.text(
            this.x,
            this.y,
            this.remaining + ' ',
            { fontSize: '52px', fill: '#FFF', stroke: '#000', strokeThickness: '5' }
        );
    }

    Timer.prototype.sustract = function( time )
    {
        if( this.remaining - time < 0 )
        {
            this.game.time.events.remove( this.loop );
            this.endCallback();
        }
        else
        {
            this.remaining -= time;

            this.timerText.text = this.remaining + ' ';
        }
    }

    window.Timer = Timer;
} )( window, Phaser );
