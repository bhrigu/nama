$(document).ready(function(){
    $(".block .title").on("click", function(){
        var el  = $(this), content = el.next(".item");

        if(content.hasClass("open")){
            content.removeClass("open")
        }else{
            content.addClass("open")
        }
    })


    document.getElementById('audiobutton').onclick = function()
  	{
        var audio = document.getElementById('audio');
        var au = $("#audio");
        if(au.hasClass("play")){
          audio.pause();
        au.removeClass("play");
            }
          else{
        au.addClass("play");
            audio.play();
    }
    }



})



