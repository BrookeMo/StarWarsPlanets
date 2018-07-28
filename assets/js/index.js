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
            $(this).removeClass("clicked");
            $(this).css("opacity", ".5");
        }
        else {
            $('.episodescroll').not(this).removeClass('clicked');
            $('.episodescroll').not(this).css('opacity', '.5');
            $(this).addClass('clicked');
        }
    });
$("#episode1").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode2").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
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
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
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
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
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
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
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
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
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
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
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
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
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
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
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
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode 8 planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
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
            $(".planet").hide();
            $(".label").hide();
            $(".solo").show();
            $("#footer").html("solo planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode1").show();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode2").show();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode3").show();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode4").show();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode5").show();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode6").show();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode7").show();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".episode8").show();
            $("#footer").html("episode 8 planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            $(".planet").hide();
            $(".label").hide();
            $(".rogueone").show();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            $(".planet").show();
            $(".label").show();
            $("#alderanintact").hide();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);

const pages = {
    0: {title: "All Planets"},
    1: {title: "Episode I"},
    2: {title: "Episode II"},
    3: {title: "Episode III"},
    4: {title: "Episode IV"},
    5: {title: "Episode V"},
    6: {title: "Episode VI"},
    7: {title: "Episode VII"},
    8: {title: "Episode VIII"},
    9: {title: "Rogue One"},
    10: {title: "Solo"}
  }
  
  let activePageIndex = 0;
  const activeText = document.getElementById("activeText");
  
  const goBack = () => {
    if(activePageIndex === 0){
      activePageIndex = Object.keys(pages).length - 1
    }else{
      activePageIndex--;
    }
    setPageTitle()
  }
  
  const goForward = () => {
    if(activePageIndex === Object.keys(pages).length - 1){
      activePageIndex = 0;
    }else{
      activePageIndex++;
    }
    console.log(activePageIndex);
    setPageTitle()
  }
  
  const setPageTitle = () => {
    const title = pages[activePageIndex].title
    activeText.innerHTML = title;
  }
  
$("#leftbutton").click(function() {
    goBack();
});
$("#rightbutton").click(function() {
    goForward();
});