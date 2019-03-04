window.fbAsyncInit = function () {
  FB.init({
    appId: '667808613662463',
    cookie: true,
    xfbml: true,
    version: 'v3.2'
  });

  FB.AppEvents.logPageView();

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
      FB.getLoginStatus(function (response) {
        console.log(response.authResponse.accessToken);




        function httpGetAsync(theUrl) {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
              console.log(JSON.parse(xmlHttp.responseText));
              let userdata = {};
              userdata.name = JSON.parse(xmlHttp.responseText).name;
              userdata.email = JSON.parse(xmlHttp.responseText).email;
              userdata.picture = JSON.parse(xmlHttp.responseText).picture.data.url;
              console.log(userdata);
              document.cookie = userdata = `${JSON.stringify(userdata)}`
            }
          }
          xmlHttp.open("GET", theUrl, true); // true for asynchronous
          xmlHttp.send();
        }

        let URL =
          `https://graph.facebook.com/v3.2/me?fields=id,name,picture.type(large),email&access_token=${response.authResponse.accessToken}`
        httpGetAsync(URL)






      });
      // window.location.href = `./member.html?isLogin=true`;
    } else {
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