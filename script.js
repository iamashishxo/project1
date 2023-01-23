$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
          $('.navbar').addClass("styling");
    }else{
        $('.navbar').removeClass("styling");
    }
    if(this.scrollY >500){
      $('.up-btn').addClass("show");
    }else{
      $('.up-btn').removeClass("show");
    }

    });
    // slide-up script
    $('.up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Desiginer", "Blogger",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
   });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Singer", "sportsman",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });
});