$(document).ready(function() {
    $('.btn-ribbon').css('top', '-20px');    

    function Utils() {

    }
    
    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).height();
    
            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };    

    let val1= 0;
    let topH = 0;

    let top = 0;
    let dTop = 0;

    if (window.innerWidth > 1410) {
        top = -97;
        dTop = -20;
    } else if (window.innerWidth < 768) {
        top = -97 / 768 * window.innerWidth;
        dTop = -20 / 768 * window.innerWidth;
    } else {
        top = (window.innerWidth / 1410 * -97);
        dTop = (window.innerWidth / 1410 * -20);
    }

    var Utils = new Utils();
    function getRibbonViewState() {
        var isElementInView = Utils.isElementInView($('.btn-ribbon'), false);

        if (isElementInView) {
            val1 = 1;
            topH = topH > 0  ? topH : $(this).scrollTop();
        } else {
            val1 = 0;
            topH = 0;
        }
        return isElementInView;
    }    

    if (getRibbonViewState()) {
        $('.btn-ribbon').css('top', `${dTop}px`);
    }

    $('#btn_hamburger').on('click', function() {
        $('body').toggleClass('is-menuopen');
        $(this).toggleClass('on');
        $('.nav-menu').slideToggle();
    });

    $('.scroll-down').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });

    var topBtn = $('#pagetop');
    topBtn.hide();

    //スクロールが100に達したらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn(0);
        } else {
            topBtn.fadeOut(0);
        }

        getRibbonViewState();
        
        if (topH > 0 && ($(this).scrollTop() - topH) > 77) {
            console.log(top);
            $('.btn-ribbon').css('top', `${top}px`);
        } else {
            $('.btn-ribbon').css('top', `${dTop}px`);
        }
    });
    //スクロールしてトップ
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        setTimeout(function() {
            location.reload();
        }, 3500);
        return false;
    });

    $('#pagetop').click(function() {
        $('#pagetop')
            .animate({
                'right': '0px',
                'top': '400px'
            }, 0, 'linear')
            .animate({
                'right': '0',
                'top': '-2000px'
            }, 6000, 'linear');
    });
});