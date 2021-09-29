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
    
    $('#close-btn-1').on('click', function() {
        $('.planeamiento').removeClass("planeamiento-open").removeClass("height-servicios");
        $('.overlay').removeClass("overlay-open").removeClass("height-servicios");
    });

    // DIRECCION
    $('#open-btn-2').on('click', function() {
        $('.direccion').addClass("direccion-open").addClass("height-servicios");
        $('.overlay-2').addClass("overlay-open").addClass("height-servicios");
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

    $('#close-btn-3').on('click', function() {
        $('.reporting').removeClass("planeamiento-open").removeClass("height-servicios");
        $('.overlay-3').removeClass("overlay-open").removeClass("height-servicios");
    });

    // PROCESOS IT
    $('#open-btn-4').on('click', function() {
        $('.procesosIT').addClass("direccion-open").addClass("height-servicios");
        $('.overlay-4').addClass("overlay-open").addClass("height-servicios");
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
    
    $('#close-btn-5').on('click', function() {
        $('.staffing').removeClass("planeamiento-open").removeClass("height-servicios");
        $('.overlay-5').removeClass("overlay-open").removeClass("height-servicios");
    });


    $('#contactForm').submit(function (event) {
        let $form = $(this);
        var formData = {
            'name' : $form.find('input[name=name]').val(),
            'email' : $form.find('input[name=email]').val(),
            'phone' : $form.find('input[name=phone]').val(),
            'message' : $form.find('textarea[name=message]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'form.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true
        }).done(function(data) {
            // log data to the console so we can see
            if (data.errors) {
                alert('No pudimos recibir tu consulta. Por favor verifica los campos del formulario e intenta nuevamente. Gracias!');
            } else {
                $form.trigger('reset');
                alert('Gracias! Te contactaremos a la brevedad.');
            }
            
        });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});