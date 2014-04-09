var third_win = Alloy.createController('third').getView();
var an = false;
$.btntop.addEventListener('click', function(e) {
	if (an == false) {
		$.second.animate({
			left : (Titanium.Platform.displayCaps.platformWidth - 60),
			width : Titanium.Platform.displayCaps.platformWidth,
			duration : 400,
		});
		third_win.open();
		var open_anim = Titanium.UI.createAnimation({
			duration : 400,
			right : 60,
			//left : 0,
			width : (Titanium.Platform.displayCaps.platformWidth - 60)
		});
		third_win.animate(open_anim);
		an = true;
	} else {
		Ti.App.MyClosefunction();
		$.second.animate({
			left : 0,
			width : Titanium.Platform.displayCaps.platformWidth,
			duration : 400,
		});
		an = false;
	}
});
/*
 var ann2 = "false";
 $.btnright.addEventListener('click', function(e) {
 if (ann2 == "false") {
 $.second.animate({
 //right : 260,
 left :-260,
 width : 320,
 duration : 430
 });
 third_win.open();
 var open_anim = Titanium.UI.createAnimation({
 duration : 400,
 left : 60,
 width : 320
 });
 third_win.animate(open_anim);
 ann2 = "true";
 } else {
 Ti.App.MyClosefunction();
 $.second.animate({
 //right : 0,
 left :0,
 width : 320,
 duration : 400,
 });
 ann2 = "false";
 }
 });*/
