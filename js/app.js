/**
 * Created by Hakierka on 10.12.2015.
 */
$(document).ready(function(){


    function stickyMenu(){
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
    }



    function skillBars() {
        //Skill bars
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            },6000);
        });
    }

    function validateForm() {
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
                $("#span2").removeClass("warning_show").addClass("warning");
            }
            else {

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

    }


    function searchingByTags() {

        //Start Gallery
        var all = $('.tag-all');
        var tag1 = $('.tag-tag1');
        var tag2 = $('.tag-tag2');
        var tag3 = $('.tag-tag3');
        var imgTag1 = $('.tag1');
        var imgTag2 = $('.tag2');
        var imgTag3 = $('.tag3');
        var imgAll = $('.all');

        //for (var i=1; i>0; i++){
        //
        //    tag[i].on('click',function(){
        //        imgAll.addClass("hide");
        //        imgTag[i].removeClass("hide");
        //    });
        //
        //
        //}
        tag1.on('click',function(){
            imgAll.addClass("hide");
            imgTag1.removeClass("hide");
        });

        tag2.on('click', function(){
            imgAll.addClass("hide");
            imgTag2.removeClass("hide");
        });

        tag3.on('click', function(){
            imgAll.addClass("hide");
            imgTag3.removeClass("hide");
        });


        all.on('click', function(){
            imgAll.removeClass("hide");
        });
    }



    // Click more or less - TO trzeba zautomatyzować!

    function showHide(){
        var showMore= $('.show-more');
        var basicHide = $('.basic-hide');
        var less = $('.less');
        var more= $('.more');

        less.hide();

        showMore.on('click',function() {
            basicHide.toggleClass("hide");
            less.toggle();
            more.toggle();
        });

    }

    var overImage = $('.over-image');
    var insideImage = $('.inside-image');

    overImage.hover(function(){
        $(this).find(insideImage).show();
        },
        function() {
            $(this).find(insideImage).hide();

    });

    //End Gallery

    stickyMenu();
    skillBars();
    validateForm();
    searchingByTags();
    showHide();







});