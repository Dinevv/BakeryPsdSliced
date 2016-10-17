function toggleNav()
{
    $("#navigation").slideToggle('fast');
}

$(document).ready(function() {
    $('#showNav').click(function(){
        $(this).toggleClass('hide');
    });
});

$(document).ready(function() {
    $("#slider1").owlCarousel({
        itemsCustom : [
            [1140, 3],
            [900,6],
            [700,5],
            [600,4],
            [500,3],
            [400,2],
            [350,1],
        ],
        itemsScaleUp : true,
        autoWidth:true,

        // Responsive
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,

        //Pagination
        pagination : true,
        paginationNumbers: false,

        // Navigation
        navigation : true,
        navigationText : ["<img src='imgs/slider-arrow.png' class='left-arrow' alt='left arrow'>","<img src='imgs/slider-arrow-r.png' class='right-arrow' alt='right arrow'>"],
        rewindNav : true,
        scrollPerPage : true,
    });
});
