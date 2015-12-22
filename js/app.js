/**
 * Created by Hakierka on 10.12.2015.
 */
$(document).ready(function(){

    /**
     * Thanks to stickyMenu function, when you're scrroling
     * the navigation bar is always up, fixed on the top of the site
     * **/

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

    /**
     * move to the differents section from the navigation
     * is slow and smooth
     * **/
    function smoothScroll() {
        $(function () {
            $('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    }


     /**
      * Animation in the loading skill bars of the member of the team.
      * **/

    function skillBars() {
        //Skill bars
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            },6000);
        });
    }

    /**
     * Thank's to that function
     * we can check is data are correct.
     * It's check email is correctly written, name is not numeric
     * and has more than 3 letters
     * **/

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


    /**
     * We can segregate pictures in the gallery by tags
     * **/

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


    /**
     * Showing or hiding picture when you're click the button
     * **/

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

    /**
     * It's a hover effect with opacity mask when mouse is over the picture
     * **/

    function opacityOnThePictureInThePortfolio() {

        var overImage = $('.over-image');
        var insideImage = $('.inside-image');

        overImage.hover(function () {
                $(this).find(insideImage).show();
            },
            function () {
                $(this).find(insideImage).hide();

            });
    }

    /**
     * It's automatic slider with quotes partners of the company
     * **/

    function moveSlides (){
        var wrapperWidth = $(".wrapper").outerWidth();
        var sliderParent = $(".slideshow");
        var slideChildren = sliderParent.children();
        var countOfSlide = slideChildren.length;
        var width1Slider = wrapperWidth;
        slideChildren.css("width", wrapperWidth);
        sliderParent.css("width", countOfSlide * wrapperWidth + 2);
        var counter = 1;
        setInterval(function(){
            sliderParent.animate({
                left: -width1Slider * counter
            });
            if(counter > countOfSlide-2){
                counter=0;
            }
            else{
                counter++;
            }
        },3000);
    }

    /**
     * It's a slider of the team members.
     * Every member has different skills.
     * **/

    function moveSliderSkill() {
            var buttonLeft = $('.left-button');
            var buttonRight = $('.right-button');
            var teamMembers = $('.team-member');
            var allChildren = teamMembers.length;

        buttonLeft.on("click",function(){

                var active = $('.active-member');
                active.removeClass('active-member');
                active.prev().addClass('active-member');
                var actualElement = active.index();
                var percent = $('.clearfix');

                if (actualElement<=0) {
                    active.removeClass('active-member');
                    teamMembers.eq(allChildren-1).addClass('active-member');
                }


            });
            buttonRight.on("click", function() {

                var active = $('.active-member');
                active.removeClass('active-member');
                active.next().addClass('active-member');
                var actualElement = active.index();


                if (actualElement>=allChildren-1) {
                    active.removeClass('active-member');
                    teamMembers.eq(0).addClass('active-member');
                }

            });


        }

    /**
     * One click on the small picture - you can see the same, big picture.
     * Second click - the big picture is gone
     * **/



    function galleryBigImage() {
        var activeImage = $('.inside-image');
        var bigImage = $('.portfolioBigImg');
        activeImage.on('click',function(){
            $(this).next().addClass('portfolioBigImgShow');
        });
        bigImage.on('click', function(){
           $(this).removeClass('portfolioBigImgShow');
        });
    }




    moveSlides();
    stickyMenu();
    smoothScroll();
    skillBars();
    validateForm();
    searchingByTags();
    showHide();
    opacityOnThePictureInThePortfolio();
    moveSliderSkill();
    galleryBigImage();








});