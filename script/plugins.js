$(document).ready(function () {
    $("aside").click(function () {
        $(this).children("span").toggle();
        $("#cart").fadeToggle(300);
        $("#ttl").toggleClass("pushed")
    })
    
    
    $("button").click(function () {
        $(this).children().animate({
            top:'4px',
            left:'0',
            height:'20px',
            width:'20px',
        }, 200).fadeOut(2000).css({
            backgroundColor: 'purple'
        })
    })
})