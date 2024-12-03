$('document').ready(function() {

    $('.insert__block').css('display','none');
    $('.get').css('display','none');

    $('#insert').click(function() {
        $('.get').css('display','block');
        $('.insert__block').css('display','block');
        $('.get__data').css('display','none');
        $('.insert').css('display','none');
    })

    $('#get').click(function() {
        $('.get').css('display','none');
        $('.insert__block').css('display','none');
        $('.get__data').css('display','block');
        $('.insert').css('display','block');
    })
})