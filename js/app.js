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

    //Form Validate
    var inputName = $("#inputName");
    var inputEmail = $("#inputEmail");
    var inputText = $("#inputText");
    var inputCheck = $("#agree");
    var emailValue = inputEmail.val();

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return $email.length > 3 && emailReg.test( $email );
    }

    inputName.on("input", function(event){

        if($.isNumeric($(this).prop("value")) || $(this).prop("value").length <= 3 ){   //sprawdzamy czy wartość inputu jest numerem lub krótsza niż 1
            $("#span1").removeClass("warning").addClass("warning_show");               //jesli tak zmieniamy na klase warning_show
        }
        else {
            $("#span1").removeClass("warning_show").addClass("warning");               //jeśli nie zmieniamy klasę na warning
        }
    });
    inputEmail.on("input", function(event){
        var emailValue = inputEmail.val();
        if ( validateEmail(emailValue)){
            console.log('ok');
            $("#span2").removeClass("warning_show").addClass("warning");
        }
        else {
            console.log('nie ok');

            $("#span2").removeClass("warning").addClass("warning_show");
        }

    });
    inputText.on("input", function(event){

        if($.isNumeric($(this).prop("value")) || $(this).prop("value").length <= 5){
            $("#span3").removeClass("warning").addClass("warning_show");
        }
        else {
            $("#span3").removeClass("warning_show").addClass("warning");
        }

    });
    //End validate of form


});