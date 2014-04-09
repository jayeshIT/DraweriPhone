var close_anim = Titanium.UI.createAnimation({
	duration : 400,
	right : Titanium.Platform.displayCaps.platformWidth,
	width : Titanium.Platform.displayCaps.platformWidth
});

Ti.App.MyClosefunction = function() {
	$.third.animate(close_anim, function() {
		$.third.close();
	});
};
var view = Titanium.UI.createView({
	//borderColor : 'black',
	borderWidth : 5,
	backgroundColor : 'red',
	top : 50,
	left : 0,
	right : 0,
	height : 50
});

$.third.add(view);
