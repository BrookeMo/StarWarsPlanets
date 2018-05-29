$('#space').mousemove(function (e) {
    var amountMovedX = (e.pageX * -1 / 50);
    var amountMovedY = (e.pageY * -1 / 50);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});


$("#episode1").hover(
    function () {
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
    },
    function () {
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
    }
);

$("#episode2").hover(
    function () {
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
    },
    function () {
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
    }
);
$("#episode3").hover(
    function () {
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
    },
    function () {
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
    }
);
$("#episode4").hover(
    function () {
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
    },
    function () {
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
    }
);
$("#episode5").hover(
    function () {
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
    },
    function () {
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
    }
);
$("#episode6").hover(
    function () {
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
    },
    function () {
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
    }
);
$("#episode7").hover(
    function () {
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
    },
    function () {
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
    }
);
$("#episode8").hover(
    function () {
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
    },
    function () {
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
    }
);
$("#rogueone").hover(
    function () {
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
    },
    function () {
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
    }
);
$("#solo").hover(
    function () {
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
    },
    function () {
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
    }
);