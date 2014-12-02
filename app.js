(function(){

	var app = angular.module('store', []);

	// The controller is attached to (inside) the app
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron', 
			price: 2.95,
			description: '...',
			// Attaches Add to Cart Button when true
			canPurchase: true, 
		}, 
		{
			name: 'Pentagonal Gem', 
			price: 5.95,
			description: '...',
			canPurchase: true,
		}
	];

})();