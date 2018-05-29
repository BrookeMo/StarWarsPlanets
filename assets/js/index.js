$('#space').mousemove(function (e) {
    var amountMovedX = (e.pageX * -1 / 50);
    var amountMovedY = (e.pageY * -1 / 50);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});


$("#episode1").hover(
    function () {
        $(".rogueone").hide();
        $(".rebels").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode1").show();
    },
    function () {
        $(".rogueone").show();
        $(".rebels").show();
        $(".episode2").show();
        $(".episode3").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
        $("#alderanintact").hide();
    }
);

$("#episode2").hover(
    function () {
        $(".rogueone").hide();
        $(".rebels").hide();
        $(".episode1").hide();
        $(".episode3").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode2").show();
    },
    function () {
        $(".rogueone").show();
        $(".rebels").show();
        $(".episode1").show();
        $(".episode3").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
        $("#alderanintact").hide();
    }
);
$("#episode3").hover(
    function () {
        $(".rogueone").hide();
        $(".rebels").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode3").show();
    },
    function () {
        $(".rogueone").show();
        $(".rebels").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
        $("#alderanintact").hide();
    }
);
$("#episode4").hover(
    function () {
        $(".rogueone").hide();
        $(".rebels").hide();
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
        $(".rogueone").show();
        $(".rebels").show();
        $(".episode2").show();
        $(".episode3").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
        $("#alderanintact").hide();
    }
);
$("#episode5").hover(
    function () {
        $(".rogueone").hide();
        $(".rebels").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $(".episode4").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode5").show();
    },
    function () {
        $(".rogueone").show();
        $(".rebels").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $(".episode4").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
        $("#alderanintact").hide();
    }
);
$("#episode6").hover(
    function () {
        $(".rogueone").hide();
        $(".rebels").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".episode6").show();
    },
    function () {
        $(".rogueone").show();
        $(".rebels").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode7").show();
        $(".episode8").show();
        $("#alderanintact").hide();
    }
);
$("#episode7").hover(
    function () {
        $(".rogueone").hide();
        $(".rebels").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode8").hide();
        $(".episode7").show();
    },
    function () {
        $(".rogueone").show();
        $(".rebels").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode8").show();
        $("#alderanintact").hide();
    }
);
$("#episode8").hover(
    function () {
        $(".rogueone").hide();
        $(".rebels").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").show();
    },
    function () {
        $(".rogueone").show();
        $(".rebels").show();
        $(".episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $("#alderanintact").hide();
    }
);
$("#rogueone").hover(
    function () {
        $(".rebels").hide();
        $(".episode1").hide();
        $(".episode2").hide();
        $(".episode3").hide();
        $(".episode4").hide();
        $(".episode5").hide();
        $(".episode6").hide();
        $(".episode7").hide();
        $(".episode8").hide();
        $(".rogueone").show();
    },
    function () {
        $(".rebels").show();
        $("episode1").show();
        $(".episode2").show();
        $(".episode3").show();
        $(".episode4").show();
        $(".episode5").show();
        $(".episode6").show();
        $(".episode7").show();
        $(".episode8").show();
        $("#alderanintact").hide();
    }
);
$("#episode1").click(function(){
    $(".rogueone").hide();
    $(".rebels").hide();
    $(".episode2").hide();
    $(".episode3").hide();
    $(".episode4").hide();
    $(".episode5").hide();
    $(".episode6").hide();
    $(".episode7").hide();
    $(".episode8").hide();
    $(".episode1").show();
});