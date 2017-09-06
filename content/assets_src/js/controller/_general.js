/*
|--------------------------------------------------------------------------
| General
|--------------------------------------------------------------------------
*/

APP.controller.General = {

    init: function (){

        this.setup();
        this.mostrarTexto();

    },

    setup : function (){
        APP.component.Parallax.init();

        this.titulo = $('.app-title');


        //$('body').hide();

    },

    mostrarTexto: function(){

        var titulo = this.titulo.innerText;
        var texto = "Você está na página: " + titulo + ".";

        console.log(texto);

    }

};
