$('#space').mousemove(function (e) {
    var amountMovedX = (e.pageX * -1 / 50);
    var amountMovedY = (e.pageY * -1 / 50);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});


$("#episode1").hover(
    function () {
        $(".noepisode").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $(".episode4").hide();
        $("#yavin").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode1").show();
    },
    function () {
        $(".noepisode").show();
        $(".episode2").show();
        $(".episode3").show();
        $(".episode4").show();
        $("#yavin").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
    }
);

$("#episode2").hover(
    function () {
        $(".noepisode").hide();
        $(".episode1").hide();
        $(".episode3").hide();
        $(".episode4").hide();
        $("#yavin").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode2").show();
    },
    function () {
        $(".noepisode").show();
        $(".episode1").show();
        $(".episode3").show();
        $(".episode4").show();
        $("#yavin").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
    }
);
$("#episode3").hover(
    function () {
        $(".noepisode").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode4").hide();
        $("#yavin").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode3").show();
    },
    function () {
        $(".noepisode").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode4").show();
        $("#yavin").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
    }
);
$("#episode4").hover(
    function () {
        $(".noepisode").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode4").show();
    },
    function () {
        $(".noepisode").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
    }
);
$("#episode5").hover(
    function () {
        $(".noepisode").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $("#yavin").hide();
        $(".episode4").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode5").show();
    },
    function () {
        $(".noepisode").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $("#yavin").show();
        $(".episode4").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
    }
);
$("#episode6").hover(
    function () {
        $(".noepisode").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $("#yavin").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode6").show();
    },
    function () {
        $(".noepisode").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $("#yavin").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode7").show();
        $(".episode8").show();
    }
);
$("#episode7").hover(
    function () {
        $(".noepisode").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $("#yavin").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode8").hide();
        $(".episode7").show();
    },
    function () {
        $(".noepisode").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $("#yavin").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode8").show();
    }
);
$("#episode8").hover(
    function () {
        $(".noepisode").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $("#yavin").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").show();
    },
    function () {
        $(".noepisode").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $("#yavin").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
    }
);