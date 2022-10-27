window.onscroll = function() {
    console.log(scrollY);
    if (window.pageYOffset != 0) {
        $(".navbar-logo").animate({width: "200px"}); 
    
    }
}