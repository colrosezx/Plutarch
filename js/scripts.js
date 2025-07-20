$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});


window.addEventListener('load', function() {
    // Проверяем наличие якоря в URL
    if (window.location.hash === '#portfolio') {
        const target = document.getElementById('portfolio');
        
        if (target) {
            // Дополнительные параметры для плавности
            const scrollOptions = {
                behavior: 'smooth',
                block: 'start',    // 'start', 'center', 'end' или 'nearest'
                inline: 'nearest'
            };

            // Небольшая задержка для гарантированной загрузки всех элементов
            setTimeout(() => {
                target.scrollIntoView(scrollOptions);
                
                // Дополнительный offset (если нужно учесть фиксированное меню)
                const yOffset = -80; // Смещение в пикселях
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({top: y, behavior: 'smooth'});
            }, 100); // Задержка 100мс
        }
    }
});


window.addEventListener('load', function() {
    // Проверяем наличие якоря в URL
    if (window.location.hash === '#features') {
        const target = document.getElementById('features');
        
        if (target) {
            // Дополнительные параметры для плавности
            const scrollOptions = {
                behavior: 'smooth',
                block: 'start',    // 'start', 'center', 'end' или 'nearest'
                inline: 'nearest'
            };

            // Небольшая задержка для гарантированной загрузки всех элементов
            setTimeout(() => {
                target.scrollIntoView(scrollOptions);
                
                // Дополнительный offset (если нужно учесть фиксированное меню)
                const yOffset = -80; // Смещение в пикселях
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({top: y, behavior: 'smooth'});
            }, 100); // Задержка 100мс
        }
    }
});


window.addEventListener('load', function() {
    // Проверяем наличие якоря в URL
    if (window.location.hash === '#solutions') {
        const target = document.getElementById('solutions');
        
        if (target) {
            // Дополнительные параметры для плавности
            const scrollOptions = {
                behavior: 'smooth',
                block: 'start',    // 'start', 'center', 'end' или 'nearest'
                inline: 'nearest'
            };

            // Небольшая задержка для гарантированной загрузки всех элементов
            setTimeout(() => {
                target.scrollIntoView(scrollOptions);
                
                // Дополнительный offset (если нужно учесть фиксированное меню)
                const yOffset = -80; // Смещение в пикселях
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({top: y, behavior: 'smooth'});
            }, 100); // Задержка 100мс
        }
    }
});


window.addEventListener('load', function() {
    // Проверяем наличие якоря в URL
    if (window.location.hash === '#contacts') {
        const target = document.getElementById('contacts');
        
        if (target) {
            // Дополнительные параметры для плавности
            const scrollOptions = {
                behavior: 'smooth',
                block: 'start',    // 'start', 'center', 'end' или 'nearest'
                inline: 'nearest'
            };

            // Небольшая задержка для гарантированной загрузки всех элементов
            setTimeout(() => {
                target.scrollIntoView(scrollOptions);
                
                // Дополнительный offset (если нужно учесть фиксированное меню)
                const yOffset = -80; // Смещение в пикселях
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({top: y, behavior: 'smooth'});
            }, 100); // Задержка 100мс
        }
    }
});


window.addEventListener('load', function() {
    // Проверяем наличие якоря в URL
    if (window.location.hash === '#faq') {
        const target = document.getElementById('faq');
        
        if (target) {
            // Дополнительные параметры для плавности
            const scrollOptions = {
                behavior: 'smooth',
                block: 'start',    // 'start', 'center', 'end' или 'nearest'
                inline: 'nearest'
            };

            // Небольшая задержка для гарантированной загрузки всех элементов
            setTimeout(() => {
                target.scrollIntoView(scrollOptions);
                
                // Дополнительный offset (если нужно учесть фиксированное меню)
                const yOffset = -80; // Смещение в пикселях
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({top: y, behavior: 'smooth'});
            }, 100); // Задержка 100мс
        }
    }
});