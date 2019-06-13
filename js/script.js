$(document).ready(function(){
    $('.read-more').click(function(){
        $(this).parent().children(".read-more-text").slideToggle();

        if (!$(this).hasClass('active')) {
            $(this).html('Скрыть');
        } else {
            $(this).html('Показать');
        }
        $(this).toggleClass('active');
    });

});
