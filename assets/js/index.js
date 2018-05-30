$('#space').mousemove(function (e) {
    var amountMovedX = (e.pageX * -1 / 50);
    var amountMovedY = (e.pageY * -1 / 50);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

$("#title").click(
    function () {
        location.reload();
    });

$(".episodescroll").click(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (isClicked) {
            $(this).css("opacity", ".5");
            $(this).removeClass("clicked");
        }
        else {
            $(this).toggleClass('clicked');
            $(this).css("opacity", "1");
        }
    });

$("#episode1").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").hide();
            $(".rebels").hide();
            $(".solo").hide();
            $(".episode2").hide();
            $(".episode3").hide();
            $(".episode4").hide();
            $(".episode5").hide();
            $(".episode6").hide();
            $(".episode7").hide();
            $(".episode8").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").show();
            $(".rebels").show();
            $(".solo").show();
            $(".episode2").show();
            $(".episode3").show();
            $(".episode4").show();
            $(".episode5").show();
            $(".episode6").show();
            $(".episode7").show();
            $(".episode8").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);

$("#episode2").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").hide();
            $(".rebels").hide();
            $(".solo").hide();
            $(".episode1").hide();
            $(".episode3").hide();
            $(".episode4").hide();
            $(".episode5").hide();
            $(".episode6").hide();
            $(".episode7").hide();
            $(".episode8").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", "1");

        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").show();
            $(".rebels").show();
            $(".solo").show();
            $(".episode1").show();
            $(".episode3").show();
            $(".episode4").show();
            $(".episode5").show();
            $(".episode6").show();
            $(".episode7").show();
            $(".episode8").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode3").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").hide();
            $(".rebels").hide();
            $(".solo").hide();
            $(".episode1").hide();
            $(".episode2").hide();
            $(".episode4").hide();
            $(".episode5").hide();
            $(".episode6").hide();
            $(".episode7").hide();
            $(".episode8").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").show();
            $(".rebels").show();
            $(".solo").show();
            $(".episode1").show();
            $(".episode2").show();
            $(".episode4").show();
            $(".episode5").show();
            $(".episode6").show();
            $(".episode7").show();
            $(".episode8").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode4").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").hide();
            $(".rebels").hide();
            $(".solo").hide();
            $(".episode1").hide();
            $(".episode2").hide();
            $(".episode3").hide();
            $(".episode5").hide();
            $(".episode6").hide();
            $(".episode7").hide();
            $(".episode8").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").show();
            $(".rebels").show();
            $(".solo").show();
            $(".episode2").show();
            $(".episode3").show();
            $(".episode4").show();
            $(".episode5").show();
            $(".episode6").show();
            $(".episode7").show();
            $(".episode8").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode5").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").hide();
            $(".rebels").hide();
            $(".solo").hide();
            $(".episode1").hide();
            $(".episode2").hide();
            $(".episode3").hide();
            $(".episode4").hide();
            $(".episode6").hide();
            $(".episode7").hide();
            $(".episode8").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").show();
            $(".rebels").show();
            $(".solo").show();
            $(".episode1").show();
            $(".episode2").show();
            $(".episode3").show();
            $(".episode4").show();
            $(".episode6").show();
            $(".episode7").show();
            $(".episode8").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode6").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").hide();
            $(".rebels").hide();
            $(".solo").hide();
            $(".episode1").hide();
            $(".episode2").hide();
            $(".episode3").hide();
            $(".episode4").hide();
            $(".episode5").hide();
            $(".episode7").hide();
            $(".episode8").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").show();
            $(".rebels").show();
            $(".solo").show();
            $(".episode1").show();
            $(".episode2").show();
            $(".episode3").show();
            $(".episode4").show();
            $(".episode5").show();
            $(".episode7").show();
            $(".episode8").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode7").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").hide();
            $(".rebels").hide();
            $(".solo").hide();
            $(".episode1").hide();
            $(".episode2").hide();
            $(".episode3").hide();
            $(".episode4").hide();
            $(".episode5").hide();
            $(".episode6").hide();
            $(".episode8").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").show();
            $(".rebels").show();
            $(".solo").show();
            $(".episode1").show();
            $(".episode2").show();
            $(".episode3").show();
            $(".episode4").show();
            $(".episode5").show();
            $(".episode6").show();
            $(".episode8").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode8").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").hide();
            $(".rebels").hide();
            $(".solo").hide();
            $(".episode1").hide();
            $(".episode2").hide();
            $(".episode3").hide();
            $(".episode4").hide();
            $(".episode5").hide();
            $(".episode6").hide();
            $(".episode7").hide();
            $(".episode8").show();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rogueone").show();
            $(".rebels").show();
            $(".solo").show();
            $(".episode1").show();
            $(".episode2").show();
            $(".episode3").show();
            $(".episode4").show();
            $(".episode5").show();
            $(".episode6").show();
            $(".episode7").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#rogueone").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rebels").hide();
            $(".solo").hide();
            $(".episode1").hide();
            $(".episode2").hide();
            $(".episode3").hide();
            $(".episode4").hide();
            $(".episode5").hide();
            $(".episode6").hide();
            $(".episode7").hide();
            $(".episode8").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rebels").show();
            $(".solo").show();
            $(".episode1").show();
            $(".episode2").show();
            $(".episode3").show();
            $(".episode4").show();
            $(".episode5").show();
            $(".episode6").show();
            $(".episode7").show();
            $(".episode8").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#solo").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rebels").hide();
            $(".rogueone").hide();
            $(".episode1").hide();
            $(".episode2").hide();
            $(".episode3").hide();
            $(".episode4").hide();
            $(".episode5").hide();
            $(".episode6").hide();
            $(".episode7").hide();
            $(".episode8").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".rebels").show();
            $(".rogueone").show();
            $(".episode1").show();
            $(".episode2").show();
            $(".episode3").show();
            $(".episode4").show();
            $(".episode5").show();
            $(".episode6").show();
            $(".episode7").show();
            $(".episode8").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);