$(function(){

    // Listen for the ready event for any vimeo video players on the page
    var vimeoPlayers = document.querySelectorAll('iframe'),
        player;

    for (var i = 0, length = vimeoPlayers.length; i < length; i++) {
        player = vimeoPlayers[i];
        $f(player).addEvent('ready', ready);
    }

    /**
     * Utility function for adding an event. Handles the inconsistencies
     * between the W3C method for adding events (addEventListener) and
     * IE's (attachEvent).
     */
    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        }
        else {
            element.attachEvent('on' + eventName, callback);
        }
    }

    /**
     * Called once a vimeo player is loaded and ready to receive
     * commands. You can add events and make api calls only after this
     * function has been called.
     */
    function ready(player_id) {
        // Keep a reference to Froogaloop for this player
        var container = document.getElementById(player_id).parentElement.parentElement,
            froogaloop = $f(player_id),
        /**
         * Sets up the actions for the buttons that will perform simple
         * api calls to Froogaloop (play, pause, etc.). These api methods
         * are actions performed on the player that take no parameters and
         * return no values.
         */
        function setupSimpleButtons() {
            var pauseBtn = buttons.querySelector('.modal-close'),

       

            // Call pause when pause button clicked
            addEvent(pauseBtn, 'click', function() {
                froogaloop.api('pause');
            }, false);


        }

        setupSimpleButtons();
        setupEventListeners();

    }
})();
