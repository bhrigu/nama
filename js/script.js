$(document).ready(function(){
    $(".block .title").on("click", function(){
        var el  = $(this), content = el.next(".item");

        if(content.hasClass("open")){
            content.removeClass("open")
        }else{
            content.addClass("open")
        }
    })
    var audio = document.getElementById('audio');
    if(audio){
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
        audio.play()
    }
})

