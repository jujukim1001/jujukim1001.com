$(".menuButton").click(function (e) { 
    var slidedToScreenClassName = "slidedToScreen"
    var slidedToLeftClassName = "slidedToLeft"

    var overlayMenu = $(".overlayMenu");
    var menuButton = $(".menuButton");

    var isSlidedToScreen = overlayMenu.hasClass(slidedToScreenClassName);

    if (isSlidedToScreen) {
        overlayMenu.removeClass(slidedToScreenClassName);
        overlayMenu.addClass(slidedToLeftClassName);
        menuButton.toggleClass("activated");
    } else {
        overlayMenu.removeClass(slidedToLeftClassName);
        overlayMenu.addClass(slidedToScreenClassName);
        menuButton.toggleClass("activated");
    }
});