/*
	Google Plus Sign In Logic
	by Josue Basurto
*/

//Login lyfecycle
function signinCallback(authResult) {
    if (authResult.status.google_logged_in) {

        //Logged in!
        console.log('User Logged in');

        gapi.client.load('plus', 'v1', function () {
            var request = gapi.client.plus.people.get({ 'userId': 'me' });
            request.execute(function (resp) {
			 fillInfo(resp);
            });
        });

    } else {
	   //Didnt log in
        var state = 'Sign-in state: ' + authResult['error'];
        console.log(state);
    }
}

//Fill Info for user
function fillInfo(resp){
	console.log('Hola:' + resp.displayName);
	$("#signinButton").fadeOut("fast", function () {});
	$("#badgeImage").attr('src',resp.image.url)	
	$("#badgeContent").fadeIn("slow", function () {});
}

//Google Code for Google Plus Sign In
(function () {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/client:plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();