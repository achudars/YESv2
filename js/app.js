(function ($) {

    $.fn.foundationAccordion = function (options) {

        $(document).on('click.fndtn', '.accordion li', function () {
            var flyout = $(this).children('.content').first();
            $('.accordion .content').not(flyout).hide().parent('li').removeClass('active');
            flyout.show(0, function () {
                flyout.parent('li').addClass('active');
            });
        });

    };

})(jQuery);

jQuery(document).ready(function ($) {

    $(document).foundationAccordion();

    /* Use this js doc for all application specific JS */
    //Load Home page Orbit
    $(window).load(function () {
        $('#featured').orbit({
            timer: true,
            animation: 'horizontal-slide',
            bullets: true
        });
        $('#business-block .slider-nav').hide();
    });

    $('#business-block').on({
        mouseenter: function () {
            $('#business-block .slider-nav').show();
        },
        mouseleave: function () {
            $('#business-block .slider-nav').hide();
        }
    });


    /* Accordion menu on mobile */
    $('#menu-toggler').on({
        click: function () {
            $('#primary').slideToggle();
            $('#secondary').hide();
        }
    });

    /* Ensure main menu is visible always above 768px */
    //$(window).resize(function () {
    //    if (Modernizr.mq('only screen and (min-width: 768px)')) {
    //        $('#primary').show();
    //    }
    //});
    /* Accordion menu on mobile */
    $('#search-toggler').on({
        click: function () {
            $('#secondary').slideToggle();
            $('#primary').hide();
        }
    });

    /* Ensure main menu is visible always above 768px */
    $(window).resize(function () {
        if (Modernizr.mq('only screen and (min-width: 768px)')) {
            $('#primary').show();
            $('#secondary').show();
        }
    });


    /* TABS --------------------------------- */
    /* Remove if you don't need :) */

    function activateTab($tab) {
        var $activeTab = $tab.closest('dl').find('a.active'),
				contentLocation = $tab.attr("href") + 'Tab';

        // Strip off the current url that IE adds
        contentLocation = contentLocation.replace(/^.+#/, '#');

        //Make Tab Active
        $activeTab.removeClass('active');
        $tab.addClass('active');

        //Show Tab Content
        $(contentLocation).closest('.tabs-content').children('li').hide();
        $(contentLocation).css('display', 'block');
    }

    $('dl.tabs').each(function () {
        //Get all tabs
        var tabs = $(this).children('dd').children('a');
        tabs.click(function (e) {
            activateTab($(this));
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
    });

    if (window.location.hash) {
        activateTab($('a[href="' + window.location.hash + '"]'));
        $.foundation.customForms.appendCustomMarkup();
    }

    /* ALERT BOXES ------------ */
    $(".alert-box").delegate("a.close", "click", function (event) {
        event.preventDefault();
        $(this).closest(".alert-box").fadeOut(function (event) {
            $(this).remove();
        });
    });


    /* PLACEHOLDER FOR FORMS ------------- */
    /* Remove this and jquery.placeholder.min.js if you don't need :) */

    $('input, textarea').placeholder();

    /* TOOLTIPS ------------ */
    $(this).tooltips();



    /* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
    //	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
    //	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
    //	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
    //	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



    /* DROPDOWN NAV ------------- */

    var lockNavBar = false;
    $('.nav-bar a.flyout-toggle').live('click', function (e) {
        e.preventDefault();
        var flyout = $(this).siblings('.flyout');
        if (lockNavBar === false) {
            $('.nav-bar .flyout').not(flyout).slideUp(500);
            flyout.slideToggle(500, function () {
                lockNavBar = false;
            });
        }
        lockNavBar = true;
    });
    if (Modernizr.touch) {
        $('.nav-bar>li.has-flyout>a.main').css({
            'padding-right': '75px'
        });
        $('.nav-bar>li.has-flyout>a.flyout-toggle').css({
            'border-left': '1px dashed #eee'
        });
    } else {
        $('.nav-bar>li.has-flyout').hover(function () {
            $(this).children('.flyout').show();
        }, function () {
            $(this).children('.flyout').hide();
        })
    }


    /* DISABLED BUTTONS ------------- */
    /* Gives elements with a class of 'disabled' a return: false; */

});
