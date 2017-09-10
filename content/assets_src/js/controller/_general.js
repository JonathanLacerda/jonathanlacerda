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
        this.controllMenu();
        APP.component.Parallax.init();
        APP.component.Run.init();
    },

    setup : function(){
        this.body = $('body');
        this.home = $('.jcl__home');
        this.heightScreen = $(window).innerHeight();
        this.open = $('#jcl__menu');
        this.menu = $('menu');
    },

    controllMenu: function(){
        var _this = this;

        _this.menu.css('height', _this.heightScreen);

        _this.open.click(function(){
            _this.menu.fadeToggle();
            _this.body.toggleClass('overlay');
            $(this).toggleClass('active');
        });

    },

    controllHeightHome: function() {
        var _this = this;

        _this.home.css('height', _this.heightScreen);

    }
};
