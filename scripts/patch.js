$(function () {
    
    $(document).on('click', '.nav-tags__header a', function (e) {
        e.preventDefault();
        $(this)
            .closest('.nav-tags')
            .find('.nav-tags__crop')
            .slideToggle();
    });

    $(document).on('click', '.nav-tags__toggle a', function (e) {
        e.preventDefault();

        var $_ = $(this).closest('.nav-tags');
        var $button = $_.find('.nav-tags__toggle');
        var $tags = $_.find('.nav-tags__list div');
        
        var visibleCount = $button.data('visible-count');
        
        var $rest = $tags.filter(function (index) {
            return index > visibleCount;
        });
        
        $rest.not($button).toggle();
        $button.toggleClass('pressed');
    });

    $('.cake-options__wrap').each(function (){
        $(this).find('.cake-options__list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: $(this).find('.cake-options__prev'),
            nextArrow: $(this).find('.cake-options__next'),
            responsive: [
              {
                breakpoint: 1027,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
          });
    });

});