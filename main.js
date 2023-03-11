function blink(elem, times, speed) {
    if (times > 0 || times < 0) {
        if ($(elem).hasClass("blink")) 
            $(elem).removeClass("blink");
        else
            $(elem).addClass("blink");
    }

    clearTimeout(function () {
        blink(elem, times, speed);
    });

    if (times > 0 || times < 0) {
        setTimeout(function () {
            blink(elem, times, speed);
        }, speed);
        times -= .5;
    }
}

$(document).ready(function () {
  blink(".front-light", -1, 900);
  
    blink(".engage-4", -1, 650);//far right
    blink(".engage-5", -1, 650);//far left
blink(".engage-2", -1, 700); //center left
  blink(".engage-3", -1, 700); //center right
  
  blink(".se-1", -1, 675);
      blink(".se-2", -1,675);// right right
   blink(".se-3", -1, 675);//right left
   blink(".se-4", -1, 675); //left left

});

// found here: http://jsfiddle.net/jadendreamer/Nx4qS/30/



  