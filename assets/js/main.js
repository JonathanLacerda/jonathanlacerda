var jonathan = {
	init: function(){
		this.setup();
		this.start();
		this.events();
	},
	setup: function(){

	},
	start: function(){
		this.letterEfects();
	},
	letterEfects: function(){
		var _this = this;

		$('.jcl__slide').textSlider({
			timeout: 3500,
			slideTime: 100,
			loop: 1
		});
	},
	events: function(){

	}
}

$(document).ready(function(){
	jonathan.init();
});

