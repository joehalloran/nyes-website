$(function(){

    // Listen for the ready event for any vimeo video players on the page
    var vimeoPlayers = document.querySelectorAll('iframe'),
        player;
        
    for (var i = 0, length = vimeoPlayers.length; i < length; i++) {
        player = vimeoPlayers[i];
        $f(player).addEvent('ready', ready);
    }
    /**
     * Called once a vimeo player is loaded and ready to receive
     * commands.
     */
    function ready(player_id) {
        // Keep a reference to Froogaloop for this player
        var container = document.getElementById(player_id).parentElement.parentElement,
            froogaloop = $f(player_id);
        /**
         * Sets up the actions for the buttons that will perform simple
         * api calls to Froogaloop.
         */
        function setupPauseButton() {
        	// Setup pause button
            var $pauseBtn = $('.close-modal');

            // Call pause when pause button clicked
            $pauseBtn.click( function() {
                froogaloop.api('pause');
            });
        }
        setupPauseButton();
    }
});
