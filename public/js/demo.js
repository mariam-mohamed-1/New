$(document).ready(function () {
    
    $(".drob_con .ulDrop li").not(".active").hover(
        function () {
            $(this).css('background-color', 'white');
            $(this).find("a").css({
                "color": " black "

            })
        },
        function () {
            $(this).css('background-color', 'transparent');
            $(this).find("a").css({
                "color": "white",
            })

        });



    $("#btnOfDropDownServices").click(function () {
        $("#drob_con_activities").hide();
        $("#drob_con_services").toggle();
    });
    $("#btnOfDropDownServicesMenu").click(function () {
        $("#drob_con_services_menu").toggle();
    });
    $("#btnOfDropDownActivities").click(function () {
        $("#drob_con_services").hide();
        $("#drob_con_activities").toggle();
    })
    $("#btnOfDropDownActivitiesMenu").click(function () {
      
        $("#drob_con_activities_menu").toggle();
    })


    $("img").not(".notOpen").on("click", function () {


        $(".pageOfImage img").attr("src", $(this).attr("src"))
        //alert($(".pageOfImage img").attr("src"));
        $("body").css("overflow", "hidden");
        $(".pageOfImage").show();

    })

    $(".menu").on("click", function () {
        $("body").css("overflow", "hidden");
        $(".blockNavBar").show();

    })
    $(".pageOfImage .close1").click(function () {
        $(".pageOfImage").hide();
        $("body").css("overflow", "auto");
    })
    $(".close2").click(function () {
        $(".blockNavBar").hide();
        $("body").css("overflow", "auto");
    })

    $(".onePlace h2").click(function () {
        if($(this).hasClass("aa")){
            $(this).find("i").removeClass("fas fa-caret-down");
            $(this).find("i").addClass("fa-solid fa-caret-righ");
            $(this).removeClass("aa"),
            $(this).next().css("display" , "none")
        }
        else{
            $(this).find("i").removeClass("fa-solid fa-caret-righ");
            $(this).find("i").addClass("fas fa-caret-down");
            $(this).addClass("aa"),
            $(this).next().css("display" , "flex")
        }
        console.log($(this).next());
        
    })


    $(".owl-carousel-camps").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,

        


    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        center:true,
        autoplayHoverpause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            850:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })



});