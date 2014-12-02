(function(){

	var app = angular.module('store', []);

	// The controller is attached to (inside) the app
	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron', 
		price: 2.95,
		description: '...',
	}
})();