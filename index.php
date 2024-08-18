<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="css/profile.css" type="text/css" media="screen, projection" />
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/index.js"></script>

</head>

<body>
  <script>
    window.fbAsyncInit = function () {
      FB.init({
        appId: '1454085474849162',
        xfbml: true,
        version: 'v2.2'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>

  <div>
    <button class="bnav" onclick="loadContent('home')" id="bHome">Home</button>
    <button class="bnav" onclick="loadContent('skill')" id="bRes">Skill</button>
    <button class="bnav" onclick="loadContent('project')" id="bProject">Project</button>
    <button class="bnav" onclick="loadContent('contact')" id="bContact">Contact</button>
    <button class="bnav" onclick="loadContent('more')" id="bMore">Comments</button>
  </div>
  <hr>
  <button class="toTop" id="toTop" onclick="goToTop()"><strong>TOP</strong></button>
  <div class="content" id="content">
    <span style="color:transparent">Steve's Website</span>
  </div>
</body>

</html>