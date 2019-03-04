window.fbAsyncInit = function () {
  FB.init({
    appId: '667808613662463',
    cookie: true,
    xfbml: true,
    version: 'v3.2'
  });

  FB.AppEvents.logPageView();

  FB.getLoginStatus(function (response) {
    console.log(response);
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function checkConnected() {
  FB.getLoginStatus(function (response) {
    if (response.status === 'connected') {
      window.location.href = `./member.html?isLogin=true`;
    } else {
      console.log(123);
      fbLogin();
    }
  });
}

function fbLogin() {
  FB.login(function (response) {
    // Handle the response object, like in statusChangeCallback() in our demo
    // code.
    console.log('fbLogin', response.status);
  });
}