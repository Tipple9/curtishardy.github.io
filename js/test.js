//Parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.slider').css({
        'transform' : 'translate(0px, '+ wScroll /1 +'%)'
    });
});

//Fade in/out
var fadeStart=300
,fadeUntil=900
,fading = $('#home')
;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
    ,opacity=1
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=(offset-fadeUntil)/(fadeStart-fadeUntil);
    } else if(offset>fadeUtil) {
        opacity = 0;
    }
    fading.css('opacity',opacity).html(opacity);
});
