$(document).ready(function(){
    let filterList = {
        init: function(){
            $('.workportfolio').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap'
            });
        },
    };
filterList.init();
console.log(filterList);
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
    
    
});
