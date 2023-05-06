$(document).ready(function () {
    var zindex = 5;

    $("div.card").click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("infoshow")) {
            isShowing = true
        }

        if ($("div.cards").hasClass("infoshowing")) {
            // a card is already in view
            $("div.card.infoshow")
                .removeClass("infoshow");

            if (isShowing) {
                // this card was showing - reset the grid
                $("div.cards")
                    .removeClass("infoshowing");
            } else {
                // this card isn't showing - get in with it
                $(this)
                    .css({
                        zIndex: zindex
                    })
                    .addClass("infoshow");

            }

            zindex++;

        } else {
            // no cards in view
            $("div.cards")
                .addClass("infoshowing");
            $(this)
                .css({
                    zIndex: zindex
                })
                .addClass("infoshow");

            zindex++;
        }

    });
});