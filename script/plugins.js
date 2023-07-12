$(document).ready(function () {
    $("aside").on('click', (function () {
        $(this).children("span").toggle();
        $("#ttl").toggleClass("pushed");
        $("#cart").fadeToggle(300);

    }))


    $("button").on('click', (function () {
        $(this).children().animate({
            top: '4px',
            left: '0',
            height: '20px',
            width: '20px',
        }, 200).fadeOut(2000).css({
            backgroundColor: 'purple'
        })
    }))


    $("select").on('change', function () {
        switch ($(this).val()) {
            case 'Fruit':
                $(".vegetable").hide();
                $(".fruit").show();
                break;
            case 'Vegetable':
                $(".vegetable").show();
                $(".fruit").hide();
                break;
            case 'All':
                $(".vegetable").show();
                $(".fruit").show();
                break;
        }
    })
})