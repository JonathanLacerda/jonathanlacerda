/*
|--------------------------------------------------------------------------
| General
|--------------------------------------------------------------------------
*/

APP.controller.General = {

    init: function(){
        this.setup();
        this.start();
    },

    start: function(){
        this.controllHeightHome();
    },

    setup : function(){
        APP.component.Parallax.init();
        this.home = $('.jcl__home');
        this.heightScreen = $(window).innerHeight();
    },

    controllHeightHome: function() {
        var _this = this;
        
        _this.home.css('height', _this.heightScreen);

    }
};
