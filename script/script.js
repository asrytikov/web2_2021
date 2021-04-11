$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false,
    });
    $('.bxslider-team').bxSlider({
        pager: false,
        controls: false
    });
    $('.accordion').accordion({
        defaultOpen:''
    });
    $(function(){
        let filterlist = {
            init: function(){
                $('.workportfolio').mixitup({
                    targetSelection: '.portfolio',
                    filterSelection: '.filter',
                    effects: ['fade'],
                    easing: 'snap'
                });
            },
        };
        filterlist.init();
    });

});
