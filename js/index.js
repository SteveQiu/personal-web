function loadContent(str)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    document.getElementById("content").innerHTML=xmlhttp.responseText;
      FB.XFBML.parse();
	    }
	}
	xmlhttp.open("GET", str, true);
	xmlhttp.send();

return false;
}

function goToTop(){
	$('html, body').animate({ scrollTop: 0 }, 'fast');
}

$(document).ready(function(){
  $("#bHome").hover(function(){
    $("#bHome").css("background-color","#FFD700");
    },function(){
    $("#bHome").css("background-color","white");
  });
});

$(document).ready(function(){
  $("#bRes").hover(function(){
    $("#bRes").css("background-color","#FFD700");
    },function(){
    $("#bRes").css("background-color","white");
  });
});

$(document).ready(function(){
  $("#bProject").hover(function(){
    $("#bProject").css("background-color","#FFD700");
    },function(){
    $("#bProject").css("background-color","white");
  });
});

$(document).ready(function(){
  $("#bContact").hover(function(){
    $("#bContact").css("background-color","#FFD700");
    },function(){
    $("#bContact").css("background-color","white");
  });
});

$(document).ready(function(){
  $("#bMore").hover(function(){
    $("#bMore").css("background-color","#FFD700");
    },function(){
    $("#bMore").css("background-color","white");
  });
});

$(window).scroll(function (event) {
	var scrollPosition = $(window).scrollTop();
	if(scrollPosition >= 30)
		$("#toTop").css("display","block");
	else
		$("#toTop").css("display","none");	
});
