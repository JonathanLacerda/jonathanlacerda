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
       // this.tamMenu();
        this.controllerMenu();
    },

    tamMenu(){
        let wTela = $(window).innerWidth();

        $('.menuToggle .menu').css('width', wTela / 2);
    },

    controllerMenu(){
        $('.menuToggle').click(function(){
            $(this).toggleClass('active');
        });
    },

    setup : function(){
        APP.component.Parallax.init();
        this.home = $('.jcl__home');
        this.heightScreen = $(window).innerHeight();
    }
};
