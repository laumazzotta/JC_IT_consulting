jQuery(function($) {

    $(window).scroll(function(a, b, c) {
        const offset = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        $('body').css('--scroll', offset);
    });

    // $('.items-qs').addClass('animate__slideInUp');
    $('.hero-tittle > h1').addClass('slideInDown');

    // window.addEventListener('scroll', () => {
    //     let offset = document.body.offsetHeight - window.innerHeight;
    //     let scroll = (offset > 0) ? window.pageYOffset : 0;
    //     document.body.style.setProperty('--scroll', scroll);
    //   }, false);

    $('#openNav').on('click', function() {
        $('#myNav').css("height", "100%");
    });
    
    $('#closeNav').on('click', function() {
        $('#myNav').css("height", "0%");
    });

    $('.nav-item, .dropdown-item').on('click', function() {
        $('#myNav').css("height", "0%");
    });

    // PLANEAMIENTO
    $('#open-btn-1').on('click', function() {
        $('.planeamiento').addClass("planeamiento-open");
        $('.overlay').addClass("overlay-open");
    });
    $('#submenu-planeamiento').on('click', function() {
        $('.planeamiento').addClass("planeamiento-open");
        $('.overlay').addClass("overlay-open");
    });

    $('#submenu-planeamiento-mob').on('click', function() {
        $('.planeamiento').addClass("planeamiento-open");
        $('.overlay').addClass("overlay-open");
    });
    
    $('#close-btn-1').on('click', function() {
        $('.planeamiento').removeClass("planeamiento-open");
        $('.overlay').removeClass("overlay-open");
    });

    // DIRECCION
    $('#open-btn-2').on('click', function() {
        $('.direccion').addClass("direccion-open");
        $('.overlay-2').addClass("overlay-open");
    });
    $('#submenu-direccion').on('click', function() {
        $('.direccion').addClass("direccion-open");
        $('.overlay-2').addClass("overlay-open");
    });
    $('#submenu-direccion-mob').on('click', function() {
        $('.direccion').addClass("direccion-open");
        $('.overlay-2').addClass("overlay-open");
    });
    
    $('#close-btn-2').on('click', function() {
        $('.direccion').removeClass("direccion-open");
        $('.overlay-2').removeClass("overlay-open");
    });

    // REPORTING
    $('#open-btn-3').on('click', function() {
        $('.reporting').addClass("planeamiento-open");
        $('.overlay-3').addClass("overlay-open");
    });
    $('#submenu-reporting').on('click', function() {
        $('.reporting').addClass("planeamiento-open");
        $('.overlay-3').addClass("overlay-open");
    });
    $('#submenu-reporting-mob').on('click', function() {
        $('.reporting').addClass("planeamiento-open");
        $('.overlay-3').addClass("overlay-open");
    });
    
    $('#close-btn-3').on('click', function() {
        $('.reporting').removeClass("planeamiento-open");
        $('.overlay-3').removeClass("overlay-open");
    });

    // PROCESOS IT
    $('#open-btn-4').on('click', function() {
        $('.procesosIT').addClass("direccion-open");
        $('.overlay-4').addClass("overlay-open");
    });
    $('#submenu-procesos').on('click', function() {
        $('.procesosIT').addClass("direccion-open");
        $('.overlay-4').addClass("overlay-open");
    });
    $('#submenu-procesos-mob').on('click', function() {
        $('.procesosIT').addClass("direccion-open");
        $('.overlay-4').addClass("overlay-open");
    });
    
    $('#close-btn-4').on('click', function() {
        $('.procesosIT').removeClass("direccion-open");
        $('.overlay-4').removeClass("overlay-open");
    });

    // STAFFING
    $('#open-btn-5').on('click', function() {
        $('.staffing').addClass("planeamiento-open");
        $('.overlay-5').addClass("overlay-open");
    });
    $('#submenu-staffing').on('click', function() {
        $('.staffing').addClass("planeamiento-open");
        $('.overlay-5').addClass("overlay-open");
    });
    $('#submenu-staffing-mob').on('click', function() {
        $('.staffing').addClass("planeamiento-open");
        $('.overlay-5').addClass("overlay-open");
    });
    
    $('#close-btn-5').on('click', function() {
        $('.staffing').removeClass("planeamiento-open");
        $('.overlay-5').removeClass("overlay-open");
    });

});