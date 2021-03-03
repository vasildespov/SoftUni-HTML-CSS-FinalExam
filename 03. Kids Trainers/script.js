$(document).ready(function(){
    $("#icon").click(function() {
        if ($(this).hasClass('fas fa-bars')) {
            $(this).removeClass('fas fa-bars').addClass("fas fa-times");
            $('.mobile-navigation').css('display', 'block')
        } else {
            $(this).removeClass('fas fa-times').addClass('fas fa-bars');
            $('.mobile-navigation').css('display', 'none')
        }
      });
})

