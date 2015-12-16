/**
 * Created by Hakierka on 10.12.2015.
 */
$(document).ready(function(){
    //Sticky menu
    var menu=$("nav");
    var menuOffsetOfTop = menu.position().top;
    $(window).on("scroll", function(){
        if ($(window).scrollTop()> menuOffsetOfTop) {
            menu.addClass("sticky");
        }
        else {
            menu.removeClass("sticky");
        }


    });
    //End sticky menu

    //Skill bars
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            },6000);
        });

    //End Skill bars
});