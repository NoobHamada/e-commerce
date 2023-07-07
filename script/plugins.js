$(document).ready(function () {
    let prodNames = [];

    $("button").click(function () {
        prodNames += $(this).siblings(".prodName").text() + ' ';
        $("#cart").text(prodNames)
    })
})