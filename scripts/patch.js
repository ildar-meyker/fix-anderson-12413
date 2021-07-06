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
});