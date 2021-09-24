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
        $('.planeamiento').addClass("planeamiento-open").addClass("height-servicios");
        $('.overlay').addClass("overlay-open").addClass("height-servicios");
    });
    $('#submenu-planeamiento').on('click', function() {
        $('.planeamiento').addClass("planeamiento-open").addClass("height-servicios");
        $('.overlay').addClass("overlay-open").addClass("height-servicios");
    });

    $('#submenu-planeamiento-mob').on('click', function() {
        $('.planeamiento').addClass("planeamiento-open");
        $('.overlay').addClass("overlay-open");
    });
    
    $('#close-btn-1').on('click', function() {
        $('.planeamiento').removeClass("planeamiento-open").removeClass("height-servicios");
        $('.overlay').removeClass("overlay-open").removeClass("height-servicios");
    });

    // DIRECCION
    $('#open-btn-2').on('click', function() {
        $('.direccion').addClass("direccion-open").addClass("height-servicios");
        $('.overlay-2').addClass("overlay-open").addClass("height-servicios");
    });
    $('#submenu-direccion').on('click', function() {
        $('.direccion').addClass("direccion-open").addClass("height-servicios");
        $('.overlay-2').addClass("overlay-open").addClass("height-servicios");
    });
    $('#submenu-direccion-mob').on('click', function() {
        $('.direccion').addClass("direccion-open");
        $('.overlay-2').addClass("overlay-open");
    });
    
    $('#close-btn-2').on('click', function() {
        $('.direccion').removeClass("direccion-open").removeClass("height-servicios");
        $('.overlay-2').removeClass("overlay-open").removeClass("height-servicios");
    });

    // REPORTING
    $('#open-btn-3').on('click', function() {
        $('.reporting').addClass("planeamiento-open").addClass("height-servicios");
        $('.overlay-3').addClass("overlay-open").addClass("height-servicios");
    });
    $('#submenu-reporting').on('click', function() {
        $('.reporting').addClass("planeamiento-open").addClass("height-servicios");
        $('.overlay-3').addClass("overlay-open").addClass("height-servicios");
    });
    $('#submenu-reporting-mob').on('click', function() {
        $('.reporting').addClass("planeamiento-open");
        $('.overlay-3').addClass("overlay-open");
    });
    
    $('#close-btn-3').on('click', function() {
        $('.reporting').removeClass("planeamiento-open").removeClass("height-servicios");
        $('.overlay-3').removeClass("overlay-open").removeClass("height-servicios");
    });

    // PROCESOS IT
    $('#open-btn-4').on('click', function() {
        $('.procesosIT').addClass("direccion-open").addClass("height-servicios");
        $('.overlay-4').addClass("overlay-open").addClass("height-servicios");
    });
    $('#submenu-procesos').on('click', function() {
        $('.procesosIT').addClass("direccion-open").addClass("height-servicios");
        $('.overlay-4').addClass("overlay-open").addClass("height-servicios");
    });
    $('#submenu-procesos-mob').on('click', function() {
        $('.procesosIT').addClass("direccion-open");
        $('.overlay-4').addClass("overlay-open");
    });
    
    $('#close-btn-4').on('click', function() {
        $('.procesosIT').removeClass("direccion-open").removeClass("height-servicios");
        $('.overlay-4').removeClass("overlay-open").removeClass("height-servicios");
    });

    // STAFFING
    $('#open-btn-5').on('click', function() {
        $('.staffing').addClass("planeamiento-open").addClass("height-servicios");
        $('.overlay-5').addClass("overlay-open").addClass("height-servicios");
    });
    $('#submenu-staffing').on('click', function() {
        $('.staffing').addClass("planeamiento-open").addClass("height-servicios");
        $('.overlay-5').addClass("overlay-open").addClass("height-servicios");
    });
    $('#submenu-staffing-mob').on('click', function() {
        $('.staffing').addClass("planeamiento-open");
        $('.overlay-5').addClass("overlay-open");
    });
    
    $('#close-btn-5').on('click', function() {
        $('.staffing').removeClass("planeamiento-open").removeClass("height-servicios");
        $('.overlay-5').removeClass("overlay-open").removeClass("height-servicios");
    });

});