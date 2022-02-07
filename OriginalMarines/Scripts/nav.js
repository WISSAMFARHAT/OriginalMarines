$(window).scroll(function () {
    if ($(window).scrollTop() > document.getElementById('topbar').offsetHeight) {
        document.getElementById("nav").style.backgroundColor = "white";
        document.getElementById("nav").style.position = "fixed";
        document.getElementById("nav").style.top = "0";
        $(".nav-link").each(function () {
            $(this).addClass("black");
            
        });

        document.getElementById("down").style.display = "block";
        
    } else {
        document.getElementById("nav").style.backgroundColor = "transparent";
        document.getElementById("nav").style.position = "relative";
        $(".nav-link").each(function () {
            $(this).removeClass("black");
            
        });
        document.getElementById("down").style.display = "none";

    }
});

function down()
{
    window.scrollTo(0, 0);
}



$(document).ready(function () {
    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $('.count').val(parseInt($('.count').val()) + 1);
    });
    $(document).on('click', '.minus', function () {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() == 0) {
            $('.count').val(1);
        }
    });
    
});


