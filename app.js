(function(){

	var app = angular.module('store', []);

	// The controller is attached to (inside) the app
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron Gem', 
			price: 2.95,
			description: '...',
			images: [
				{
					full: 'dodecahedron-01-full.jpg',
					thumb: 'dodecahedron-01-thumb.jpg'
				},
				{
					full: 'dodecahedron-02-full.jpg',
					thumb: 'dodecahedron-02-thumb.jpg'
				}
			]
		}, 
		{
			name: 'Pentagonal Gem', 
			price: 5.95,
			description: '...',
			canPurchase: true,
		}
	];

})();