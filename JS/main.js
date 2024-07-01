$(document).ready(function(){
    $('.menu-buttom').click(function(){
        $('.menu').slideToggle();
    });

    $('.carousel').slick({
        dots:true,
        arrows: true
    })

})