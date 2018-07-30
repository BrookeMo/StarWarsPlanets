$("#title").fitText(1, { minFontSize: '48px', maxFontSize: '95px' });
$("#planetfooter").fitText(1, { minFontSize: '30px', maxFontSize: '55px' });

$("#title").click(function () {
        location.reload();
    });

$(".episodescroll").click(function () {
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
// SETTING UP FUNCTIONS //
    function showallplanets() {
        $(".planet").show();
        $(".label").show();
        $("#alderanintact").hide();
    };
    function showepisode1() {
        $(".planet").hide();
        $(".label").hide();
        $(".episode1").show();
    };
    function showepisode2() {
        $(".planet").hide();
        $(".label").hide();
        $(".episode2").show();
    };
    function showepisode3() {
        $(".planet").hide();
        $(".label").hide();
        $(".episode3").show();
    };
    function showepisode4() {
        $(".planet").hide();
        $(".label").hide();
        $(".episode4").show();
    };
    function showepisode5() {
        $(".planet").hide();
        $(".label").hide();
        $(".episode5").show();
    };
    function showepisode6() {
        $(".planet").hide();
        $(".label").hide();
        $(".episode6").show();
    };
    function showepisode7() {
        $(".planet").hide();
        $(".label").hide();
        $(".episode7").show();
    };
    function showepisode8() {
        $(".planet").hide();
        $(".label").hide();
        $(".episode8").show();
    };
    function showrogueone() {
        $(".planet").hide();
        $(".label").hide();
        $(".rogueone").show();
    };
    function showsolo() {
        $(".planet").hide();
        $(".label").hide();
        $(".solo").show();
    }
$("#episode1").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showepisode1(); 
            $("#footer").html("episode one planets");
            $("#episode1").css("opacity", "1"); 
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
        }
        else if ($("#episode2").hasClass('clicked')) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            showepisode8();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);

$("#episode2").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            showepisode8();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode3").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            showepisode8();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode4").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            showepisode8();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode5").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            showepisode8();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode6").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            showepisode8();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode7").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            showepisode8();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#episode8").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showepisode8();
            $("#footer").html("episode eight planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#rogueone").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            showepisode8();
            $("#footer").html("episode 8 planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#solo").hasClass('clicked')) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
            $("#footer").html("all planets");
            $(this).css("opacity", ".5");
        }
    }
);
$("#solo").hover(
    function () {
        var isClicked = $(this).hasClass('clicked');
        if (!isClicked) {
            showsolo();
            $("#footer").html("solo planets");
            $(this).css("opacity", "1");
        }
    },
    function () {
        var isClicked = $(".episodescroll").hasClass('clicked');
        if ($("#episode1").hasClass('clicked')) {
            showepisode1();
            $("#footer").html("episode one planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode2").hasClass('clicked')) {
            showepisode2();
            $("#footer").html("episode two planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode3").hasClass('clicked')) {
            showepisode3();
            $("#footer").html("episode three planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode4").hasClass('clicked')) {
            showepisode4();
            $("#footer").html("episode four planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode5").hasClass('clicked')) {
            showepisode5();
            $("#footer").html("episode five planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode6").hasClass('clicked')) {
            showepisode6();
            $("#footer").html("episode six planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode7").hasClass('clicked')) {
            showepisode7();
            $("#footer").html("episode seven planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#episode8").hasClass('clicked')) {
            showepisode8();
            $("#footer").html("episode 8 planets");
            $(this).css("opacity", ".5");
        }
        else if ($("#rogueone").hasClass('clicked')) {
            showrogueone();
            $("#footer").html("rogue one planets");
            $(this).css("opacity", ".5");
        }
        else if (!isClicked) {
            showallplanets();
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
    setPageTitle();
    if(activePageIndex === 0){
        showallplanets();
    }
    else if(activePageIndex === 1){
        showepisode1();
    }
    else if(activePageIndex === 2){
        showepisode2();
    }
    else if(activePageIndex === 3){
        showepisode3();
    }
    else if(activePageIndex === 4){
        showepisode4();
    }
    else if(activePageIndex === 5){
        showepisode5();
    }
    else if(activePageIndex === 6){
        showepisode6();
    }
    else if(activePageIndex === 7){
        showepisode7();
    }
    else if(activePageIndex === 8){
        showepisode8();
    }
    else if(activePageIndex === 9){
        showrogueone();
    }
    else if(activePageIndex === 10){
        showsolo();
    }
  }
  
  const goForward = () => {
    if(activePageIndex === Object.keys(pages).length - 1){
      activePageIndex = 0;
    }else{
      activePageIndex++;
    }
    setPageTitle();
    if(activePageIndex === 0){
        showallplanets();
    }
    else if(activePageIndex === 1){
        showepisode1();
    }
    else if(activePageIndex === 2){
        showepisode2();
    }
    else if(activePageIndex === 3){
        showepisode3();
    }
    else if(activePageIndex === 4){
        showepisode4();
    }
    else if(activePageIndex === 5){
        showepisode5();
    }
    else if(activePageIndex === 6){
        showepisode6();
    }
    else if(activePageIndex === 7){
        showepisode7();
    }
    else if(activePageIndex === 8){
        showepisode8();
    }
    else if(activePageIndex === 9){
        showrogueone();
    }
    else if(activePageIndex === 10){
        showsolo();
    }
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