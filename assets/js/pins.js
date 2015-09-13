/**
 * Loading the pins
 */
var loadPins = (function() {

	var pinData = '{"pinData":[
						{"pinID":1, "pin_img":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png",
						 "describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula
						faucibus suscipit. Suspendisse rutrum turpis quis nunc
						convallis quis aliquam mauris suscipit."},
						{"pinID":2, "pin_img":"http://cssdeck.com/uploads/media/items/8/8kEc1hS.png", "describe":"Donec a fermentum nisi. Integer dolor est, commodo ut
						sagittis vitae, egestas at augue."},
						{"pinID":3, "pin_img":"http://cssdeck.com/uploads/media/items/6/6f3nXse.png", "describe":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed feugiat consectetur pellentesque."}]}';

	var pinObj = JSON.parse(pinData);

	return pinObj;

})();

/**
 * Display the pins
 */
 var displayPins = (funtion(){

 })(loadPins());

