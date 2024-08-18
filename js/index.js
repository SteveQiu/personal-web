function loadContent(str) {
    var extension = ".html";
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("content").innerHTML = xmlhttp.responseText;
            FB.XFBML.parse();
        }
    };
    xmlhttp.open("GET", str + extension, true);
    xmlhttp.send();

    return false;
}

function goToTop() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
}

$(document).ready(function () {
    ["#bHome", "#bRes", "#bProject", "#bContact", "#bMore"].forEach(function (ref) {
        $(ref).hover(
            function () {
                $(ref).css("background-color", "#FFD700");
            },
            function () {
                $(ref).css("background-color", "white");
            }
        );
    });

    $("#bHome").click();
});

$(window).scroll(function (event) {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition >= 30) $("#toTop").css("display", "block");
    else $("#toTop").css("display", "none");
});
