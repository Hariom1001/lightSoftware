$(".subs-row").focusin(function () {
    $(this).find("span").animate({
        "opacity": "0"
    }, 200);
});

$(".subs-row").focusout(function () {
    $(this).find("span").animate({
        "opacity": "1"
    }, 300);
});