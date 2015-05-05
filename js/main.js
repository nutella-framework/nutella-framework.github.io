$(document).ready(function(){

    // Fetch nutella version from Github as a JSONP request
    $.ajax({
        url: "https://api.github.com/repos/nutella-framework/nutella_framework/contents/VERSION",
        jsonp: "callback",
        dataType: "jsonp",
        success: function( response ) {
            var s = response.data.contents
            $('#nutella_version').text(atob(s.substring(0, s.length - 1)));
        }
    });
});
