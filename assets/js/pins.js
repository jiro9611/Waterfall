/**
 * Loading the pins
 */


var loadPins = (function() {

	var pinData = '{"pinData": [{"pinID":1, "pinImg":"http://www.zastavki.com/pictures/originals/2013/Games_Picture_of_StarCraft_042721_.jpg","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":2, "pinImg":"","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":3, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":4, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":5, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. mauris suscipit."}, {"pinID":6, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"faucibus suscipit. nunc convallis quis aliquam mauris suscipit."}, {"pinID":1, "pinImg":"http://www.zastavki.com/pictures/originals/2013/Games_Picture_of_StarCraft_042721_.jpg","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":2, "pinImg":"","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":3, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":4, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":5, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. mauris suscipit."}, {"pinID":6, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"faucibus suscipit. nunc convallis quis aliquam mauris suscipit."}, {"pinID":1, "pinImg":"http://www.zastavki.com/pictures/originals/2013/Games_Picture_of_StarCraft_042721_.jpg","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":2, "pinImg":"","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":3, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":4, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":5, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. mauris suscipit."}, {"pinID":6, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"faucibus suscipit. nunc convallis quis aliquam mauris suscipit."}, {"pinID":1, "pinImg":"http://www.zastavki.com/pictures/originals/2013/Games_Picture_of_StarCraft_042721_.jpg","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":2, "pinImg":"","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":3, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":4, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. Suspendisse rutrum turpis quis nunc convallis quis aliquam mauris suscipit."}, {"pinID":5, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"Nullam eget lectus augue. Donec eu sem sit amet ligula faucibus suscipit. mauris suscipit."}, {"pinID":6, "pinImg":"http://cssdeck.com/uploads/media/items/1/1swi3Qy.png","pinDetail":"https://jiro9611.com/check1.html","describe":"faucibus suscipit. nunc convallis quis aliquam mauris suscipit."}]}';
	var pinObj = JSON.parse(pinData);

	return pinObj;


})();

/**
 * Display the pins
 */

// see design pattern p.97
// IIFE p.91
var displayPins = (function(getPins) {

	//WAY1
	// var pinCount = getPins.pinData.length;

	// for(var i = 0; i < pinCount; i++) {
	// 	console.log(getPins.pinData[i].pinID);
	// 	console.log(getPins.pinData[i].pinImg);
	// 	console.log(getPins.pinData[i].pinDetail);
	// 	console.log(getPins.pinData[i].describe);
	// }

	//WAY2
	var j = 0;
	//這裡改用.each這個函式來取出JData裡的物件
	$.each(getPins.pinData, function() {
	  //呼叫方式也稍微改變了一下，意思等同於上述的的JData[i]["idx_Key"]
	  $("#columns").append("<div class='pin' id='pinID_" + getPins.pinData[j].pinID + "'>" +
	                          "<img class='pin_img' src='" + getPins.pinData[j].pinImg    + "'/>" +
	                          // "<td>" + getPins.pinData[j].pinDetail + "</td>" +
	                          "<p class='describe'>" + getPins.pinData[j].describe + "</p>" +
	                          "</div>");
	  j++;
	});

});

			$( document ).ready(function() {
				displayPins(loadPins);
			});